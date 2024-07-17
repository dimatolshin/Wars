import asyncio
import logging
import sys
from os import getenv

from aiogram import Bot, Dispatcher, html
from aiogram.client.default import DefaultBotProperties
from aiogram.enums import ParseMode
from aiogram.filters import CommandStart, Command
from aiogram.types import Message, InlineKeyboardButton, WebAppInfo, InlineKeyboardMarkup

# Bot token can be obtained via https://t.me/BotFather
TOKEN = '7474449523:AAFLTVA2qqS15MaI_PBW7kX3gfoxoKJGKNQ'

# All handlers should be attached to the Router (or Dispatcher)

dp = Dispatcher()


@dp.message(CommandStart())
async def command_start_handler(message: Message) -> None:
    markup = InlineKeyboardMarkup(
        inline_keyboard=[
            [
                InlineKeyboardButton(
                    text='Играть',
                    web_app=WebAppInfo(url=f'http://5.101.50.99/'),
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
