import React from 'react';
import ClickableCard from '../clickable-card/clickable-card';
import './hand.css';

const Hand = ({ cards, team, handleCardClick }) => {

	if (cards.length < 1) {
		return <div className="hand">Loading...</div>;
	}

	return (
		<div className="hand">
			{cards.map(data => {
				return (
					<ClickableCard
						data={data}
						key={data.key}
						id={data.key}
						handleCardClick={handleCardClick}
						team={team}
					/>
				);
			})}
		</div>
	);
};

export default Hand;
