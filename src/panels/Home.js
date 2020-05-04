import React from 'react';
import PropTypes from 'prop-types';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import Button from '@vkontakte/vkui/dist/components/Button/Button';
import Group from '@vkontakte/vkui/dist/components/Group/Group';
import Cell from '@vkontakte/vkui/dist/components/Cell/Cell';
import Div from '@vkontakte/vkui/dist/components/Div/Div';
import Avatar from '@vkontakte/vkui/dist/components/Avatar/Avatar';
import random_click from '../img/Random_Click-3.png';

const Home = ({ id, go, fetchedUser }) => (
	<Panel id={id}>
		<PanelHeader>Акция Random Click!</PanelHeader>
		<img className="Persik" src={random_click} alt="Persik The Cat"/>
		{fetchedUser &&
		<Group >
		    <p className='text3'><b><font color="#5b81b4">Бесплатные Клики!</font></b></p>
		    <p className='text'>
			<b><font color="#5b81b4">{fetchedUser.first_name}</font></b>, нажми <font color="#5b81b4"><b>ОПУБЛИКОВАТЬ</b></font> и получи до <font color="#5b81b4"><b>555 Кликов</b>!</font>
			</p>
			<p className='text'>
			Клики можно получать <font color="#5b81b4"><b>каждые 24 часа</b>!</font>
			</p>
			<p className='text2'>
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
