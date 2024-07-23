from django.db import models


class Person(models.Model):
    lvl = models.IntegerField(default=1)
    money = models.IntegerField(default=0)
    start_energy = models.IntegerField(default=500)
    now_energy = models.IntegerField(default=500)
    name = models.CharField(max_length=100)
    tg_id = models.BigIntegerField(unique=True)
    army = models.ManyToManyField('Army', related_name='person', null=True, blank=True)

    def __str__(self):
        return f'Имя:{self.name}, id:{self.pk}, tg_id:{self.tg_id}'


class Castle(models.Model):
    person = models.OneToOneField(Person, related_name='castle', on_delete=models.CASCADE)
    lvl = models.IntegerField(default=1)
    start_hp = models.IntegerField(default=100000)
    now_hp = models.IntegerField(default=0)

    def __str__(self):
        return f'Игрок:{self.person.pk}, lvl:{self.lvl}, hp:{self.now_hp}'


class Picture(models.Model):
    name = models.CharField(max_length=40)
    image = models.ImageField(null=False, blank=False, upload_to='media')

    def __str__(self):
        return f'имя: {self.name}'


class Statistics_Army(models.Model):
    lvl_speed = models.IntegerField(default=1)
    price_speed = models.IntegerField(default=1)
    lvl_bring_money = models.IntegerField(default=1)
    price_bring_money = models.IntegerField(default=1)

    def __str__(self):
        return f'lvl_speed: {self.lvl_speed}, price_speed: {self.price_speed}; lvl_bring_money: {self.lvl_bring_money}, price_bring_money: {self.price_bring_money}'


class Army(models.Model):
    image = models.ForeignKey(Picture, on_delete=models.SET_NULL, related_name='army', null=True, blank=True)
    id_person = models.IntegerField(default=1)
    name = models.CharField(max_length=100)
    speed = models.IntegerField(default=15)
    bring_money = models.IntegerField(default=1)
    energy = models.IntegerField(default=1)
    statistics = models.OneToOneField(Statistics_Army, related_name='army', on_delete=models.CASCADE, null=True,
                                      blank=True)

    def __str__(self):
        return f'Имя:{self.name}, Скорость:{self.speed}, Денег приносит:{self.bring_money}'


class FriendShip(models.Model):
    me = models.OneToOneField(Person, on_delete=models.CASCADE, related_name='friendship_me')
    friends = models.ManyToManyField(Person, related_name='friends', null=True, blank=True)

    def __str__(self):
        friends = [i.name for i in self.friends.all()]
        return f'me : {self.me.name}____friends:{friends}'
