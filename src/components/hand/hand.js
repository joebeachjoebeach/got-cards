import React from 'react';
import ClickableCard from '../clickable-card/clickable-card';
import { getTeamName } from '../../functions';
import './hand.css';

const Hand = ({ cards, playerTeam, gameOver, handleCardClick, handlePlayAgainClick }) => {

	function onPlayAgainClick() {
		handlePlayAgainClick();
	}

	const team = getTeamName(playerTeam);

	return (
		<div className="hand">
			{gameOver && <button className="hand-button" onClick={onPlayAgainClick}>Play Again</button>}
			{!gameOver && cards.length < 1 && playerTeam && <div>Loading...</div>}
			{cards.map(data => {
				return (
					<ClickableCard
						data={data}
						key={data.id}
						team={team}
						handleCardClick={handleCardClick}
					/>
				);
			})}
		</div>
	);
};

export default Hand;

// const houseIds = [ '7', '17', '229', '285', '362', '378', '395', '398' ];