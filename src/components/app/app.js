import React from 'react';
import Intro from '../intro/intro';
import Header from '../header/header';
import Banner from '../banner/banner';
import Table from '../table/table';
import Hand from '../hand/hand';
import {
	randomInt,
	getStarWarsPerson,
	getGoTCharacter,
	tempData,
	mapCards 
} from '../../functions/';
import map from 'lodash/map';
import omit from 'lodash/omit';
import './app.css';

class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = { sw: {}, got: {}, round: 0, score: { player: 0, computer: 0 } };
	}

	dealStarWars() {
		const ids = [];
		while (ids.length < 6) {
			let id = randomInt(1, 88).toString();
			while (id === '17' || ids.includes(id)) {
				id = randomInt(1, 88);
			}
			ids.push(id);
		}
		
		ids.forEach(id => {
			getStarWarsPerson(id).then(data => {
				const _sw = Object.assign(this.state.sw);
				_sw[id] = data;
				this.setState({ sw: _sw });
			});
		});
	}

	dealGoT() {
		const invalidIds = ['1509', '1510', '1511'];
		const ids = [];
		while (ids.length < 6) {
			let id = randomInt(1, 2138).toString();
			while (ids.includes(id) || invalidIds.includes(id)) {
				id = randomInt(1, 2138);
			}
			ids.push(id);
		}

		ids.forEach(id => {
			getGoTCharacter(id).then(({ name, aliases, books }) => {
				if (name === '') {
					name = aliases[0];
				}
				// ignore the book 'The World of Ice and Fire'
				const badBook = 'https://www.anapioficeandfire.com/api/books/11';
				if (books.includes(badBook)) {
					books.splice(books.indexOf(badBook), 1);
				}
				const character = { name, books, id };
				const _got = Object.assign(this.state.got);
				_got[id] = character;
				this.setState({ got: _got });
			});
		});
	}

	chooseTeam(team) {
		this.setState({ team, round: 1 });
		this.dealStarWars();
		this.dealGoT();
		// const { sw, got } = tempData;
		// this.setState({ sw, got, round: 1 });
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

	handleNextRoundClick() {
		// const { sw, got } = tempData;
		this.setState({
			round: this.state.round + 1,
			playerCard: null,
			computerCard: null
		});
		this.dealStarWars();
		this.dealGoT();
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
		const { score, round, playerCard, computerCard, team } = this.state;
		const playerCards = this.state[this.state.team];
		const cards = map(playerCards, mapCards);
		return (
			<div className="app">
				<Header />
				<Banner score={score} round={round} />
				<Table
					playerCard={playerCard}
					computerCard={computerCard}
					playerTeam={team}
				/>
				<Hand
					cards={cards}
					team={team}
					round={round}
					handleCardClick={this.handleCardClick.bind(this)}
					handleNextRoundClick={this.handleNextRoundClick.bind(this)}
					handlePlayAgainClick={this.handlePlayAgainClick.bind(this)}
				/>
				{!team && <Intro chooseTeam={this.chooseTeam.bind(this)} />}
			</div>
		);
	}
}

export default App;
