import React from 'react';
import Score from '../score/score';
import './banner.css';

const Banner = ({ score: { player, cpu } }) => {

	return (
		<div className="banner">
			<div className="banner-score">
				<Score name="You" score={player} />
				<Score name="CPU" score={cpu} />
			</div>
		</div>
	);
};

export default Banner;
