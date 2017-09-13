import React from 'react';
import Score from '../score/score';
import './banner.css';

const Banner = ({ round, score: { player, computer } }) => {

	return (
		<div className="banner">
			<div className="banner-round">
				Round {round}/7
			</div>
			<div className="banner-score">
				<Score name="You" score={player} />
				<Score name="Computer" score={computer} />
			</div>
		</div>
	);
};

export default Banner;
