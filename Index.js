const Discord = require('discord.js');
const client = new Discord.Client();
let token = "" //вставьте токен сюда.
client.on('ready', () => {
    console.log("Успешный запуск RichPresence, ожидание установки статуса...");
    client.user.setPresence({
      status: 'online', //статус вашего аккаунта (dnd, idle, invisible, online)
      game: {
        name: 'Cosmoteer', //название вашей игры
        state: 'В игре', //текст на 2 линии
        details: 'Играет за корабль Dest-fall', //текст на 1 линии
        application_id: '442351930929577995', //приложение в котором содержатся все ассесты
        spectateSecret: 'look', //секрет для наблюдения
assets: { 
          small_image: '465138149413224483', //id от маленько ассеста
          small_text: 'X-49.', //текст который будет виден при наведение на маленький ассест
          large_image: '465138072498208768', //id от большого ассеста
          large_text: 'Cosmoteer.' //текст который будет виден при наведение на большой ассест
        },
        timestamps: { //метки времени
          start: Date.now() // устанавливает дату запуска как метку для timestamp (тоесть время начнется с [прошло 00:00])
        }, // поменяйте на end и замените Date.now() если хотите произвольную дату, указывать нужно в unix => https://www.unixtimestamp.com/
        party: {
        id: 'ae488379-351d-4a4f-ad32-2b9b01c91657',
        size: [8,8]
        },
        secrets: { //это секреты для пати, вход и просмотр игры, однако я так и не смог их настроить...
        match: 'xyzzy', //матч
        join: 'join', //секрет входа
        spectate: 'look' // секрет наблюдения
        }
      }
    });
    console.log("Успех, статус установлен");
});
if(token) {
  client.login(token).catch(e=> console.log(e))
  } else {
  client.login(process.env.TOKEN)
  }
