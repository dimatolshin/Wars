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


def encode_image_to_base64(image_field):
    return base64.b64encode(image_field.read()).decode('utf-8')


class MainPage(APIView):
    def post(self, request, *args, **kwargs):
        response_data = []
        try:
            person = Person.objects.get(tg_id=self.request.data['tg_id'])
        except Person.DoesNotExist:
            person = Person.objects.create(tg_id=self.request.data['tg_id'], name=self.request.data['name'])
            castle = Castle.objects.create(person=person)
            army1 = Army.objects.create(name='Красный', speed=100, image=Picture.objects.get(name='красный'),
                                        id_person=1)
            army2 = Army.objects.create(name='Синий', bring_money=5, speed=100, image=Picture.objects.get(name='синий'),
                                        id_person=2)
            army3 = Army.objects.create(name='Белый', bring_money=10, speed=100,
                                        image=Picture.objects.get(name='белый'), id_person=3)
            person.army.add(army1, army2, army3)
            person.save()
        castle = Castle.objects.get(person=person)
        castle_data = {'lvl': castle.lvl, 'hp': castle.now_hp}
        army_list = [
            {'id_person': i.id_person, 'name': i.name, 'speed': i.speed, 'bring_money': i.bring_money,
             'image': (i.image.image.url)} for i in person.army.all()]
        person_data = {'tg_id': person.tg_id, 'name': person.name, 'lvl': person.lvl, 'money': person.money,
                       'energy': person.now_energy,
                       'army': army_list}
        response_data.append({
            'person': person_data,
            'castle': castle_data,
        })

        return Response(response_data)


class Tap(APIView):
    def post(self, request, *args, **kwargs):
        data = []
        money = self.request.data['money']
        energy = self.request.data['energy']
        hp = self.request.data['hp']
        person_id = self.request.data['tg_id']
        person = Person.objects.get(tg_id=person_id)
        castle = Castle.objects.get(person=person)
        person.money += int(money)
        person.now_energy -= int(energy)
        castle.now_hp -= int(hp)
        person.save()
        castle.save()
        person_list = {'tg_id': person.tg_id, 'money': person.money, 'energy': person.now_energy}
        castle_list = {'hp': castle.now_hp, 'lvl': castle.lvl}
        data.append({'person': person_list,
                     'castle': castle_list})
        return Response(data)
