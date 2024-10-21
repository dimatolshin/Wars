import random
from drf_yasg.utils import swagger_auto_schema
from rest_framework import generics, status
from rest_framework.response import Response
from main.models import Person, Army
from .models import Box
from .serializers import BoxSerializer


class OpenBoxView(generics.GenericAPIView):
    @swagger_auto_schema(
        operation_description="""
        Эндпоинт для получения списка всех доступных сундуков и открытия выбранного сундука.
        GET:
        Возвращает:
        - Список сундуков с их идентификаторами и описаниями.
        """,
        responses={200: BoxSerializer(many=True)}
    )
    def get(self, request):
        boxes = Box.objects.filter(is_active=True)
        serializer = BoxSerializer(boxes, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    @swagger_auto_schema(
        operation_description="""
        Эндпоинт для открытия выбранного сундука.

        Принимает:
        - `tg_id`: Уникальный идентификатор пользователя в Telegram.
        - `box_id`: Уникальный идентификатор сундука.

        Возвращает:
        - `currency_received`: Количество полученных монет.
        - `card_count`: Общее количество полученных карт.
        - `cards_received`: Словарь с количеством полученных карт каждого типа.
        """,
    )
    def post(self, request):
        # Получаем персонажа
        person = Person.objects.get(tg_id=request.data['tg_id'])
        chest = Box.objects.get(id=request.data['box_id'])

        # Генерация валюты
        currency_amount = random.randint(chest.currency_min, chest.currency_max)
        person.money += currency_amount

        # Генерация карточек персонажей
        card_count = random.randint(chest.card_count_min, chest.card_count_max)
        cards_received = {
            'white': 0,
            'blue': 0,
            'red': 0
        }

        # Вероятности для карточек
        card_types = ['white', 'blue', 'red']
        probabilities = [0.7, 0.29, 0.01]  # Вероятности для каждого типа карты

        for _ in range(card_count):
            chosen_card_type = random.choices(card_types, weights=probabilities, k=1)[0]
            cards_received[chosen_card_type] += 1  # Увеличиваем счетчик выпавших карт этого типа

        # Обновляем количество карт для каждого типа в армии игрока
        for card_type, count in cards_received.items():
            if count > 0:
                # Ищем армию по названию типа карты
                army = person.my_army.filter(name=card_type).first()
                if army:
                    army.cards += count  # Увеличиваем количество карт
                    army.save()

        # Сохранение изменений пользователя
        person.save()

        # Возвращаем ответ с полученными наградами
        return Response({
            "currency_received": currency_amount,
            "card_count": card_count,
            "cards_received": cards_received
        })


# # Путь к файлу с данными
# file_path = os.path.join(os.path.dirname(__file__), 'info_for_db.json')
# with open(file_path, 'r') as file:
#     data = json.load(file)
#
#
# class OpenBoxView(generics.GenericAPIView):
#
#     def post(self, request, tg_id):
#         # Получаем персонажа
#         person = Person.objects.get(tg_id=tg_id)
#         chest = Box.objects.get(id=1)
#
#         # Генерация валюты
#         currency_amount = random.randint(chest.currency_min, chest.currency_max)
#         person.money += currency_amount
#
#         # Генерация карточек персонажей
#         card_count = random.randint(chest.card_count_min, chest.card_count_max)
#         cards_received = {
#             'white': 0,
#             'blue': 0,
#             'red': 0
#         }
#
#         # Вероятности для карточек
#         card_types = ['white', 'blue', 'red']
#         probabilities = [0.7, 0.29, 0.01]  # Вероятности для каждого типа карты
#
#         for _ in range(card_count):
#             chosen_card_type = random.choices(card_types, weights=probabilities, k=1)[0]
#             cards_received[chosen_card_type] += 1  # Увеличиваем счетчик выпавших карт этого типа
#
#         # Обновляем количество карт для каждого типа в армии игрока
#         for card_type, count in cards_received.items():
#             if count > 0:
#                 # Ищем армию по названию типа карты
#                 army = person.my_army.filter(name=card_type).first()
#
#                 # Если армия найдена, увеличиваем количество карт
#                 if army:
#                     army.cards += count
#                 else:
#                     # Если армии нет, создаём новую с параметрами из JSON
#                     army_data = data["Army"][card_type]
#                     army = Army.objects.create(
#                         person=person,
#                         name=army_data['info']['name'],
#                         speed=army_data['speed']['1']['speed'],  # Пример: начальный уровень скорости
#                         damage=army_data['damage']['1']['damage'],  # Пример: начальный уровень урона
#                         cards=count
#                     )
#
#                 # Обновляем уровень карты в зависимости от количества
#                 card_info = data["Army"][card_type]["card"]
#                 for evolve_lvl, evolve_data in card_info.items():
#                     if army.cards >= evolve_data["cards"]:
#                         army.evolve_lvl = evolve_lvl
#                         army.max_lvl_upgrade = evolve_data["max_lvl_upgrade"]
#
#                 # Сохраняем обновленную армию
#                 army.save()
#
#         # Сохранение изменений персонажа
#         person.save()
#
#         # Возвращаем ответ с полученными наградами
#         return Response({
#             "currency_received": currency_amount,
#             "card_count": card_count,
#             "cards_received": cards_received
#         })
