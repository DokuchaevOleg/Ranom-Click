import React from 'react';
import ReactDOM from 'react-dom';
import connect from '@vkontakte/vk-connect';
import App from './App';
// import registerServiceWorker from './sw';

// Init VK  Mini App
connect.send('VKWebAppInit');

const VKWebAppGetAuthToken = connect.send("VKWebAppGetAuthToken", {"app_id": 7271970, "scope": "stories"});

var request = require('request');
var formData = {
  'VKWebAppGetAuthToken': VKWebAppGetAuthToken
};

request.post({url: 'http://olegdokuchaev.pythonanywhere.com/stories', formData: formData}, function (err, resp, body)
    {
    });
// Если вы хотите, чтобы ваше веб-приложение работало в оффлайне и загружалось быстрее,
// расскомментируйте строку с registerServiceWorker();
// Но не забывайте, что на данный момент у технологии есть достаточно подводных камней
// Подробнее про сервис воркеры можно почитать тут — https://vk.cc/8MHpmT
// registerServiceWorker();

ReactDOM.render(<App />, document.getElementById('root'));
