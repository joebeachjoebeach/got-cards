import React from 'react';
import './score.css';

const Score = ({ name, score }) => {

	return (
		<div className="score">
			<div className="score-name">
				{name}:
			</div>
			<div className="score-score">
				{score}
			</div>
		</div>
	);
};

export default Score;
