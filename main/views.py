from aiogram import Bot
from aiogram.client.default import DefaultBotProperties
from aiogram.enums import ParseMode
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


def encode_image_to_base64(image_field):
    return base64.b64encode(image_field.read()).decode('utf-8')


class MainPage(APIView):
    def get(self, request, tg_id, name):
        try:
            person = Person.objects.get(tg_id=tg_id)
            castle = Castle.objects.get(person=person)
        except Person.DoesNotExist:
            person = Person.objects.create(tg_id=tg_id, name=name)
            castle = Castle.objects.create(person=person)
            statistics1 = Statistics_Army.objects.create(price_speed=50, price_bring_money=50)
            statistics2 = Statistics_Army.objects.create(price_speed=100, price_bring_money=100)
            statistics3 = Statistics_Army.objects.create(price_speed=200, price_bring_money=200)
            army1 = Army.objects.create(name='red', speed=7, bring_money=1, image=Picture.objects.get(name='red'),
                                        id_person=1, statistics=statistics1)
            army2 = Army.objects.create(name='blue', bring_money=5, speed=12, image=Picture.objects.get(name='blue'),
                                        id_person=2, statistics=statistics2)
            army3 = Army.objects.create(name='white', bring_money=10, speed=15,
                                        image=Picture.objects.get(name='white'), id_person=3, statistics=statistics3)
            person.army.add(army1, army2, army3)
            person.save()

        person_list = {
            'lvl': person.lvl,
            'money': person.money,
            'energy_now': person.now_energy,
            'energy_start': person.start_energy,
            'hp_castle_now': castle.now_hp,
            'hp_castle_start': castle.start_hp,
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


class Upgrade_army_bring_money(APIView):
    def post(self, request):
        person = Person.objects.get(tg_id=request.data['tg_id'])
        warrior = Army.objects.get(person=person, id_person=request.data['id_warrior'])
        if person.money >= warrior.statistics.price_bring_money:
            if warrior.id_person == 1:
                warrior.bring_money += 1
                person.money -= warrior.statistics.price_bring_money
                warrior.statistics.lvl_bring_money += 1
                warrior.statistics.price_bring_money += 50
                person.save()
                warrior.statistics.save()
                warrior.save()
            if warrior.id_person == 2:
                warrior.bring_money += 5
                person.money -= warrior.statistics.price_bring_money
                warrior.statistics.lvl_bring_money += 1
                warrior.statistics.price_bring_money += 100
                person.save()
                warrior.statistics.save()
                warrior.save()
            if warrior.id_person == 3:
                warrior.bring_money += 10
                person.money -= warrior.statistics.price_bring_money
                warrior.statistics.lvl_bring_money += 1
                warrior.statistics.price_bring_money += 150
                person.save()
                warrior.statistics.save()
                warrior.save()
            return Response({'money': person.money, 'lvl_bring_money': warrior.statistics.lvl_bring_money,
                             'price_bring_money': warrior.statistics.price_bring_money}, status=status.HTTP_200_OK)
        else:
            return Response({'Error': 'Недостаточно денег'}, status=status.HTTP_403_FORBIDDEN)


class Upgrade_army_speed(APIView):
    def post(self, request):
        person = Person.objects.get(tg_id=request.data['tg_id'])
        warrior = Army.objects.get(person=person, id_person=request.data['id_warrior'])
        if person.money >= warrior.statistics.price_speed:
            person.money -= warrior.statistics.price_speed
            warrior.speed -= 1
            warrior.statistics.price_speed += 100
            warrior.statistics.lvl_speed += 1
            person.save()
            warrior.statistics.save()
            warrior.save()
            return Response({'money': person.money, 'lvl_speed': warrior.statistics.lvl_speed,
                             'price_speed': warrior.statistics.price_speed}, status=status.HTTP_200_OK)
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
                'bring_money': i.bring_money,
                'lvl_speed': i.statistics.lvl_speed,
                'price_speed': i.statistics.price_speed,
                'lvl_bring_money': i.statistics.lvl_bring_money,
                'price_bring_money': i.statistics.price_bring_money,
                'image': request.build_absolute_uri(f'media/media/{i.image.name}').replace(
                    f'/takin_army/{person.tg_id}', '')
            }
            for i in person.army.all()
        ]
        return JsonResponse(army_list, safe=False)


class AddBonus(APIView):
    def post(self, request):
        referrer_id = request.data.get('referrer_id')
        new_user_id = request.data.get('new_user_id')
        new_user_name = request.data.get('new_user_name')

        if not referrer_id or not new_user_id:
            return Response({'status': 'error', 'message': 'Referrer ID and New User ID are required'},
                            status=status.HTTP_400_BAD_REQUEST)

        try:
            referrer = Person.objects.get(tg_id=referrer_id)
            new_person, created = Person.objects.get_or_create(tg_id=new_user_id, defaults={'name': new_user_name})
            Castle.objects.create(person=new_person)
            friendship1, created = FriendShip.objects.get_or_create(me=referrer)
            if not created:
                friendship1.friends.add(new_person)
            friendship2, created = FriendShip.objects.get_or_create(me=new_person)
            friendship2.friends.add(referrer)
            referrer.money += 1000000
            referrer.save()
            return Response({'status': 'success', 'message': f'Бонусы начислены пользователю {referrer_id}.'})
        except Person.DoesNotExist:
            return Response({'status': 'error', 'message': 'Referrer not found'}, status=status.HTTP_404_NOT_FOUND)


TOKEN = '7474449523:AAFLTVA2qqS15MaI_PBW7kX3gfoxoKJGKNQ'

# Initialize Bot instance with default bot properties which will be passed to all API calls
bot = Bot(token=TOKEN, default=DefaultBotProperties(parse_mode=ParseMode.HTML))


class GenerateRefLinkView(APIView):
    def get(self, request, tg_id: int):
        try:
            # Использование async_to_sync для вызова асинхронной функции
            link = async_to_sync(create_start_link)(bot, str(tg_id), encode=True)
        except Exception as e:
            logging.error(f"Error generating referral link: {e}")
            return Response({'error': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

        return Response({'ref_link': link}, status=status.HTTP_200_OK)

#
#
# class HandleStartView(APIView):
#     async def post(self, request):
#         args = request.data.get('args')
#         if not args:
#             return Response({'error': 'args are required'}, status=status.HTTP_400_BAD_REQUEST)
#
#         try:
#             referrer_id = decode_payload(args)
#             new_user_id = request.data.get('user_id')
#             if not new_user_id:
#                 return Response({'error': 'user_id is required'}, status=status.HTTP_400_BAD_REQUEST)
#
#             add_bonus(referrer_id)
#             add_friend(referrer_id, new_user_id)
#         except Exception as e:
#             logging.error(f"Error handling start: {e}")
#             return Response({'error': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
#
#         return Response({
#             'message': f'You have been referred by user ID {referrer_id}. They have been rewarded, and you have been added as a friend!'
#         }, status=status.HTTP_200_OK)
