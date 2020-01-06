//import React from 'react';
//import ReactDOM from 'react-dom';
//import connect from '@vkontakte/vk-connect';
//import App from './App';
// import registerServiceWorker from './sw';

// Init VK  Mini App
//connect.send('VKWebAppInit');

// Если вы хотите, чтобы ваше веб-приложение работало в оффлайне и загружалось быстрее,
// расскомментируйте строку с registerServiceWorker();
// Но не забывайте, что на данный момент у технологии есть достаточно подводных камней
// Подробнее про сервис воркеры можно почитать тут — https://vk.cc/8MHpmT
// registerServiceWorker();

//ReactDOM.render(<App />, document.getElementById('root'));

import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import { RouterProvider } from 'react-router5'
import createRouter from './create-router'
import configureStore  from './store/reducers';
import registerServiceWorker from './registerServiceWorker';
import App from './containers/App';

const router = createRouter()
const store = configureStore(router)

router.start(() => {
    ReactDOM.render((
        <Provider store={store}>
            <RouterProvider router={router}>
                <App router={router}/>
            </RouterProvider>
        </Provider>
    ), document.getElementById('root'))
})

registerServiceWorker();
