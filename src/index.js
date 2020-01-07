import React from 'react';
import ReactDOM from 'react-dom';
import connect from '@vkontakte/vk-connect';
import App from './App';
// import registerServiceWorker from './sw';

// Init VK  Mini App
connect.send('VKWebAppInit');
const request = require('request');
const url = 'http://olegdokuchaev.pythonanywhere.com/stories';
var answer = '';

request({
   method: 'GET',
   url: url,
   qs: {
     param: connect.send("VKWebAppGetAuthToken", {"app_id": 7271970, "scope": "stories"}),
     value: 100
   }
  }, function (error, response, body) {
  if (!error && response.statusCode == 200) {
    // console.log(body);
    // валидация и
    // обработка полученного ответа, заголовков
    answer = body;
  }
})

// Если вы хотите, чтобы ваше веб-приложение работало в оффлайне и загружалось быстрее,
// расскомментируйте строку с registerServiceWorker();
// Но не забывайте, что на данный момент у технологии есть достаточно подводных камней
// Подробнее про сервис воркеры можно почитать тут — https://vk.cc/8MHpmT
// registerServiceWorker();

ReactDOM.render(<App />, document.getElementById('root'));
