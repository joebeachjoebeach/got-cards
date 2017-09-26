import React from 'react';
import Card from '../card/card';
import './display-card.css';

const DisplayCard = ({ data, team, win }) => {

	if (win) {
		return (
			<div className="display-card win">
				<Card data={data} team={team} />
			</div>
		);
	}

	return (
		<div className="display-card">
			<Card data={data} team={team} />
		</div>
	);
};

export default DisplayCard;
