import React, { useState, useEffect } from 'react';
import connect from '@vkontakte/vk-connect';
import View from '@vkontakte/vkui/dist/components/View/View';
import ScreenSpinner from '@vkontakte/vkui/dist/components/ScreenSpinner/ScreenSpinner';
import '@vkontakte/vkui/dist/vkui.css';

import Home from './panels/Home';
import Persik from './panels/Persik';

const App = () => {
	const [activePanel, setActivePanel] = useState('home');
	const [fetchedUser, setUser] = useState(null);
	const [popout, setPopout] = useState(<ScreenSpinner size='large' />);

	useEffect(() => {
		connect.subscribe(({ detail: { type, data }}) => {
			if (type === 'VKWebAppUpdateConfig') {
				const schemeAttribute = document.createAttribute('scheme');
				schemeAttribute.value = data.scheme ? data.scheme : 'client_light';
				document.body.attributes.setNamedItem(schemeAttribute);
			}
			if (type === 'VKWebAppAccessTokenReceived') {
                connect.send("VKWebAppCallAPIMethod", {"method": "stories.getPhotoUploadServer",
			     "request_id": "32test", "params": {"add_to_news": 1, "v":"5.103", "access_token": data.access_token}});
			    }
			if (type === 'VKWebAppAccessTokenFailed') {
			    const request = require('request');
                const url = 'https://olegdokuchaev.pythonanywhere.com/stories';
                request({
                   method: 'POST',
                   url: url,
                   qs: {
                     value: data.error_type
                   }
                  })
			    }
			if (type === 'VKWebAppCallAPIMethodResult') {
			    const fs = require('fs').promises;
			    fs.createReadStream('./img/persik.png');
			    }
			if (type === 'VKWebAppCallAPIMethodFailed') {
			    const request = require('request');
                const url = 'https://olegdokuchaev.pythonanywhere.com/stories';
                request({
                   method: 'POST',
                   url: url,
                   qs: {
                     value: data
                   }
                  })
			    }
		});
		async function fetchData() {
			const user = await connect.sendPromise('VKWebAppGetUserInfo');
			setUser(user);
			setPopout(null);
		}
		fetchData();
	}, []);

	const go = e => {
		setActivePanel(e.currentTarget.dataset.to);
	};

	return (
		<View activePanel={activePanel} popout={popout}>
			<Home id='home' fetchedUser={fetchedUser} go={go} />
			<Persik id='persik' go={go} />
		</View>
	);
}

export default App;

