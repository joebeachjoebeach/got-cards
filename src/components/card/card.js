import React from 'react';
import './card.css';

const Card = ({ data }) => {

	let name, films, score, info, books;

	// Star Wars
	if (data.films) {
		({ name, films } = data);
		score = Math.round((films.length / 7) * 100);
		info = `Appears in ${films.length.toString()}/7 films.`;
	}
	else {
		let aliases;
		({ name, books } = data);
		score = (books.length / 5) * 100;
		info = `Appears in ${books.length.toString()}/5 books.`;
	}

	return (
		<div className="card">
			<div className="card-title">{name}</div>
			<div className="card-data">
				<div className="card-data-score">
					{score}
				</div>
				<div className="card-data-info">
					{info}
				</div>
			</div>
		</div>
	);
};

export default Card;
