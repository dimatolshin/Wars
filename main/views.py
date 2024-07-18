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


def encode_image_to_base64(image_field):
    return base64.b64encode(image_field.read()).decode('utf-8')


class MainPage(APIView):
    def post(self, request, *args, **kwargs):
        try:
            person = Person.objects.get(tg_id=self.request.data['tg_id'])
            castle = Castle.objects.get(person=person)
        except Person.DoesNotExist:
            person = Person.objects.create(tg_id=self.request.data['tg_id'], name=self.request.data['name'])
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
        person.money = int(money)
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
    def post(self, request, *args, **kwargs):
        try:
            person = Person.objects.get(tg_id=self.request.data['tg_id'])
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
                'image': request.build_absolute_uri(f'media/media/{i.image.name}').replace('/takin_army', '')
            }
            for i in person.army.all()
        ]
        return JsonResponse(army_list, safe=False)


