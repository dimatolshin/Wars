import os
import random
import uuid

from django.utils import timezone
from rest_framework import status
from rest_framework.response import Response
from django.shortcuts import render
from rest_framework.views import APIView
from .models import *
from .serializers import *
from django.core import serializers
from django.http import JsonResponse, Http404
from django.core.serializers.json import DjangoJSONEncoder
import json
import base64
from django.http import HttpResponse
import mimetypes
from aiogram.utils.deep_linking import create_start_link, decode_payload
import logging
from django.shortcuts import get_object_or_404

file_path = os.path.join(os.path.dirname(__file__), 'info_for_db.json')
with open(file_path, 'r') as file:
    data = json.load(file)


def encode_image_to_base64(image_field):
    return base64.b64encode(image_field.read()).decode('utf-8')


class MainPage(APIView):
    def get(self, request, tg_id, name):
        try:
            person = Person.objects.get(tg_id=tg_id)
            castle = Castle.objects.get(person=person)
        except Person.DoesNotExist:

            person = Person.objects.create(
                tg_id=tg_id,
                name=name,
                start_energy=data["Person"]["1"]["start_energy"],
                now_energy=data["Person"]["1"]["start_energy"],
                lvl=data["Person"]["1"]["lvl"],
                recharge_energy=data["Person"]["1"]["recharge_energy"]
            )

            castle = Castle.objects.create(
                person=person,
                lvl=data["Castle"]["1"]["lvl"],
                start_hp=data["Castle"]["1"]["start_hp"],
                now_hp=0
            )
            Visit.objects.create(
                person=person,
                numbers_list=[int(i) for i in data['Daly_Bonus'] if int(i) > 7]
            )
            army_data = data["Army"]
            armies = []
            lvl = 0
            for color in army_data:
                if army_data[color]["card"]["0"]["cards"] == 0:
                    lvl = 1
                else:
                    lvl = 0
                army = Army.objects.create(
                    name=army_data[color]["info"]["name"],
                    image=Picture.objects.filter(name=army_data[color]["info"]["name"]).first(),
                    speed=army_data[color]["speed"][f"{lvl}"]["speed"],
                    lvl_speed=army_data[color]["speed"][f"{lvl}"]["lvl_speed"],
                    price_speed=army_data[color]["speed"][f"{lvl}"]["price_speed"],
                    damage=army_data[color]["damage"][f"{lvl}"]["damage"],
                    lvl_damage=army_data[color]["damage"][f"{lvl}"]["lvl_damage"],
                    price_damage=army_data[color]["damage"][f"{lvl}"]["price_damage"],
                    energy=army_data[color]["speed"][f"{lvl}"]["energy"],
                    id_person=army_data[color]["info"]["id_person"],
                    evolve_lvl=lvl,
                    max_cards=army_data[color]["card"][f"{lvl}"]["cards"],
                    max_lvl_upgrade=army_data[color]["card"][f"{lvl}"]["max_lvl_upgrade"],
                )
                if army.evolve_lvl == 1:
                    person.my_army.add(army)
                armies.append(army)

            person.army.add(*armies)
            person.save()
        person_list = {
            'lvl': person.lvl,
            'money': person.money,
            'energy_now': person.now_energy,
            'energy_start': person.start_energy,
            'hp_castle_now': castle.now_hp,
            'hp_castle_start': castle.start_hp,
            'recharge_energy': person.recharge_energy,
            'units_produced': person.units_produced,
            'upgrades_made': person.upgrades_made,
            'castles_destroyed': person.castles_destroyed,
            'money_spent': person.money_spent,
            'friends_invited': person.friends_invited,
            'box_bronze': person.box_bronze,
            'box_silver': person.box_silver,
            'box_gold': person.box_gold
        }

        return JsonResponse(person_list)


class Tap(APIView):
    """
        Эндпоинт для обновления данных пользователя и его замка.

        Принимает POST-запрос с данными о деньгах, энергии и здоровье замка, а также идентификатором пользователя.

        Необходимые переменные для корректной работы:
        - `money`: Количество денег, которое нужно добавить к текущему балансу пользователя.
        - `energy`: Количество энергии, которое нужно установить для пользователя.
        - `hp`: Количество здоровья, которое нужно установить для замка пользователя.
        - `tg_id`: Уникальный идентификатор пользователя в Telegram.
    """
    def post(self, request, *args, **kwargs):
        money = self.request.data['money']
        energy = self.request.data['energy']
        hp = self.request.data['hp']
        person_id = self.request.data['tg_id']
        person = Person.objects.get(tg_id=person_id)
        castle = Castle.objects.get(person=person)
        person.money += int(money)
        person.now_energy = energy
        person.units_produced += energy
        castle.now_hp = int(hp)
        person.save(update_fields=['now_energy', 'money', 'units_produced'])
        castle.save()
        data = {'money': person.money, 'energy_now': person.now_energy, 'hp_castle_now': castle.now_hp, }
        return JsonResponse(data)


class Upgrade_army_damage(APIView):
    """
        Эндпоинт для улучшения урона армии пользователя.

        Принимает POST-запрос с данными об идентификаторе пользователя и идентификаторе воина.

        Необходимые переменные для корректной работы:
        - `tg_id`: Уникальный идентификатор пользователя в Telegram.
        - `id_warrior`: Уникальный идентификатор воина (юнита).
    """
    def post(self, request):
        person = Person.objects.get(tg_id=request.data['tg_id'])
        warrior = Army.objects.get(person=person, id_person=request.data['id_warrior'])
        if person.money >= warrior.price_damage and warrior.lvl_damage < warrior.max_lvl_upgrade:
            try:
                next_lvl_damage = data["Army"][f"{warrior.name}"]["damage"][f"{warrior.lvl_damage + 1}"]["lvl_damage"]
                next_damage = data["Army"][f"{warrior.name}"]["damage"][f"{warrior.lvl_damage + 1}"]["damage"]
                next_price_damage = data["Army"][f"{warrior.name}"]["damage"][f"{warrior.lvl_damage + 1}"][
                    "price_damage"]
            except KeyError:
                return Response({'Error': 'Это максимальное улучшение'}, status=status.HTTP_400_BAD_REQUEST)

            person.money -= warrior.price_damage
            person.upgrades_made += 1
            person.money_spent += warrior.price_damage
            warrior.lvl_damage = next_lvl_damage
            warrior.damage = next_damage
            warrior.price_damage = next_price_damage
            person.save()
            warrior.save()
            return Response({'money': person.money, 'lvl_damage': warrior.lvl_damage,
                             'damage': warrior.damage, 'price_damage': warrior.price_damage}, status=status.HTTP_200_OK)
        else:
            return Response({
                'Error': 'Улучшения недоступны. Следите за показателем денег и за максимально допустимым уровнем улучшения'},
                status=status.HTTP_403_FORBIDDEN)


class Upgrade_army_speed(APIView):
    """
        Эндпоинт для улучшения скорости армии пользователя.

        Принимает POST-запрос с данными об идентификаторе пользователя и идентификаторе воина.

        Необходимые переменные для корректной работы:
        - `tg_id`: Уникальный идентификатор пользователя в Telegram.
        - `id_warrior`: Уникальный идентификатор воина (юнита).
    """
    def post(self, request):
        person = Person.objects.get(tg_id=request.data['tg_id'])
        warrior = Army.objects.get(person=person, id_person=request.data['id_warrior'])
        if person.money >= warrior.price_speed and warrior.lvl_speed < warrior.max_lvl_upgrade:
            try:
                next_lvl_speed = data["Army"][f"{warrior.name}"]["speed"][f"{warrior.lvl_speed + 1}"]["lvl_speed"]
                next_speed = data["Army"][f"{warrior.name}"]["speed"][f"{warrior.lvl_speed + 1}"]["speed"]
                next_price_speed = data["Army"][f"{warrior.name}"]["speed"][f"{warrior.lvl_speed + 1}"][
                    "price_speed"]
            except KeyError:
                return Response({'Error': 'Это максимальное улучшение'}, status=status.HTTP_400_BAD_REQUEST)
            person.money -= warrior.price_speed
            person.upgrades_made += 1
            person.money_spent += warrior.price_speed
            warrior.lvl_speed = next_lvl_speed
            warrior.speed = next_speed
            warrior.price_speed = next_price_speed
            person.save()
            warrior.save()
            return Response({'money': person.money, 'lvl_speed': warrior.lvl_speed,
                             'price_speed': warrior.price_speed}, status=status.HTTP_200_OK)
        else:
            return Response({
                'Error': 'Улучшения недоступны. Следите за показателем денег и за максимально допустимым уровнем улучшения'},
                status=status.HTTP_403_FORBIDDEN)


class Url_Picture(APIView):
    """
        Эндпоинт для получения изображения по его имени.

        Принимает GET-запрос с именем изображения.

        Необходимые переменные для корректной работы:
        - `name`: Имя изображения, которое нужно получить.
    """
    def get(self, request, name, format=None):
        try:
            photo = Picture.objects.get(name=name)
        except Picture.DoesNotExist:
            return HttpResponse(status=404)

        mime_type, _ = mimetypes.guess_type(photo.image.path)
        response = HttpResponse(photo.image, content_type=mime_type)
        return response


class Takin_Army(APIView):
    """
        Эндпоинт для получения списка армии пользователя.

        Принимает GET-запрос с идентификатором пользователя.

        Необходимые переменные для корректной работы:
        - `tg_id`: Уникальный идентификатор пользователя в Telegram.
    """
    def get(self, request, tg_id: int):
        try:
            person = Person.objects.get(tg_id=tg_id)
        except Person.DoesNotExist:
            return HttpResponse(status=404)
        army_list = [
            {
                'id_warrior': i.id_person,
                'name': i.name,
                'speed': i.speed,
                'damage': i.damage,
                'lvl_speed': i.lvl_speed,
                'price_speed': i.price_speed,
                'lvl_damage': i.lvl_damage,
                'price_damage': i.price_damage,
                'cards': i.cards,
                'max_cards': i.max_cards,
                'lvl': i.evolve_lvl,
                'image': request.build_absolute_uri(f'media/{i.image.name}/').replace(
                    f'/takin_army/{person.tg_id}', ''),
                'max_lvl_upgrade': i.max_lvl_upgrade,
                'capacity': i.capacity,
                'lvl_capacity': i.lvl_capacity,
                'price_capacity': i.price_capacity,
                'current_units': i.current_units,
                'cp': i.calculate_cp(),
                'max_cp': i.calculate_cp_max()
            }
            for i in person.army.all()
        ]
        army_list.sort(key=lambda x: x['id_warrior'])
        my_army_list = [
            {
                'id_warrior': i.id_person,
                'name': i.name,
                'speed': i.speed,
                'damage': i.damage,
                'lvl_speed': i.lvl_speed,
                'price_speed': i.price_speed,
                'lvl_damage': i.lvl_damage,
                'price_damage': i.price_damage,
                'cards': i.cards,
                'max_cards': i.max_cards,
                'lvl': i.evolve_lvl,
                'image': request.build_absolute_uri(f'media/{i.image.name}/').replace(
                    f'/takin_army/{person.tg_id}', ''),
                'max_lvl_upgrade': i.max_lvl_upgrade,
                'capacity': i.capacity,
                'lvl_capacity': i.lvl_capacity,
                'price_capacity': i.price_capacity,
                'current_units': i.current_units,
                'cp': i.calculate_cp(),
                'max_cp': i.calculate_cp_max()
            }
            for i in person.my_army.all()
        ]
        my_army_list.sort(key=lambda x: x['id_warrior'])
        response_data = {
            'all_army': army_list,
            'my_army': my_army_list
        }
        return JsonResponse(response_data, safe=False)


class CompleteReferralSystem(APIView):
    """
        Эндпоинт для завершения реферальной системы.

        Принимает GET-запрос с идентификатором нового пользователя и идентификатором реферала.

        Необходимые переменные для корректной работы:
        - `new_id`: Уникальный идентификатор нового пользователя в Telegram.
        - `referral_id`: Уникальный идентификатор реферала в Telegram.
    """
    def get(self, request, new_id: int, referral_id: int):
        if new_id == referral_id:
            return Response({"Error": "Нельзя добавить самого себя в друзья!"}, status=status.HTTP_400_BAD_REQUEST)
        else:
            new_person = get_object_or_404(Person, tg_id=new_id)
            referral = get_object_or_404(Person, tg_id=referral_id)

            info1_exists = ReferralSystem.objects.filter(referral=referral, new_person=new_person).exists()
            info2_exists = ReferralSystem.objects.filter(referral=new_person, new_person=referral).exists()

            if info1_exists or info2_exists:
                return Response({"Error": "Данной игрок уже находится у вас в друзьях"},
                                status=status.HTTP_400_BAD_REQUEST)
            else:
                ReferralSystem.objects.create(referral=referral, new_person=new_person)
                return Response({'success': 'Перейдите во кладку друзья и заберите бонус'}, status=status.HTTP_200_OK)


class AllFriends(APIView):
    """
        Эндпоинт для получения списка друзей пользователя.

        Принимает GET-запрос с идентификатором пользователя.

        Необходимые переменные для корректной работы:
        - `tg_id`: Уникальный идентификатор пользователя в Telegram.
    """
    def get(self, request, tg_id: int):
        person = get_object_or_404(Person, tg_id=tg_id)
        data = []
        info = ReferralSystem.objects.filter(referral=person)
        person.friends_invited = info.count()
        person.save()
        if info:
            for i in info:
                data.append({'name': i.new_person.name,
                             'lvl': i.new_person.lvl,
                             'person_id': i.new_person.id,
                             'referral_system_id': i.id,
                             'flag': i.new_person_bonus})

        info = ReferralSystem.objects.filter(new_person=person)
        if info:
            for i in info:
                data.append({'name': i.referral.name,
                             'lvl': i.referral.lvl,
                             'person_id': i.referral.id,
                             'referral_system_id': i.id,
                             'flag': i.referral_bonus})
        return Response(data)


class TakinBonus(APIView):
    """
        Эндпоинт для получения бонуса за реферальную систему.

        Принимает POST-запрос с идентификатором пользователя и идентификатором реферальной системы.

        Необходимые переменные для корректной работы:
        - `tg_id`: Уникальный идентификатор пользователя в Telegram.
        - `referral_system_id`: Уникальный идентификатор реферальной системы.
    """
    def post(self, request):
        person = get_object_or_404(Person, tg_id=request.data['tg_id'])
        system = get_object_or_404(ReferralSystem, id=request.data['referral_system_id'])
        if system.referral == person and system.referral_bonus == True:
            person.money += data["BonusSystem"]["referral"]["ordinary"]["money"]
            bonus_warrior = get_object_or_404(Army, name="bonus", person=person)
            bonus_warrior.cards = data["BonusSystem"]["referral"]["ordinary"]["cards"]
            bonus_warrior.save()
            person.save()
            system.referral_bonus = False
            system.save()
            return Response({
                'Congratulations': f'Вы получили бонус с в размере {data["BonusSystem"]["referral"]["ordinary"]["money"]} монет и {data["BonusSystem"]["referral"]["ordinary"]["cards"]} бонусные карты за то что привели друга'})
        if system.new_person == person and system.new_person_bonus == True:
            person.money += data["BonusSystem"]["new_person"]["money"]
            person.save()
            system.new_person_bonus = False
            system.save()
            return Response(
                {
                    'Congratulations': f'Вы получили бонус с в размере {data["BonusSystem"]["new_person"]["money"]} монет  за то что присоединились к игре'})
        else:
            return Response({'Error': "Вы уже получали бонус"}, status=status.HTTP_400_BAD_REQUEST)


class GenerateRefLinkView(APIView):
    """
        Эндпоинт для генерации реферальной ссылки.

        Принимает GET-запрос с идентификатором пользователя.

        Необходимые переменные для корректной работы:
        - `tg_id`: Уникальный идентификатор пользователя в Telegram.
    """
    def get(self, request, tg_id: int):
        try:
            create_link = f"https://t.me/EggWars_bot?start=id_{tg_id}"
        except Exception as e:
            logging.error(f"Error generating referral link: {e}")
            return Response({'error': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

        return Response({'ref_link': create_link}, status=status.HTTP_200_OK)


class ShowAllCards(APIView):
    """
        Эндпоинт для отображения всех карт пользователя.

        Принимает POST-запрос с идентификатором пользователя.

        Необходимые переменные для корректной работы:
        - `tg_id`: Уникальный идентификатор пользователя в Telegram.
    """
    def post(self, request):
        info = []
        person = get_object_or_404(Person, tg_id=request.data['tg_id'])
        warriors = person.my_army.all()
        for i in warriors:
            info.append({'lvl': i.evolve_lvl,
                         'id_warrior': i.id_person,
                         'image': request.build_absolute_uri(f'media/media/{i.image.name}').replace(
                             f'/show_cards', '')
                         })
        return Response(info, status=status.HTTP_200_OK)


class EvolveCards(APIView):
    """
        Эндпоинт для эволюции карт.

        Принимает POST-запрос с идентификатором пользователя и идентификатором воина.

        Необходимые переменные для корректной работы:
        - `tg_id`: Уникальный идентификатор пользователя в Telegram.
        - `id_warrior`: Уникальный идентификатор воина.
    """
    def post(self, request):
        person = get_object_or_404(Person, tg_id=request.data['tg_id'])
        warrior_id = request.data['id_warrior']
        warrior = person.army.filter(id_person=warrior_id).first()
        if not warrior:
            return Response({'Error': 'Воин не найден в армии'}, status=status.HTTP_404_NOT_FOUND)

        if not person.my_army.filter(id=warrior_id).exists():
            person.my_army.add(warrior)
            person.save()
        if warrior.cards >= warrior.max_cards:
            try:
                next_evolve_lvl = data["Army"][f"{warrior.name}"]["card"][f"{warrior.evolve_lvl + 1}"]["evolve_lvl"]
                next_max_cards = data["Army"][f"{warrior.name}"]["card"][f"{warrior.evolve_lvl + 1}"]["cards"]
                next_max_lvl_upgrade = data["Army"][f"{warrior.name}"]["card"][f"{warrior.evolve_lvl + 1}"]["cards"]
                print(f"lvl:{next_evolve_lvl}, max_cards:{next_max_cards},lvl_upgrade{next_max_lvl_upgrade}")
            except KeyError:
                return Response({'Error': 'Это максимальное улучшение'}, status=status.HTTP_400_BAD_REQUEST)
            person.upgrades_made += 1
            warrior.evolve_lvl = next_evolve_lvl
            warrior.cards -= warrior.max_cards
            warrior.max_cards = next_max_cards
            warrior.max_lvl_upgrade = next_max_lvl_upgrade
            warrior.can_evolve = False
            warrior.save()
            return Response(
                {'now_cards': warrior.cards, 'max_cards': warrior.max_cards, 'evolve_lvl': warrior.evolve_lvl,
                 'max_lvl_upgrade': warrior.max_lvl_upgrade}, status=status.HTTP_200_OK)
        else:
            return Response({'Error': 'Недостаточно карт'}, status=status.HTTP_400_BAD_REQUEST)


class InfoBonus(APIView):
    """
        Эндпоинт для получения информации о бонусах.

        Принимает GET-запрос с идентификатором пользователя.

        Необходимые переменные для корректной работы:
        - `tg_id`: Уникальный идентификатор пользователя в Telegram.
    """
    def get(self, request, tg_id: int):
        person = get_object_or_404(Person, tg_id=tg_id)
        warrior = get_object_or_404(Army, name=data["Army"]["bonus"]["info"]["name"], person=person)
        return Response({"Info_ordinary_bonus":
                             {'money': data["BonusSystem"]["referral"]["ordinary"]["money"],
                              'cards': data["BonusSystem"]["referral"]["ordinary"]["cards"]},
                         "Info_prime_bonus":
                             {'money': data["BonusSystem"]["referral"]["prime"]["money"],
                              'cards': data["BonusSystem"]["referral"]["prime"]["cards"]},
                         "My_Bonus_Card":
                             {'name': warrior.name,
                              'now_cards': warrior.cards,
                              'max_cards': warrior.max_cards,
                              'evolve_lvl': warrior.evolve_lvl,
                              'image': request.build_absolute_uri(f'media/media/{warrior.image.name}').replace(
                                  f'/info_bonus/{person.tg_id}', ''), }
                         })


class Check_And_Give_Daly_Bonus(APIView):
    """
        Эндпоинт для проверки и выдачи ежедневного бонуса.

        Принимает POST-запрос и GET-запрос с идентификатором пользователя.

        Необходимые переменные для корректной работы:
        - `tg_id`: Уникальный идентификатор пользователя в Telegram.
    """

    def get(self, request, tg_id: int):
        """
            Описание:
            Метод GET используется для получения информации о текущем статусе ежедневного бонуса пользователя.
            Возвращает информацию о том, забрал ли пользователь бонус сегодня, последний день, за который был получен
            бонус, а также список бонусов на каждый день.
            Параметры:
            tg_id: Уникальный идентификатор пользователя в Telegram. Обязательный параметр.
            Возвращаемое значение:
            Успешный ответ (HTTP 200 OK):
            daily_bonuses: Список бонусов на каждый день.
            last_bonus_day: Последний день, за который был получен бонус.
            has_taken_bonus_today: Флаг, указывающий, забрал ли пользователь бонус сегодня.
        """
        person = get_object_or_404(Person, tg_id=tg_id)
        today = timezone.now().date()
        # Проверяем, забрал ли пользователь бонус сегодня
        has_taken_bonus_today = Visit.objects.filter(person=person, date=today, get_bonus=True).exists()
        # Получаем последний визит пользователя
        last_visit = person.visit.last()
        bonus_day = last_visit.week_streak if last_visit else 1
        # Добавляем информацию о бонусах на каждый день
        daily_bonuses = data['Daly_Bonus']
        daily_bonus_list = [{"day": int(day), **bonus} for day, bonus in
                            sorted(daily_bonuses.items(), key=lambda x: int(x[0])) if int(day) < 8]
        # Добавляем информацию о бонусах в сундуках
        box_bonuses = [{"day": int(day), **bonus} for day, bonus in
                       sorted(daily_bonuses.items(), key=lambda x: int(x[0])) if int(day) >= 8]
        response_data = {
            'daily_bonuses': daily_bonus_list,
            'box_bonuses': box_bonuses,
            'last_bonus_day': bonus_day,  # Добавляем последний день, за который был получен бонус
            'has_taken_bonus_today': has_taken_bonus_today  # Добавляем флаг, забрал ли пользователь бонус сегодня
        }
        return Response(response_data, status=status.HTTP_200_OK)

    def post(self, request):
        """
            Описание:
            Метод POST используется для выдачи ежедневного бонуса пользователю. Если пользователь уже забрал бонус
            сегодня, возвращается соответствующее сообщение. В противном случае, бонус выдается, и пользователь получает
            соответствующие ресурсы (деньги, кристаллы, энергия).
            Параметры:
            tg_id: Уникальный идентификатор пользователя в Telegram. Обязательный параметр.
            Возвращаемое значение:
            Успешный ответ (HTTP 200 OK):
            response: Сообщение о том, что бонус успешно получен.
            daily_bonuses: Список бонусов на каждый день.
            user_prize: Информация о выданных ресурсах (деньги, кристаллы, энергия).
            bonus_day: День, за который получен бонус.
            Ошибка (HTTP 400 Bad Request):
            response: Сообщение о том, что пользователь уже забрал бонус сегодня.
        """
        person = get_object_or_404(Person, tg_id=request.data['tg_id'])
        today = timezone.now().date()

        # Проверяем, забрал ли пользователь бонус сегодня
        if Visit.objects.filter(person=person, date=today, get_bonus=True).exists():
            return Response({'response': "Вы уже получили бонус сегодня"}, status=status.HTTP_400_BAD_REQUEST)

        # Если бонус не забрали, выдаем его
        last_visit = person.visit.last()
        bonus_day = last_visit.week_streak
        prizes = data['Daly_Bonus'][f'{bonus_day}']
        user_prize = {}

        for key, item in prizes.items():
            if key == 'money':
                person.money += item
                user_prize['money'] = item
            elif key == 'crystal':
                person.crystal += item
                user_prize['crystal'] = item
            elif key == 'energy':
                person.now_energy += item
                user_prize['energy'] = item

        # Создаем новый визит с флагом get_bonus=True
        Visit.objects.create(person=person, date=today, streak=last_visit.streak + 1, week_streak=last_visit.week_streak + 1, get_bonus=True)

        # Добавляем информацию о бонусах на каждый день
        daily_bonuses = data['Daly_Bonus']
        response_data = {
            'response': "Бонус успешно получен",
            'daily_bonuses': daily_bonuses,
            'user_prize': user_prize,
            'bonus_day': bonus_day  # Добавляем день, за который получен бонус
        }
        return Response(response_data, status=status.HTTP_200_OK)


class Get_Bonus_per_Сommon_Enter(APIView):
    """
        Эндпоинт для получения бонуса за общее количество входов.

        Принимает GET-запрос с идентификатором пользователя.

        Необходимые переменные для корректной работы:
        - `tg_id`: Уникальный идентификатор пользователя в Telegram.
    """
    def get(self, request):
        person = get_object_or_404(Person, tg_id=request.data['tg_id'])
        if person.visit.streak in person.visit.numbers_list:
            prizes = data['Daly_Bonus'][f'{person.visit.streak}']
            for key, item in prizes.items():
                if key == 'money':
                    person.money += item
                elif key == 'crystal':
                    person.crystal += item
                elif key == 'energy':
                    person.now_energy += item
            person.visit.numbers_list.remove(person.visit.streak)
            person.visit.save()
            # Добавляем информацию о бонусах
            daily_bonuses = data['Daly_Bonus']
            response_data = {
                'response': "Бонус успешно получен",
                'daily_bonuses': daily_bonuses
            }
            return Response(response_data, status=status.HTTP_200_OK)
        else:
            return Response({'error': 'Что то пошло не так'}, status=status.HTTP_400_BAD_REQUEST)


class TaskPlayerDetailView(APIView):
    """
        Информация о задачах и их статусе у игрока.

        Принимает GET-запрос с идентификатором пользователя (tg_id) и необязательным параметром dop_name.

        Необходимые переменные для корректной работы:
        - `tg_id`: Уникальный идентификатор пользователя в Telegram.
        - `dop_name`: (Опционально) Дополнительное имя задачи для фильтрации.

        Возвращает:
        - Список задач и их статусы.
    """

    def get(self, request, tg_id, dop_name=None):
        """
            Получаем информацию о всех задачах или об одной.
            Если указан `dop_name`, возвращает информацию о конкретной задаче.
            В противном случае возвращает информацию о всех задачах пользователя.
        """
        person = get_object_or_404(Person, tg_id=tg_id)
        if dop_name:
            tasks = PlayerTask.objects.filter(person=person, task__dop_name=dop_name)
        else:
            tasks = PlayerTask.objects.filter(person=person).order_by('completed', 'id')

        # Проверяем, что tasks является queryset'ом
        if not tasks.exists():
            return Response({"detail": "Задачи не найдены"}, status=status.HTTP_404_NOT_FOUND)

        serializer = PlayerTaskSerializer(tasks, many=True, context={'request': request})
        return Response(serializer.data, status=status.HTTP_200_OK)

    def post(self, request, tg_id, dop_name):
        """
            Проверяем прошло ли 30 минут, чтобы задача считалась выполненной.

            Необходимые переменные для корректной работы:
            - `tg_id`: Уникальный идентификатор пользователя в Telegram.
            - `dop_name`: Дополнительное имя задачи для фильтрации.

            Возвращает:
            - Информацию о задаче после обновления.
        """
        if tg_id and dop_name:
            person = get_object_or_404(Person, tg_id=tg_id)
            tasks = PlayerTask.objects.filter(person=person, task__dop_name=dop_name)
            task = tasks.first()
            serializer = PlayerTaskSerializer(task, data=request.data, partial=True)
            if serializer.is_valid():
                serializer.save()
                task.check_completion()
                return Response(serializer.data, status=status.HTTP_200_OK)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        return Response({'error': 'tg_id и dop_name обязательные поля'}, status=status.HTTP_400_BAD_REQUEST)


class StartTaskView(APIView):
    """
        Запуск таймера задачи после перехода на ссылку.

        Принимает POST-запрос с идентификатором пользователя (tg_id) и дополнительным именем задачи (dop_name).

        Необходимые переменные для корректной работы:
        - `tg_id`: Уникальный идентификатор пользователя в Telegram.
        - `dop_name`: Дополнительное имя задачи для фильтрации.

        Возвращает:
        - Информацию о задаче после запуска таймера.
    """
    def post(self, request, tg_id, dop_name):
        """
            Запуск таймера после перехода на ссылку.

            Если задача уже завершена, возвращает ошибку.
            В противном случае запускает таймер выполнения задачи.
        """
        person = get_object_or_404(Person, tg_id=tg_id)
        tasks = PlayerTask.objects.filter(person=person, task__dop_name=dop_name)
        task = tasks.first()
        if task.completed:
            return Response({"error": "Задача уже завершена."}, status=status.HTTP_400_BAD_REQUEST)
        serializer = PlayerTaskSerializer(task, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            task.start_task_player()  # Запуск таймера выполнения задачи
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


def generate_unique_id():
    while True:
        unique_id = random.randint(100000000, 999999999)  # Генерируем 10-значное число
        if not Army.objects.filter(id_person=unique_id).exists():  # Проверяем, существует ли уже такой идентификатор
            return unique_id


class UpgradeArmyCapacity(APIView):
    """
    Эндпоинт для улучшения capacity армии пользователя.

    Принимает POST-запрос с данными об идентификаторе пользователя и идентификаторе воина.

    Необходимые переменные для корректной работы:
    - `tg_id`: Уникальный идентификатор пользователя в Telegram.
    - `id_warrior`: Уникальный идентификатор воина (юнита).
    """
    def post(self, request):
        person = Person.objects.get(tg_id=request.data['tg_id'])
        warrior = Army.objects.get(person=person, id_person=request.data['id_warrior'])

        if person.money >= warrior.price_capacity and warrior.lvl_capacity < warrior.max_lvl_upgrade:
            try:
                next_lvl_capacity = data["Army"][f"{warrior.name}"]["capacity"][f"{warrior.lvl_capacity + 1}"]["lvl_capacity"]
                next_capacity = data["Army"][f"{warrior.name}"]["capacity"][f"{warrior.lvl_capacity + 1}"]["capacity"]
                next_price_capacity = data["Army"][f"{warrior.name}"]["capacity"][f"{warrior.lvl_capacity + 1}"]["price_capacity"]
            except KeyError:
                return Response({'Error': 'Это максимальное улучшение'}, status=status.HTTP_400_BAD_REQUEST)

            person.money -= warrior.price_capacity
            person.upgrades_made += 1
            person.money_spent += warrior.price_capacity
            warrior.lvl_capacity = next_lvl_capacity
            warrior.capacity = next_capacity
            warrior.price_capacity = next_price_capacity

            # Создаем новых юнитов с дефолтными значениями из модели
            while warrior.current_units < warrior.capacity:
                unique_id = generate_unique_id()
                new_unit = Army.objects.create(
                    image=warrior.image,
                    id_person=unique_id,
                    name=warrior.name,
                    speed=Army._meta.get_field('speed').default,
                    damage=Army._meta.get_field('damage').default,
                    energy=Army._meta.get_field('energy').default,
                    lvl_speed=Army._meta.get_field('lvl_speed').default,
                    price_speed=Army._meta.get_field('price_speed').default,
                    lvl_damage=Army._meta.get_field('lvl_damage').default,
                    price_damage=Army._meta.get_field('price_damage').default,
                    evolve_lvl=Army._meta.get_field('evolve_lvl').default,
                    cards=Army._meta.get_field('cards').default,
                    max_cards=Army._meta.get_field('max_cards').default,
                    max_lvl_upgrade=Army._meta.get_field('max_lvl_upgrade').default,
                    can_evolve=Army._meta.get_field('can_evolve').default,
                    capacity=warrior.capacity,
                    lvl_capacity=warrior.lvl_capacity,
                    price_capacity=warrior.price_capacity,
                    current_units=warrior.current_units
                )

                person.my_army.add(new_unit)
                warrior.current_units += 1

            person.save()
            warrior.save()
            return Response({'money': person.money, 'lvl_capacity': warrior.lvl_capacity,
                             'capacity': warrior.capacity, 'price_capacity': warrior.price_capacity,
                             'current_units': warrior.current_units}, status=status.HTTP_200_OK)
        else:
            return Response({
                'Error': 'Улучшения недоступны. Следите за показателем денег и за максимально допустимым уровнем улучшения'},
                status=status.HTTP_403_FORBIDDEN)
