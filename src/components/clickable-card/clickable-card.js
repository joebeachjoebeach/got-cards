import React from 'react';
import Card from '../card/card';
import './clickable-card.css';

const ClickableCard = ({ data, team, handleCardClick }) => {

	function onCardClick() {
		handleCardClick(data.name);
	}

	return (
		<button className="clickable-card" onClick={onCardClick}>
			<Card data={data} team={team} />
		</button>
	);
};

export default ClickableCard;
