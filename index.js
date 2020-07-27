const TelegramBot = require('node-telegram-bot-api');
const token = require('./config.json').telegram;

const token = '1283043176:AAEiEMgF-B8hlpYcSiDqHIN6NIHSrjPHdYo';

const bot = new TelegramBot(token, { polling: true }); // deve ser mudado para Web Hook

bot.on('message', function (msg) {
    const chatId = msg.chat.id; // recebe a id do chat
    console.log(msg.text); // print mensaem no console
    bot.sendMessage(chatId, 'Obrigado por sua mensagem.');
});