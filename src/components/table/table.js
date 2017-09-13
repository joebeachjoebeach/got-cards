import React from 'react';
import DisplayCard from '../display-card/display-card';
import './table.css';

const Table = ({ playerCard, computerCard, playerTeam }) => {

	const computerTeam = playerTeam === 'sw' ? 'got' : 'sw';

	function renderTable() {
		if (playerCard) {
			return (
				<div className="table">
					<DisplayCard
						data={playerCard}
						team={playerTeam}
					/>
					<DisplayCard
						data={computerCard}
						team={computerTeam}
					/>
				</div>
			);
		}
		return <div className="table" />;
	}

	return (
		<div className="table">
			{renderTable()}
		</div>
	);
	
};

export default Table;
