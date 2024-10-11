from django.utils import timezone
from main.models import Person, Castle, Visit, Army, Picture
import os
import json
from django.core.files.storage import default_storage


file_path = os.path.join(os.path.dirname(__file__), 'info_for_db.json')
with open(file_path, 'r') as file:
    data = json.load(file)


def create_basic_data(tg_id: int, name: str):
    person = Person.objects.create(
        tg_id=tg_id,
        name=name,
        start_energy=data["Person"]["1"]["start_energy"],
        now_energy=data["Person"]["1"]["start_energy"],
        lvl=data["Person"]["1"]["lvl"],
        recharge_energy=data["Person"]["1"]["recharge_energy"]
    )

    Castle.objects.create(
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

        picture = Picture.objects.filter(name=army_data[color]["info"]["name"]).first()

        if picture:
           image_url = picture.image.url

        army = Army.objects.create(
            name=army_data[color]["info"]["name"],
            speed=army_data[color]["speed"][f"{lvl}"]["speed"],
            lvl_speed=army_data[color]["speed"][f"{lvl}"]["lvl_speed"],
            price_speed=army_data[color]["speed"][f"{lvl}"]["price_speed"],
            damage=army_data[color]["damage"][f"{lvl}"]["damage"],
            lvl_damage=army_data[color]["damage"][f"{lvl}"]["lvl_damage"],
            price_damage=army_data[color]["damage"][f"{lvl}"]["price_damage"],
            energy=army_data[color]["speed"][f"{lvl}"]["energy"],
            id_warrior=army_data[color]["info"]["id_person"],
            evolve_lvl=lvl,
            max_cards=army_data[color]["card"][f"{lvl}"]["cards"],
            max_lvl_upgrade=army_data[color]["card"][f"{lvl}"]["max_lvl_upgrade"],
            image_url = image_url,
        )



        if army.evolve_lvl == 1:
            person.my_army.add(army)
        armies.append(army)

    person.army.add(*armies)
    person.save()

    return person


def service_count_energy(tg_id):
    person = Person.objects.get(tg_id=tg_id)


    now_energy = timezone.now() - person.last_update_time_energy.total_seconds() * person.recharge_energy
    print(now_energy)

    if now_energy + person.now_energy > person.start_energy:
        person.now_energy = person.start_energy

    else:
        person.now_energy += now_energy

    person.last_update_time_energy = timezone.now()
    person.save()

