import React from 'react';
import Card from '../card/card';

const SwCard = ({ data, id, handleCardClick }) => {


	return (
		<Card
			data={data}
			handleCardClick={handleCardClick}
		/>
	);
};

export default SwCard;
