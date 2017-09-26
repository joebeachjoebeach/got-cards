import React from 'react';
import './card.css';
import arryn from '../../images/arryn.png';
import baratheon from '../../images/baratheon.png';
import lannister from '../../images/lannister.jpg';
import martell from '../../images/martell.jpg';
import stark from '../../images/stark.png';
import targaryen from '../../images/targaryen.png';
import tully from '../../images/tully.jpg';
import tyrell from '../../images/tyrell.jpg';

const Card = ({ data: { name, books }, team }) => {

	const score = Number(books.length) * 12;
	const book = books.length === 1 ? 'book' : 'books';

	const teams = { arryn, baratheon, lannister, martell, stark, targaryen, tully, tyrell };
	const teamImg = teams[team];

	return (
		<div className={`card ${team}`}>
			<div className="card-title">{name}</div>
			<img className="card-image" alt="house" src={teamImg} />
			<div className="card-data">
				<div className="card-data-score">
					{score.toString()}
				</div>
				<div className="card-data-info">
					In {books.length} {book}.
				</div>
			</div>
		</div>
	);
};

export default Card;
