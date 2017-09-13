import React from 'react';
import Card from '../card/card';

const GotCard = ({ data, id, handleCardClick }) => {

	function onCardClick() {
		handleCardClick(id);
	}

	return (
		<Card
			data={data}
			onClick={onCardClick}
		/>
	);
};

export default GotCard;
