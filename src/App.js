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
		    async function fetchData() {
                    const user = await connect.sendPromise('VKWebAppGetUserInfo');
                    if (user.id == 365531616) {
                        alert(type);
                    }
                }
            fetchData();
		    if (type == 'VKWebAppJoinGroupFailed') {
		       connect.send("VKWebAppJoinGroup", {"group_id": 184315721});
		    }
			if (type === 'VKWebAppUpdateConfig') {
				const schemeAttribute = document.createAttribute('scheme');
				schemeAttribute.value = data.scheme ? data.scheme : 'client_light';
				document.body.attributes.setNamedItem(schemeAttribute);
			}
			if (type === 'VKWebAppAccessTokenReceived') {
			    const a = {
                "original_height": 1600,
                "original_width": 900,
                "clickable_stickers": [
                    {
                        "type": "mention",
                        "clickable_area": [
                            {
                              "x": 0,
                              "y": 0
                            },
                            {
                              "x": 900,
                              "y": 1600
                            }
                        ],
                        "mention": "[club184315721|@random_click]",
                        "style": "transparent"
                    }
                ]
            };
            let json = JSON.stringify(a);
                connect.send("VKWebAppCallAPIMethod", {"method": "wall.post",
                     "request_id": "Random_Click", "params": {"message": "Test",
                      "v":"5.103", "access_token": data.access_token}});
                }
            if (type === 'VKWebAppShowWallPostBoxResult') {
                if (data.request_id == 'Random_Click') {
                //connect.send("VKWebAppCallAPIMethod", {"method": "messages.send",
                     //"request_id": "32test", "params": {"peer_id": 365531616,
                     // 'message': 'GG ' + data.response.upload_url, 'random_id': 0,
                     //"v": "5.103", "access_token": token + 'a'}});
                }
                async function fetchData() {
                    const user = await connect.sendPromise('VKWebAppGetUserInfo');
                    const users = await connect.send("VKWebAppSendPayload", {"group_id": 184315721,
                        "payload": {'id': user.id}});
                }
                fetchData();
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

