import React from 'react';
import './intro.css';
import swImg from '../../images/sw-small.png';
import gotImg from '../../images/got-small.png';

const Intro = ({ chooseTeam }) => {

	function onGoTClick() {
		chooseTeam('got');
	}

	function onSWClick() {
		chooseTeam('sw');
	}

	return (
		<div className="modal">
			<div className="modal-content">
				<h3>Choose a team</h3>
				<div className="modal-content-teamchoice">
					<button
						className="modal-content-teamchoice-button"
						onClick={onGoTClick}
					>
						<img
							alt="Game of Thrones logo"
							src={gotImg}
						/>
					</button>
					<button
						className="modal-content-teamchoice-button"
						onClick={onSWClick}
					>
						<img
							alt="Star Wars logo"
							src={swImg}
						/>
					</button>
				</div>
			</div>
		</div>
	);
};

export default Intro;
