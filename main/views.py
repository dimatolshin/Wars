import os
from aiogram.client.default import DefaultBotProperties
from aiogram.enums import ParseMode
from aiogram.utils.payload import encode_payload
from asgiref.sync import sync_to_async, async_to_sync
from rest_framework import status
from rest_framework.response import Response
from django.shortcuts import render
from rest_framework.views import APIView
from .models import *
from .serializers import *
from django.core import serializers
from django.http import JsonResponse
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
            print(person.lvl, person.now_energy, person.start_energy, person.recharge_energy)

            castle = Castle.objects.create(
                person=person,
                lvl=data["Castle"]["1"]["lvl"],
                start_hp=data["Castle"]["1"]["start_hp"],
                now_hp=0
            )
            print(castle.start_hp, castle.now_hp, castle.lvl)
            army_data = data["Army"]
            armies = []
            for color in ["white", "red", "blue"]:
                army = Army.objects.create(
                    name=army_data[color]["info"]["name"],
                    image=Picture.objects.get(name=army_data[color]["info"]["name"]),
                    speed=army_data[color]["speed"]["1"]["speed"],
                    lvl_speed=army_data[color]["speed"]["1"]["lvl_speed"],
                    price_speed=army_data[color]["speed"]["1"]["price_speed"],
                    damage=army_data[color]["damage"]["1"]["damage"],
                    lvl_damage=army_data[color]["damage"]["1"]["lvl_damage"],
                    price_damage=army_data[color]["damage"]["1"]["price_damage"],
                    energy=army_data[color]["speed"]["1"]["energy"],
                    id_person=army_data[color]["info"]["id_person"],
                    evolve_lvl=army_data[color]["card"]["1"]["evolve_lvl"],
                    cards=army_data[color]["card"]["1"]["cards"],
                    max_lvl_upgrade=army_data[color]["card"]["1"]["max_lvl_upgrade"],
                )
                armies.append(army)

            person.army.add(*armies)
            person.my_army.add(armies[0])
            person.save()
        person_list = {
            'lvl': person.lvl,
            'money': person.money,
            'energy_now': person.now_energy,
            'energy_start': person.start_energy,
            'hp_castle_now': castle.now_hp,
            'hp_castle_start': castle.start_hp,
            'recharge_energy': person.recharge_energy
        }

        return JsonResponse(person_list)


class Tap(APIView):
    def post(self, request, *args, **kwargs):
        money = self.request.data['money']
        energy = self.request.data['energy']
        hp = self.request.data['hp']
        person_id = self.request.data['tg_id']
        person = Person.objects.get(tg_id=person_id)
        castle = Castle.objects.get(person=person)
        person.money += int(money)
        person.now_energy = energy
        castle.now_hp = int(hp)
        person.save(update_fields=['now_energy', 'money'])
        castle.save()
        data = {'money': person.money, 'energy_now': person.now_energy, 'hp_castle_now': castle.now_hp, }
        return JsonResponse(data)


class Upgrade_army_damage(APIView):
    def post(self, request):
        person = Person.objects.get(tg_id=request.data['tg_id'])
        warrior = Army.objects.get(person=person, id_person=request.data['id_warrior'])
        if person.money >= warrior.price_damage:
            try:
                next_lvl_damage = data["Army"][f"{warrior.name}"]["damage"][f"{warrior.lvl_damage + 1}"]["lvl_damage"]
                next_damage = data["Army"][f"{warrior.name}"]["damage"][f"{warrior.lvl_damage + 1}"]["damage"]
                next_price_damage = data["Army"][f"{warrior.name}"]["damage"][f"{warrior.lvl_damage + 1}"][
                    "price_damage"]
            except KeyError:
                return Response({'Error': 'Это максимальное улучшение'}, status=status.HTTP_400_BAD_REQUEST)

            person.money -= warrior.price_damage
            warrior.lvl_damage = next_lvl_damage
            warrior.damage = next_damage
            warrior.price_damage = next_price_damage
            person.save()
            warrior.save()
            return Response({'money': person.money, 'lvl_damage': warrior.lvl_damage,
                             'damage': warrior.damage, 'price_damage': warrior.price_damage}, status=status.HTTP_200_OK)
        else:
            return Response({'Error': 'Недостаточно денег'}, status=status.HTTP_403_FORBIDDEN)


class Upgrade_army_speed(APIView):
    def post(self, request):
        person = Person.objects.get(tg_id=request.data['tg_id'])
        warrior = Army.objects.get(person=person, id_person=request.data['id_warrior'])
        if person.money >= warrior.price_speed:
            try:
                next_lvl_speed = data["Army"][f"{warrior.name}"]["speed"][f"{warrior.lvl_speed + 1}"]["lvl_speed"]
                next_speed = data["Army"][f"{warrior.name}"]["speed"][f"{warrior.lvl_speed + 1}"]["speed"]
                next_price_speed = data["Army"][f"{warrior.name}"]["speed"][f"{warrior.lvl_speed + 1}"][
                    "price_speed"]
            except KeyError:
                return Response({'Error': 'Это максимальное улучшение'}, status=status.HTTP_400_BAD_REQUEST)
            person.money -= warrior.price_speed
            warrior.lvl_speed = next_lvl_speed
            warrior.speed = next_speed
            warrior.price_speed = next_price_speed
            person.save()
            warrior.save()
            return Response({'money': person.money, 'lvl_speed': warrior.lvl_speed,
                             'price_speed': warrior.price_speed}, status=status.HTTP_200_OK)
        else:
            return Response({'Error': 'Недостаточно денег'}, status=status.HTTP_403_FORBIDDEN)


class Url_Picture(APIView):
    def get(self, request, name, format=None):
        try:
            photo = Picture.objects.get(name=name)
        except Picture.DoesNotExist:
            return HttpResponse(status=404)

        mime_type, _ = mimetypes.guess_type(photo.image.path)
        response = HttpResponse(photo.image, content_type=mime_type)
        return response


class Takin_Army(APIView):
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
                'image': request.build_absolute_uri(f'media/media/{i.image.name}').replace(
                    f'/takin_army/{person.tg_id}', '')
            }
            for i in person.army.all()
        ]
        army_list.sort(key=lambda x: x['id_warrior'])
        return JsonResponse(army_list, safe=False)


class CompleteReferralSystem(APIView):
    def get(self, request, new_id: int, referral_id: int):
        new_person = get_object_or_404(Person, tg_id=new_id)
        referral = get_object_or_404(Person, tg_id=referral_id)

        info1_exists = ReferralSystem.objects.filter(referral=referral, new_person=new_person).exists()
        info2_exists = ReferralSystem.objects.filter(referral=new_person, new_person=referral).exists()

        if info1_exists or info2_exists:
            return Response({"Error": "Данной игрок уже находится у вас в друзьях"}, status=status.HTTP_400_BAD_REQUEST)
        else:
            info = ReferralSystem.objects.create(referral=referral, new_person=new_person)
            return Response({'success': 'Перейдите во кладку друзья и заберите бонус'}, status=status.HTTP_200_OK)


class AllFriends(APIView):
    def post(self, request):
        person = get_object_or_404(Person, tg_id=request.data['tg_id'])
        data = []
        info = ReferralSystem.objects.filter(referral=person)
        if info:
            for i in info:
                data.append({'name': i.new_person.name,
                             'lvl': i.new_person.lvl,
                             'person_id': i.new_person.id,
                             'referral_system_id': i.id})

        info = ReferralSystem.objects.filter(new_person=person)
        if info:
            for i in info:
                data.append({'name': i.referral.name,
                             'lvl': i.referral.lvl,
                             'person_id': i.referral.id,
                             'referral_system_id': i.id})
        return Response(data)


class TakinBonus(APIView):
    def post(self, request):
        person = get_object_or_404(Person, tg_id=request.data['tg_id'])
        system = get_object_or_404(ReferralSystem, id=request.data['referral_system_id'])
        if system.referral == person and system.referral_bonus == True:
            person.money += 50000
            person.save()
            system.referral_bonus = False
            system.save()
            return Response({f'Congratulations': "Вы получили бонус с вразмере '50000' за то что привели друга"})
        if system.new_person == person and system.new_person_bonus == True:
            person.money += 10000
            person.save()
            system.new_person_bonus = False
            system.save()
            return Response(
                {f'Congratulations': "Вы получили бонус с вразмере '10000' за то что присоединились к игре"})
        else:
            return Response({'Error': "Вы уже получали бонус"}, status=status.HTTP_400_BAD_REQUEST)


class GenerateRefLinkView(APIView):
    def get(self, request, tg_id: int):
        try:
            create_link = f"https://t.me/EggWars_bot?start=id_{tg_id}"
        except Exception as e:
            logging.error(f"Error generating referral link: {e}")
            return Response({'error': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

        return Response({'ref_link': create_link}, status=status.HTTP_200_OK)
