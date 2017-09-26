import React from 'react';
import ClickableCard from '../clickable-card/clickable-card';
import { getTeamName } from '../../functions';
import './hand.css';

const Hand = ({ cards, playerTeam, gameOver, handleCardClick, handlePlayAgainClick, playerScore, cpuScore }) => {

	let winStatement = 'Tie Game';
	if (playerScore > cpuScore) {
		winStatement = 'You Win';
	}
	else if (cpuScore > playerScore) {
		winStatement = 'CPU Wins';
	}

	function onPlayAgainClick() {
		handlePlayAgainClick();
	}

	function renderPlayAgain() {
		return (
			<div className="hand-gameover">
				<div className="hand-gameover-score">
					<h5>{winStatement}</h5>
					<p>You: {playerScore}</p>
					<p>CPU: {cpuScore}</p>
				</div>
				<button className="hand-gameover-button" onClick={onPlayAgainClick}>Play Again</button>
			</div>
		);
	}

	const team = getTeamName(playerTeam);

	return (
		<div className="hand">
			{gameOver && renderPlayAgain()}
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
