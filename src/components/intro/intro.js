import React from 'react';
import './intro.css';
import arryn from '../../images/arryn.png';
import baratheon from '../../images/baratheon.png';
import lannister from '../../images/lannister.jpg';
import martell from '../../images/martell.jpg';
import stark from '../../images/stark.png';
import targaryen from '../../images/targaryen.png';
import tully from '../../images/tully.jpg';
import tyrell from '../../images/tyrell.jpg';

const Intro = ({ handleHouseClick }) => {

	function onHouseClick(id) {
		return function() {
			handleHouseClick(id);
		};
	}

	return (
		<div className="modal">
			<div className="modal-content">
				<h3 className="modal-content-title">Choose a House</h3>
				<div className="modal-content-teamchoice">
					<button
						className="modal-content-teamchoice-button"
						onClick={onHouseClick('7')}
					>
						<img className="modal-content-teamchoice-button-image" alt="arryn" src={arryn} />
						Arryn
					</button>
					<button
						className="modal-content-teamchoice-button"
						onClick={onHouseClick('17')}
					>
						<img className="modal-content-teamchoice-button-image" alt="baratheon" src={baratheon} />
						Baratheon
					</button>
					<button
						className="modal-content-teamchoice-button"
						onClick={onHouseClick('229')}
					>
						<img className="modal-content-teamchoice-button-image" alt="lannister" src={lannister} />
						Lannister
					</button>
					<button
						className="modal-content-teamchoice-button"
						onClick={onHouseClick('285')}
					>
						<img className="modal-content-teamchoice-button-image" alt="martell" src={martell} />
						Martell
					</button>
					<button
						className="modal-content-teamchoice-button"
						onClick={onHouseClick('362')}
					>
						<img className="modal-content-teamchoice-button-image" alt="stark" src={stark} />
						Stark
					</button>
					<button
						className="modal-content-teamchoice-button"
						onClick={onHouseClick('378')}
					>
						<img className="modal-content-teamchoice-button-image" alt="targaryen" src={targaryen} />
						Targaryen
					</button>
					<button
						className="modal-content-teamchoice-button"
						onClick={onHouseClick('395')}
					>
						<img className="modal-content-teamchoice-button-image" alt="tully" src={tully} />
						Tully
					</button>
					<button
						className="modal-content-teamchoice-button"
						onClick={onHouseClick('398')}
					>
						<img className="modal-content-teamchoice-button-image" alt="tyrell" src={tyrell} />
						Tyrell
					</button>
				</div>
			</div>
		</div>
	);
};

export default Intro;
