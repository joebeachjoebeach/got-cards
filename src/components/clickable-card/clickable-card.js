import React from 'react';
import SwCard from '../sw-card/sw-card';
import GotCard from '../got-card/got-card';
import './clickable-card.css';

const ClickableCard = ({ data, id, team, handleCardClick }) => {

	function onCardClick() {
		handleCardClick(id);
	}

	function renderCard() {
		if (team === 'got') {
			return (
				<GotCard
					data={data}
					key={data.key}
					id={data.key}
				/>
			);
		}
		else if (team === 'sw') {
			return (
				<SwCard
					data={data}
					key={data.key}
					id={data.key}
				/>
			);
		}
	}

	return (
		<button className="clickable-card" onClick={onCardClick}>
			{renderCard()}
		</button>
	);
};

export default ClickableCard;
