# KawakunChan

Telegram bot built with [xzcgram](https://www.npmjs.com/package/xzcgram).

## Install

```bash
git clone https://github.com/KawakunChan/KawakunChan.git
cd KawakunChan
npm install
```

## Setup

1. Get `API_ID` and `API_HASH` from [my.telegram.org](https://my.telegram.org).
2. Get `BOT_TOKEN` from [@BotFather](https://t.me/BotFather) (`/newbot`).
   - Leave `BOT_TOKEN` empty in `.env` to log in as a regular user account
     (phone number + code) instead of a bot.
3. Fill in `.env`:
```
API_ID=123456
API_HASH=your_api_hash
BOT_TOKEN=123456:your_bot_token
```

## Run

```bash
npm start
```