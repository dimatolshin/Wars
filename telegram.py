import asyncio
import base64
import logging
import sys
from os import getenv
import requests

from aiogram import Bot, Dispatcher, html
from aiogram.client.default import DefaultBotProperties
from aiogram.enums import ParseMode
from aiogram.filters import CommandStart, Command
from aiogram.types import Message, InlineKeyboardButton, WebAppInfo, InlineKeyboardMarkup

# Bot token can be obtained via https://t.me/BotFather
TOKEN = '7474449523:AAFLTVA2qqS15MaI_PBW7kX3gfoxoKJGKNQ'

# Initialize Bot instance with default bot properties which will be passed to all API calls
bot = Bot(token=TOKEN, default=DefaultBotProperties(parse_mode=ParseMode.HTML))

# All handlers should be attached to the Router (or Dispatcher)
dp = Dispatcher()

# @dp.message(CommandStart())
# async def command_start_handler(message: Message) -> None:
#     markup = InlineKeyboardMarkup(
#         inline_keyboard=[
#             [
#                 InlineKeyboardButton(
#                     text=f'Играть {message.from_user.id}',
#                     web_app=WebAppInfo(url=f'https://github.com/dimatolshin/Wars/blob/main/telegram.py'),
#                 )
#             ]
#         ]
#     )
#     await message.answer(f"Супер игра, попробуй свои силы!", reply_markup=markup)


@dp.message(Command(commands=['start']))
async def handle_start(message: Message):
    command_parts = message.text.split()
    if len(command_parts) > 1:
        encoded_referrer_id = command_parts[1]  # Второй элемент - это аргумент команды
        try:
            referrer_id_bytes = base64.urlsafe_b64decode(encoded_referrer_id + '==')
            referrer_id = referrer_id_bytes.decode('utf-8')
        except Exception as e:
            await message.answer("Ошибка при декодировании ID приглашения.")
            return

        new_user_id = message.from_user.id
        new_user_name = message.from_user.first_name
        await message.answer(f"Вы были приглашены пользователем с ID {referrer_id}")
    else:
        await message.answer("Добро пожаловать!")
    markup = InlineKeyboardMarkup(
        inline_keyboard=[
            [
                InlineKeyboardButton(
                    text=f'Играть {message.from_user.id}',
                    web_app=WebAppInfo(url=f'https://github.com/dimatolshin/Wars/blob/main/telegram.py'),
                )
            ]
        ]
    )
    await message.answer(f"Супер игра, попробуй свои силы!", reply_markup=markup)

async def main() -> None:
    # Initialize Bot instance with default bot properties which will be passed to all API calls
    bot = Bot(token=TOKEN, default=DefaultBotProperties(parse_mode=ParseMode.HTML))

    # And the run events dispatching
    await dp.start_polling(bot)

if __name__ == "__main__":
    logging.basicConfig(level=logging.INFO, stream=sys.stdout)
    asyncio.run(main())