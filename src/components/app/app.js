import React from 'react';
import Intro from '../intro/intro';
import Header from '../header/header';
import Banner from '../banner/banner';
import Table from '../table/table';
import Hand from '../hand/hand';
import { randomInt, getHouse, getCharacter, mapCards } from '../../functions/';
import map from 'lodash/map';
import omit from 'lodash/omit';
import './app.css';

class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			playerTeam: '',
			playerCards: [],
			playerScore: 0,

			cpuTeam: '',
			cpuCards: [],
			cpuScore: 0
		};
	}

	handleChooseHouse(id) {
		// api ids for all the houses
		const houseIds = [ '7', '17', '229', '285', '362', '378', '395', '398' ];
		// get the sworn members of the house
		getHouse(id).then(({ swornMembers }) => {
			const characters = [];
			// get six random sworn members' urls
			for (let i = 0; i < 6; i++) {
				const randomIndex = randomInt(0, swornMembers.length - 1);
				characters.push(swornMembers[randomIndex]);
				swornMembers.splice(randomIndex, 1);
			}
			// get the sworn members from their urls
			characters.forEach(character => {
				getCharacter(character).then(({ name, aliases, books }) => {
					if (name === '') {
						name = aliases[0];
					}
					const card = { name, books };
					const updatedCards = this.state.playerCards.slice();
					updatedCards.push(card);
					this.setState({ playerCards: updatedCards, playerTeam: id });
				});
			});
		});

		// remove the chosen id
		houseIds.splice(houseIds.indexOf(id), 1);
		// get a random team from the remaining teams for the computer
		const randomIndex = randomInt(0, houseIds.length - 1);
		const cpuId = houseIds[randomIndex];

		// abstract the below code out to a separate function to be run
		// both for player and cpu
		getHouse(cpuId).then(({ swornMembers }) => {
			const characters = [];
			for (let j = 0; j < 6; j++) {
				const randomIndex = randomInt(0, swornMembers.length - 1);
				characters.push(swornMembers[randomIndex]);
				swornMembers.splice(randomIndex, 1);
			}
			// get the sworn members from their urls
			characters.forEach(character => {
				getCharacter(character).then(({ name, aliases, books }) => {
					if (name === '') {
						name = aliases[0];
					}
					const card = { name, books };
					const updatedCards = this.state.playerCards.slice();
					updatedCards.push(card);
					this.setState({ cpuCards: updatedCards, cpuTeam: cpuId });
				});
			});
		});

	}

	handleCardClick(id) {
		// get player's selected card
		const playerCard = this.state[this.state.team][id];
		const _playerTeamState = omit(this.state[this.state.team], [id]);

		// get random computer card
		const computerTeam = this.state.team === 'sw' ? 'got' : 'sw';
		const computerArray = map(this.state[computerTeam], mapCards);
		const randomIndex = randomInt(0, computerArray.length - 1);
		const computerCard = computerArray[randomIndex];
		const _computerTeamState = omit(this.state[computerTeam], [computerCard.key]);

		// calculate scoring
		let playerScore, computerScore;
		if (this.state.team === 'sw') {
			playerScore = Math.round((playerCard.films.length / 7) * 100);
			computerScore = (computerCard.books.length / 5) * 100;
		}
		else if (this.state.team === 'got') {
			playerScore = (playerCard.books.length / 5) * 100;
			computerScore = Math.round((computerCard.films.length / 7) * 100);
		}
		let { player, computer } = this.state.score;
		if (playerScore > computerScore) {
			player = player + 12;
		}
		else if (computerScore > playerScore) {
			computer = computer + 12;
		}

		// update state with new info
		this.setState({
			playerCard,
			computerCard,
			[this.state.team]: _playerTeamState,
			[computerTeam]: _computerTeamState,
			score: { player, computer }
		});
	}

	handlePlayAgainClick() {
		this.setState({
			sw: {},
			got: {},
			round: 0,
			team: null,
			playerCard: null,
			computerCard: null,
			score: {
				player: 0,
				computer: 0
			}
		});
	}

	render() {
		const { playerScore, cpuScore, playerTeam } = this.state;
		return (
			<div className="app">
				<Header />
				<Banner score={{ player: playerScore, cpu: cpuScore }} />
				{!playerTeam && <Intro handleChooseHouse={this.handleChooseHouse.bind(this)} />}
			</div>
		);
	}
}

export default App;
