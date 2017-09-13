import React from 'react';
import SwCard from '../sw-card/sw-card';
import GotCard from '../got-card/got-card';
import './display-card.css';

const DisplayCard = ({ data, team }) => {

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
		<div className="display-card">
			{renderCard()}
		</div>
	);
};

export default DisplayCard;
