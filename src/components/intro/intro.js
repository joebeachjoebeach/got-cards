import React from 'react';
import './intro.css';

const Intro = ({ handleChooseHouse }) => {

	function onHouseClick(id) {
		return function() {
			handleChooseHouse(id);
		};
	}
	

	return (
		<div className="modal">
			<div className="modal-content">
				<h3>Choose a House</h3>
				<div className="modal-content-teamchoice">
					<button
						className="modal-content-teamchoice-button"
						onClick={onHouseClick('7')}
					>
						Arryn
					</button>
					<button
						className="modal-content-teamchoice-button"
						onClick={onHouseClick('17')}
					>
						Baratheon
					</button>
					<button
						className="modal-content-teamchoice-button"
						onClick={onHouseClick('229')}
					>
						Lannister
					</button>
					<button
						className="modal-content-teamchoice-button"
						onClick={onHouseClick('285')}
					>
						Martell
					</button>
					<button
						className="modal-content-teamchoice-button"
						onClick={onHouseClick('362')}
					>
						Stark
					</button>
					<button
						className="modal-content-teamchoice-button"
						onClick={onHouseClick('378')}
					>
						Targaryen
					</button>
					<button
						className="modal-content-teamchoice-button"
						onClick={onHouseClick('395')}
					>
						Tully
					</button>
					<button
						className="modal-content-teamchoice-button"
						onClick={onHouseClick('398')}
					>
						Tyrell
					</button>
				</div>
			</div>
		</div>
	);
};

export default Intro;
