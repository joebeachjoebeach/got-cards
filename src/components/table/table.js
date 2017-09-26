import React from 'react';
import DisplayCard from '../display-card/display-card';
import { getTeamName } from '../../functions';
import './table.css';

const Table = ({ playerCard, cpuCard, playerTeam, cpuTeam }) => {

	const playerTeamName = getTeamName(playerTeam);
	const cpuTeamName = getTeamName(cpuTeam);

	function renderTable() {
		return (
			<div className="table-cards">
				<DisplayCard
					data={playerCard}
					team={playerTeamName}
					win={playerCard.books.length > cpuCard.books.length}
				/>
				<DisplayCard
					data={cpuCard}
					team={cpuTeamName}
					win={cpuCard.books.length > playerCard.books.length}
				/>
			</div>
		);
	}

	return (
		<div className="table">
			{playerCard && renderTable()}
		</div>
	);
	
};

export default Table;
