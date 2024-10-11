from pickle import FALSE

from rest_framework.response import Response
from rest_framework.decorators import api_view
from drf_yasg import openapi
from mysite.urls import schema_view
from .docs import get_response_examples
from django.http import HttpRequest
from django.http.response import JsonResponse
from .models import ReferralSystem
from .services import *
from drf_yasg.utils import swagger_auto_schema
from main.serializers.body_serializer import *
from main.serializers.request_serializer import *

file_path = os.path.join(os.path.dirname(__file__), 'info_for_db.json')
with open(file_path, 'r') as file:
    data = json.load(file)


@swagger_auto_schema(
    methods=['GET'],
    query_serializer=MainPageBody,
    responses={
        '404': get_response_examples({'error': True, 'info': 'tg_id not received'}),
        '404 ': get_response_examples({'error': True, 'info': 'name not received'}),
        '200': get_response_examples(schema=PersSeralizer)
    },
    tags=['Основаня инфа']
)
@api_view(['GET'])
def main_info(request: HttpRequest, tg_id: int, name: str):
    if not tg_id:
        return JsonResponse({
            "error": True,
            "info": " 'tg_id' not received"},
            status=404
        )
    if not name:
        return JsonResponse({
            "error": True,
            "info": " 'name' not received"},
            status=404
        )

    try:
        person = Person.objects.get(tg_id=tg_id)

        Castle.objects.get(person=person)

    except Person.DoesNotExist:

        person = create_basic_data(tg_id=tg_id, name=name)

    serialized_data = PersSeralizer(person).data
    return Response(serialized_data, status=200)


@swagger_auto_schema(
    methods=['POST'],
    request_body=TapBody,
    responses={
        '404': get_response_examples({'error': True, 'info': " 'tg_id' not received"}),
        '404 ': get_response_examples({'error': True, 'info': " 'money' not received"}),
        '404  ': get_response_examples({'error': True, 'info': " 'energy' not received"}),
        '404   ': get_response_examples({'error': True, 'info': " 'hp' not received"}),
        '200': get_response_examples({'error': False, 'info': ' The operation was successful'}),
    },
    tags=['Принятия тапов на бэк']
)
@api_view(['POST'])
def tap_tap(request: HttpRequest):
    money = request.POST.get('money', '')
    if not money:
        return JsonResponse({
            "error": True,
            "info": " 'money' not received"},
            status=404
        )

    energy = request.POST.get('energy', '')
    if not energy:
        return JsonResponse({
            "error": True,
            "info": " 'energy' not received"},
            status=404
        )

    hp = request.POST.get('hp', '')
    if not hp:
        return JsonResponse({
            "error": True,
            "info": " 'hp' not received"},
            status=404
        )

    tg_id = request.POST.get('tg_id', '')
    if not tg_id:
        return JsonResponse({
            "error": True,
            "info": " 'tg_id' not received"},
            status=404
        )

    person = Person.objects.filter(tg_id=tg_id).first()
    if person is None:
        return JsonResponse({
            "error": True,
            "info": " 'person' not found"},
            status=404
        )

    castle = Castle.objects.filter(person=person).first()
    if castle is None:
        return JsonResponse({
            "error": True,
            "info": " 'castle' not found"},
            status=404
        )

    person.money += int(money)
    person.now_energy = int(energy)
    person.units_produced += int(energy)
    person.last_update_time_energy = timezone.now()
    castle.now_hp = int(hp)
    person.save(update_fields=['now_energy', 'money', 'last_update_time_energy'])
    castle.save()

    return JsonResponse({'error': False, 'info': ' The operation was successful'}, status=200)


@swagger_auto_schema(
    methods=['GET'],
    query_serializer=СountEnergyBody,
    responses={
        '404': get_response_examples({'error': True, 'info': " 'tg_id' not received"}),
        '200': get_response_examples({'error': False, 'info': ' The operation was successful'})
    },
    tags=['Подсчёт энергии']
)
@api_view(["GET"])
def count_energy(request: HttpRequest, tg_id: int):
    if not tg_id:
        return JsonResponse({
            "error": True,
            "info": " 'tg_id' not received"},
            status=404
        )

    service_count_energy(tg_id=tg_id)

    return JsonResponse({'error': False, 'info': ' The operation was successful'}, status=200)


@swagger_auto_schema(
    methods=['POST'],
    request_body=UpgradeWarriorBody,
    responses={
        '404': get_response_examples({'error': True, 'info': " 'tg_id' not received"}),
        '400': get_response_examples({'error': True, 'info': " Это максимальное улучшение"}),
        '408': get_response_examples({'error': True, 'info': " Следите за показателем денег"}),
        '408 ': get_response_examples({'error': True, 'info': " Это максимальное улучшение, эволюционируй воина"}),
        '200': get_response_examples(schema=MyArmySerializer),
    },
    tags=['Армия']
)
@api_view(['POST'])
def upgrade_army_damage(request: HttpRequest, data=data):
    tg_id = request.POST.get('tg_id', '')
    if not tg_id:
        return JsonResponse({
            "error": True,
            "info": " 'tg_id' not received"},
            status=404
        )

    person = Person.objects.filter(tg_id=tg_id).first()
    if person is None:
        return JsonResponse({
            "error": True,
            "info": " 'person' not found"},
            status=404
        )

    id_warrior = request.POST.get('id_warrior', '')
    if not id_warrior:
        return JsonResponse({
            "error": True,
            "info": " 'id_warrior' not received"},
            status=404
        )

    warrior = Army.objects.filter(person=person, id_warrior=id_warrior).first()
    if warrior is None:
        return JsonResponse({
            "error": True,
            "info": " 'warrior' not found"},
            status=404
        )

    if person.money >= warrior.price_damage and warrior.lvl_damage < warrior.max_lvl_upgrade:

        try:
            next_lvl_damage = data["Army"][f"{warrior.name}"]["damage"][f"{warrior.lvl_damage + 1}"]["lvl_damage"]
            next_damage = data["Army"][f"{warrior.name}"]["damage"][f"{warrior.lvl_damage + 1}"]["damage"]
            next_price_damage = data["Army"][f"{warrior.name}"]["damage"][f"{warrior.lvl_damage + 1}"][
                "price_damage"]

        except KeyError:

            return Response({'Error': 'Это максимальное улучшение'}, status=400)

        person.money -= warrior.price_damage
        person.upgrades_made += 1
        person.money_spent += warrior.price_damage
        warrior.lvl_damage = next_lvl_damage
        warrior.damage = next_damage
        warrior.price_damage = next_price_damage
        person.save()
        warrior.save()

        sorted_my_army = person.my_army.all().order_by('id_warrior')

        serialized_data = MyArmySerializer({
            'money': person.money,
            'my_army': sorted_my_army
        }).data

        return JsonResponse(serialized_data, status=200)

    else:

        if person.money < warrior.price_damage:
            return JsonResponse({
                'Error': 'Улучшения недоступны. Следите за показателем денег'},
                status=408)

        elif warrior.lvl_damage == warrior.max_lvl_upgrade:
            return JsonResponse({
                'Error': 'Улучшения недоступны. Следите за максимально допустимым уровнем улучшения'},
                status=408)


@swagger_auto_schema(
    methods=['POST'],
    request_body=UpgradeWarriorBody,
    responses={
        '404': get_response_examples({'error': True, 'info': " 'tg_id' not received"}),
        '400': get_response_examples({'error': True, 'info': " Это максимальное улучшение"}),
        '408': get_response_examples({'error': True, 'info': " Следите за показателем денег"}),
        '408 ': get_response_examples({'error': True, 'info': " Это максимальное улучшение, эволюционируй воина"}),
        '200': get_response_examples(schema=MyArmySerializer),
    },
    tags=['Армия']
)
@api_view(['POST'])
def upgrade_army_speed(request: HttpRequest):
    tg_id = request.POST.get('tg_id', '')
    if not tg_id:
        return JsonResponse({
            "error": True,
            "info": " 'tg_id' not received"},
            status=404
        )
    person = Person.objects.filter(tg_id=tg_id).first()
    if person is None:
        return JsonResponse({
            "error": True,
            "info": " 'person' not found"},
            status=404
        )

    id_warrior = request.POST.get('id_warrior', '')
    if not id_warrior:
        return JsonResponse({
            "error": True,
            "info": " 'id_warrior' not received"},
            status=404
        )

    warrior = Army.objects.filter(person=person, id_warrior=id_warrior).first()
    if warrior is None:
        return JsonResponse({
            "error": True,
            "info": " 'warrior' not found"},
            status=404
        )

    if person.money >= warrior.price_speed and warrior.lvl_speed < warrior.max_lvl_upgrade:

        try:
            next_lvl_speed = data["Army"][f"{warrior.name}"]["speed"][f"{warrior.lvl_speed + 1}"]["lvl_speed"]
            next_speed = data["Army"][f"{warrior.name}"]["speed"][f"{warrior.lvl_speed + 1}"]["speed"]
            next_price_speed = data["Army"][f"{warrior.name}"]["speed"][f"{warrior.lvl_speed + 1}"][
                "price_speed"]

        except KeyError:

            return Response({'Error': 'Это максимальное улучшение'}, status=400)

        person.money -= warrior.price_speed
        person.upgrades_made += 1
        person.money_spent += warrior.price_speed
        warrior.lvl_speed = next_lvl_speed
        warrior.speed = next_speed
        warrior.price_speed = next_price_speed
        person.save()
        warrior.save()

        sorted_my_army = person.my_army.all().order_by('id_warrior')

        serialized_data = MyArmySerializer({
            'money': person.money,
            'my_army': sorted_my_army
        }).data

        return JsonResponse(serialized_data, status=200)

    else:

        if person.money < warrior.price_speed:
            return JsonResponse({
                'Error': 'Улучшения недоступны. Следите за показателем денег'},
                status=408)

        elif warrior.lvl_speed == warrior.max_lvl_upgrade:
            return JsonResponse({
                'Error': 'Улучшения недоступны. Следите за максимально допустимым уровнем улучшения'},
                status=408)



@swagger_auto_schema(
    methods=['GET'],
    query_serializer=СountEnergyBody,
    responses={
        '404': get_response_examples({'error': True, 'info': " 'tg_id' not received"}),
        '200': get_response_examples(schema=MyArmySerializer),
    },
    tags=['Армия']
)
@api_view(['GET'])
def takin_army(request: HttpRequest, tg_id: int):
    if not tg_id:
        return JsonResponse({
            "error": True,
            "info": " 'tg_id' not received"},
            status=404
        )

    person = Person.objects.filter(tg_id=tg_id).first()

    if person is None:
        return JsonResponse({
            "error": True,
            "info": " 'person' not found"},
            status=404
        )

    sorted_my_army = person.my_army.all().order_by('id_warrior')

    serialized_data = MyArmySerializer({
        'money': person.money,
        'my_army': sorted_my_army
    }).data

    return JsonResponse(serialized_data, status=200)

@swagger_auto_schema(
    methods=['POST'],
    request_body=UpgradeWarriorBody,
    responses={
        '400': get_response_examples({'error': True, 'info': " Это максимальное улучшение"}),
        '401': get_response_examples({'error': True, 'info': " Недостаточно карт"}),
        '200': get_response_examples(schema=MyArmySerializer),
    },
    tags=['Армия']

)
@api_view(["POST"])
def evolve_cards(request:HttpRequest):
    tg_id = request.POST.get("tg_id","")
    if not tg_id:
        return JsonResponse({
            "error": True,
            "info": " 'tg_id' not received"},
            status=404
        )

    id_warrior = request.POST.get("id_warrior","")
    if not id_warrior:
        return JsonResponse({
            "error": True,
            "info": " 'id_warrior' not received"},
            status=404
        )

    person = Person.objects.filter(tg_id=tg_id).first()
    if person is None:
        return JsonResponse({
            "error": True,
            "info": " 'person' not found"},
            status=404
        )

    warrior = Army.objects.filter(id_warrior=id_warrior, person=person).first()
    if warrior is None:
        return JsonResponse({
            "error": True,
            "info": " 'warrior' not found"},
            status=404
        )

    if warrior.cards >= warrior.max_cards:

        try:
            next_evolve_lvl = data["Army"][f"{warrior.name}"]["card"][f"{warrior.evolve_lvl + 1}"]["evolve_lvl"]
            next_max_cards = data["Army"][f"{warrior.name}"]["card"][f"{warrior.evolve_lvl + 1}"]["cards"]
            next_max_lvl_upgrade = data["Army"][f"{warrior.name}"]["card"][f"{warrior.evolve_lvl + 1}"]["cards"]
            print(f"lvl:{next_evolve_lvl}, max_cards:{next_max_cards},lvl_upgrade{next_max_lvl_upgrade}")

        except KeyError:
            return Response({'Error': 'Это максимальное улучшение'}, status=400)

        person.upgrades_made += 1
        warrior.evolve_lvl = next_evolve_lvl
        warrior.cards -= warrior.max_cards
        warrior.max_cards = next_max_cards
        warrior.max_lvl_upgrade = next_max_lvl_upgrade
        warrior.can_evolve = False
        warrior.save()

        sorted_my_army = person.my_army.all().order_by('id_warrior')

        serialized_data = MyArmySerializer({
            'money': person.money,
            'my_army': sorted_my_army
        }).data

        return JsonResponse(serialized_data, status=200)

    else:
        return Response({'Error': 'Недостаточно карт'}, status=401)
#


@swagger_auto_schema(
    methods=['GET'],
    query_serializer=ReferralBody,
    responses={
        '422': get_response_examples({'error': True, 'info': " Нельзя добавить самого себя в друзья!"}),
        '411': get_response_examples({'error': True, 'info': " Данной игрок уже находится у вас в друзьях!"}),
        '200': get_response_examples({'error': False, 'info': " Перейдите во кладку друзья и заберите бонус"}),
    },
    tags=['Реферальная система']
)
@api_view(['GET'])
def complete_referral_system(request: HttpRequest, new_id: int, referral_id: int):
    if not new_id:
        return JsonResponse({
            "error": True,
            "info": " 'new_id' not received"},
            status=404
        )
    if not referral_id:
        return JsonResponse({
            "error": True,
            "info": " 'referral_id' not received"},
            status=404
        )

    if new_id == referral_id:
        return Response({"Error": "Нельзя добавить самого себя в друзья!"}, status=422)
    else:
        new_person = Person.objects.filter(tg_id=new_id).first()

        if new_person is None:
            return JsonResponse({
                "error": True,
                "info": " 'new_person' not found"},
                status=404
            )

        referral = Person.objects.filter(tg_id=referral_id).first()

        if referral is None:
            return JsonResponse({
                "error": True,
                "info": " 'referral' not found"},
                status=404
            )

        info1_exists = ReferralSystem.objects.filter(referral=referral, new_person=new_person).exists()
        info2_exists = ReferralSystem.objects.filter(referral=new_person, new_person=referral).exists()

        if info1_exists or info2_exists:
            return Response({"Error": "Данной игрок уже находится у вас в друзьях"},
                            status=411)
        else:
            ReferralSystem.objects.create(referral=referral, new_person=new_person)

            return Response({'success': 'Перейдите во кладку друзья и заберите бонус'}, status=200)


@swagger_auto_schema(
    methods=['POST'],
    request_body=TakingReferralBody,
    responses={
        '400': get_response_examples({'error': True, 'info': " Вы уже получали бонус"}),
        '200': get_response_examples({'error': False, 'info': " Вы получили бонус с в размере ..."}),
    },
    tags=['Реферальная система']
)
@api_view(['POST'])
def takin_referral_bonus(request: HttpRequest):
    tg_id = request.POST.get('tg_id', '')

    if not tg_id:
        return JsonResponse({
            "error": True,
            "info": " 'tg_id' not received"},
            status=404
        )
    referral_system_id = request.POST.get('referral_system_id', '')

    if not referral_system_id:
        return JsonResponse({
            "error": True,
            "info": " 'referral_system_id' not received"},
            status=404
        )

    person = Person.objects.filter(tg_id=tg_id).first()
    if person is None:
        return JsonResponse({
            "error": True,
            "info": " Person not found"},
            status=404
        )

    system = ReferralSystem.objects.filter(id=referral_system_id).first()
    if system is None:
        return JsonResponse({
            "error": True,
            "info": " System not found"},
            status=404
        )

    if system.referral == person and system.referral_bonus == True:
        person.money += data["BonusSystem"]["referral"]["ordinary"]["money"]
        bonus_warrior = Army.objects.filter(name="bonus", person=person).first()
        if bonus_warrior is None:
            return JsonResponse({
                "error": True,
                "info": " 'bonus_warrior' not found"},
                status=404
            )
        bonus_warrior.cards = data["BonusSystem"]["referral"]["ordinary"]["cards"]
        bonus_warrior.save()
        person.save()
        system.referral_bonus = False
        system.save()

        return Response({
            'Congratulations': f'Вы получили бонус с в размере {data["BonusSystem"]["referral"]["ordinary"]["money"]} монет '
                               f'и {data["BonusSystem"]["referral"]["ordinary"]["cards"]} бонусные карты за то что привели друга'},
            status=200)

    if system.new_person == person and system.new_person_bonus == True:
        person.money += data["BonusSystem"]["new_person"]["money"]
        person.save()
        system.new_person_bonus = False
        system.save()

        return Response(
            {
                'Congratulations': f'Вы получили бонус с в размере {data["BonusSystem"]["new_person"]["money"]} монет  '
                                   f'за то что присоединились к игре'}, status=200)
    else:
        return Response({'Error': "Вы уже получали бонус"}, status=400)

@swagger_auto_schema(
    methods=['GET'],
    query_serializer=СountEnergyBody,
    responses={
        200: openapi.Response(
            description="Успешный ответ",
            examples={
                'application/json': {
                    'friends': [
                        {
                            "name": "Friend 1",
                            "lvl": 10,
                            "person_id": 123,
                            "referral_system_id": 1,
                            "flag": True
                        }
                    ],
                    "Info_ordinary_bonus": {
                        "money": 500,
                        "cards": 10
                    },
                    "Info_prime_bonus": {
                        "money": 1000,
                        "cards": 20
                    },
                    "My_Bonus_Card": {
                        "name": "Bonus Card 1",
                        "now_cards": 50,
                        "max_cards": 100,
                        "evolve_lvl": 2,
                        "image_url": "https://example.com/image.png"
                    }
                }
            }
        )
    },
    tags=['Друзья']
)
@api_view(['GET'])
def all_friends(request:HttpRequest,tg_id: int):
    person = Person.objects.filter(tg_id=tg_id).first()
    if person is None:
        return JsonResponse({
            "error": True,
            "info": " 'person' not found"},
            status=404
        )
    _data = []
    _data=[
        *FriendsSerializer(ReferralSystem.objects.filter(referral=person),many=True).data,
        *FriendsReferralSerializer(ReferralSystem.objects.filter(new_person=person), many=True).data
    ]

    warrior = Army.objects.filter(name=data["Army"]["bonus"]["info"]["name"], person=person).first()
    if warrior is None:
        return JsonResponse({
            "error": True,
            "info": " 'warrior' not found"},
            status=404
        )

    return Response({
        'friends':_data,
        "Info_ordinary_bonus":
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
             'image_url': warrior.image_url, }
    })

@swagger_auto_schema(
    methods=["GET"],
    query_serializer=СountEnergyBody,
    responses={
        '404': get_response_examples({'error': True, 'info': " Error generating referral link"}),
        '201': get_response_examples({'error': False, 'ref_link': " https://Some_Url_Link.com"}),
    },
    tags=["Реферальная система"]
)
@api_view(["GET"])
def generate_ref_link_view(request:HttpRequest, tg_id: int):
    try:
        create_link = f"https://t.me/EggWars_bot?start=id_{tg_id}"
    except Exception as e:
        return Response({'error': 'Error generating referral link'}, status=404)

    return Response({'ref_link': create_link}, status=201)

#
# class Check_And_Give_Daly_Bonus(APIView):
#     """
#         Эндпоинт для проверки и выдачи ежедневного бонуса.
#
#         Принимает POST-запрос с идентификатором пользователя.
#
#         Необходимые переменные для корректной работы:
#         - `tg_id`: Уникальный идентификатор пользователя в Telegram.
#     """
#     def post(self, request):
#         person = get_object_or_404(Person, tg_id=request.data['tg_id'])
#         today = timezone.now().date()
#         if not person.daly_bonus.get_bonus:
#             prizes = data['Daly_Bonus'][f'{person.vist.week_streak}']
#             for key, item in prizes.items():
#                 if key == 'money':
#                     person.money += item
#                 elif key == 'crystal':
#                     person.crystal += item
#                 elif key == 'energy':
#                     person.now_energy += item
#             person.visit.date = today
#             person.visit.streak += 1
#             person.visit.week_streak += 1
#             person.visit.get_bonus = True
#             person.visit.save()
#             # Добавляем информацию о бонусах на каждый день
#             daily_bonuses = data['Daly_Bonus']
#             response_data = {
#                 'response': "Бонус успешно получен",
#                 'daily_bonuses': daily_bonuses
#             }
#             return Response(response_data, status=status.HTTP_200_OK)
#
#         else:
#             return Response({'response': "Вы уже получили бонус сегодня"}, status=status.HTTP_400_BAD_REQUEST)
#
#
# class Get_Bonus_per_Сommon_Enter(APIView):
#     """
#         Эндпоинт для получения бонуса за общее количество входов.
#
#         Принимает GET-запрос с идентификатором пользователя.
#
#         Необходимые переменные для корректной работы:
#         - `tg_id`: Уникальный идентификатор пользователя в Telegram.
#     """
#     def get(self, request):
#         person = get_object_or_404(Person, tg_id=request.data['tg_id'])
#         if person.visit.streak in person.visit.numbers_list:
#             prizes = data['Daly_Bonus'][f'{person.visit.streak}']
#             for key, item in prizes.items():
#                 if key == 'money':
#                     person.money += item
#                 elif key == 'crystal':
#                     person.crystal += item
#                 elif key == 'energy':
#                     person.now_energy += item
#             person.visit.numbers_list.remove(person.visit.streak)
#             person.visit.save()
#             # Добавляем информацию о бонусах
#             daily_bonuses = data['Daly_Bonus']
#             response_data = {
#                 'response': "Бонус успешно получен",
#                 'daily_bonuses': daily_bonuses
#             }
#             return Response(response_data, status=status.HTTP_200_OK)
#         else:
#             return Response({'error': 'Что то пошло не так'}, status=status.HTTP_400_BAD_REQUEST)
#
#
# class TaskPlayerDetailView(APIView):
#     """Информация о задачах и их статусе у игрока"""
#
#     def get(self, request, tg_id, dop_name=None):
#         """Получаем информацию о всех задачах или об одной"""
#         person = get_object_or_404(Person, tg_id=tg_id)
#         if dop_name:
#             tasks = PlayerTask.objects.filter(person=person, task__dop_name=dop_name)
#         else:
#             tasks = PlayerTask.objects.filter(person=person).order_by('completed', 'id')
#
#         # Проверяем, что tasks является queryset'ом
#         if not tasks.exists():
#             return Response({"detail": "Задачи не найдены"}, status=status.HTTP_404_NOT_FOUND)
#
#         serializer = PlayerTaskSerializer(tasks, many=True)
#         return Response(serializer.data, status=status.HTTP_200_OK)
#
#     def post(self, request, tg_id, dop_name):
#         """Проверяем прошло ли 30 минут что бы задача считалась выполненная"""
#         if tg_id and dop_name:
#             person = get_object_or_404(Person, tg_id=tg_id)
#             tasks = PlayerTask.objects.filter(person=person, task__dop_name=dop_name)
#             task = tasks.first()
#             serializer = PlayerTaskSerializer(task, data=request.data, partial=True)
#             if serializer.is_valid():
#                 serializer.save()
#                 task.check_completion()
#                 return Response(serializer.data, status=status.HTTP_200_OK)
#             return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
#         return Response({'error': 'tg_id и dop_name обязательные поля'}, status=status.HTTP_400_BAD_REQUEST)
#
#
# class StartTaskView(APIView):
#     """Запуск таймера задачи после перехода на ссылку"""
#     def post(self, request, tg_id, dop_name):
#         """Запуск таймера после перехода на ссылку"""
#         person = get_object_or_404(Person, tg_id=tg_id)
#         tasks = PlayerTask.objects.filter(person=person, task__dop_name=dop_name)
#         task = tasks.first()
#         if task.completed:
#             return Response({"error": "Задача уже завершена."}, status=status.HTTP_400_BAD_REQUEST)
#         serializer = PlayerTaskSerializer(task, data=request.data, partial=True)
#         if serializer.is_valid():
#             serializer.save()
#             task.start_task_player()  # Запуск таймера выполнения задачи
#             return Response(serializer.data, status=status.HTTP_200_OK)
#         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
#
