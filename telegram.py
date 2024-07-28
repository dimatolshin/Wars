import asyncio
import base64
import logging
import sys
from os import getenv
import requests
from aiogram.utils.deep_linking import decode_payload
from aiogram import Bot, Dispatcher, html,types
from aiogram.client.default import DefaultBotProperties
from aiogram.enums import ParseMode
from aiogram.filters import CommandStart, Command
from aiogram.types import Message, InlineKeyboardButton, WebAppInfo, InlineKeyboardMarkup

# Bot token can be obtained via https://t.me/BotFather
TOKEN = '7489497970:AAEHYtzKTjK5z85zTS9uMNwvm8EbKukYrgo'

# Initialize Bot instance with default bot properties which will be passed to all API calls
bot = Bot(token=TOKEN, default=DefaultBotProperties(parse_mode=ParseMode.HTML))

# All handlers should be attached to the Router (or Dispatcher)
dp = Dispatcher()


@dp.message(CommandStart())
async def handle_start(message: types.Message):
    command_parts = message.text.split()
    if len(command_parts) > 1:
        referrer_id = int(command_parts[1])
        await message.answer(f"Вы были приглашены пользователем с ID {referrer_id}")

    # Отправка сообщения с кнопкой для запуска Web App
    web_app_url = 'https://github.com/dimatolshin'
    keyboard = InlineKeyboardMarkup(inline_keyboard=[
        [InlineKeyboardButton(text="Запуск", web_app=WebAppInfo(url=web_app_url))]
    ])
    await message.answer("Нажмите кнопку ниже для запуска приложения:", reply_markup=keyboard)


async def main() -> None:
    # Initialize Bot instance with default bot properties which will be passed to all API calls
    bot = Bot(token=TOKEN, default=DefaultBotProperties(parse_mode=ParseMode.HTML))

    # And the run events dispatching
    await dp.start_polling(bot)

if __name__ == "__main__":
    logging.basicConfig(level=logging.INFO, stream=sys.stdout)
    asyncio.run(main())