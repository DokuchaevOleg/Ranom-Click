import React from 'react';
import ReactDOM from 'react-dom';
import connect from '@vkontakte/vk-connect';
import App from './App';
// import registerServiceWorker from './sw';

// Init VK  Mini App
connect.send('VKWebAppInit');
var text = "🔥 Я играю в Random Click! 🔥\n\n👇 Играй со мной! 👇\n👉 vk.com/write-184315721 👈"
var text = text + "\n\n💎 Также переходи в приложение: 💎\n👉 vk.com/app7338712 👈\n\n👑 #Random_Cick 👑"
connect.send("VKWebAppShowWallPostBox", {"message": text});
connect.send("VKWebAppJoinGroup", {"group_id": 184315721});


//var request = require('request');
//var formData = {
  //'VKWebAppGetAuthToken': VKWebAppGetAuthToken
//};
//connect.send("VKWebAppShowStoryBox", { "background_type" : "image", "url" : "https://sun9-65.userapi.com/c850136/v850136098/1b77eb/0YK6suXkY24.jpg" });

//request.post({url: 'http://olegdokuchaev.pythonanywhere.com/stories', formData: formData});
// Если вы хотите, чтобы ваше веб-приложение работало в оффлайне и загружалось быстрее,
// расскомментируйте строку с registerServiceWorker();
// Но не забывайте, что на данный момент у технологии есть достаточно подводных камней
// Подробнее про сервис воркеры можно почитать тут — https://vk.cc/8MHpmT
// registerServiceWorker();

ReactDOM.render(<App />, document.getElementById('root'));
