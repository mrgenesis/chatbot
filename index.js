const TelegramBot = require('node-telegram-bot-api');
const token = require('./config.json').telegram;
const dialogflow = require('./dialogflow');
const youtube = require('./youtube');

const bot = new TelegramBot(token.value, { polling: true }); // deve ser mudado para Web Hook

bot.on('message', async function (msg) {
    const chatId = msg.chat.id; // recebe a id do chat
    console.log(msg.text); // print mensaem no console

    const dfResponse = await dialogflow.sendMessage(chatId.toString(), msg.text);
    bot.sendMessage(chatId, dfResponse.text);
});