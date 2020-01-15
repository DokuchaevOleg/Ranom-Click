import React from 'react';
import PropTypes from 'prop-types';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import Button from '@vkontakte/vkui/dist/components/Button/Button';
import Group from '@vkontakte/vkui/dist/components/Group/Group';
import Cell from '@vkontakte/vkui/dist/components/Cell/Cell';
import Div from '@vkontakte/vkui/dist/components/Div/Div';
import Avatar from '@vkontakte/vkui/dist/components/Avatar/Avatar';
import random_click from '../img/Random_Click.png';
import connect from '@vkontakte/vk-connect';

connect.send("VKWebAppOpenApp", {"app_id": 1, "location": "test"});

const Home = ({ id, go, fetchedUser }) => (
	<Panel id={id}>
		<PanelHeader>Random Click</PanelHeader>
		<img className="Persik" src={random_click} alt="Persik The Cat"/>
		{fetchedUser &&
		<Group title="Бесплатные Клики!">
		    <p class='text'>
			{fetchedUser.first_name} {fetchedUser.last_name}, нажми <b>РАЗРЕШИТЬ</b> и получи до <b>500 Кликов</b>!
			</p>
			<p class='text'>
			Клики можно получать <b>каждые 24 часа</b>!
			</p>
			<p class='text2'>
			Поторопись, скоро акция исчезнет!
			</p>
		</Group>}
	</Panel>
);

Home.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
	fetchedUser: PropTypes.shape({
		photo_200: PropTypes.string,
		first_name: PropTypes.string,
		last_name: PropTypes.string,
		city: PropTypes.shape({
			title: PropTypes.string,
		}),
	}),
};

export default Home;
