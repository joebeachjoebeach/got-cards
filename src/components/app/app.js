import React from 'react';
import Intro from '../intro/intro';
import Header from '../header/header';
import Banner from '../banner/banner';
import Table from '../table/table';
import Hand from '../hand/hand';
import { randomInt, getHouse, getCharacter } from '../../functions/';
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
			cpuScore: 0,
			gameOver: false
		};
	}

	dealCards(id, callback) {
		getHouse(id).then(({ swornMembers }) => {
			const characters = [];
			// get six random sworn members' urls
			for (let i = 0; i < 6; i++) {
				const randomIndex = randomInt(0, swornMembers.length - 1);
				characters.push(swornMembers[randomIndex]);
				swornMembers.splice(randomIndex, 1);
			}
			// make an array of promises for the character requests
			const promises = characters.map(character => getCharacter(character));
			// once all promises are resolved, process the data
			Promise.all(promises).then(data => {
				const cards = data.map(({ url, name, books, povBooks, aliases }) => {
					if (name === '') {
						name = aliases[0];
					}
					let id = url.match(/\d+$/);
					if (id) {
						id = id[0];
					}
					if (povBooks.length > 0) {
						povBooks.forEach(book => { books.push(book); });
					}
					return { id, name, books };
				});
				callback(cards);
			});
		});
	}

	handleHouseClick(id) {
		// api ids for all the houses
		const houseIds = [ '7', '17', '229', '285', '362', '378', '395', '398' ];
		// choose a house for the cpu
		houseIds.splice(houseIds.indexOf(id), 1);
		const randomIndex = randomInt(0, houseIds.length - 1);
		const cpuId = houseIds[randomIndex];

		this.setState({ playerTeam: id, cpuTeam: cpuId });

		// deal the player's cards
		this.dealCards(id, (cards) => {
			this.setState({ playerCards: cards });
		});
		// deal the cpu cards
		this.dealCards(cpuId, (cards) => {
			this.setState({ cpuCards: cards });
		});
	}

	handleCardClick(cardName) {
		// take the chosen card out of the player's hand
		const playerHand = this.state.playerCards.slice();
		const playerCard = playerHand.find(({ name }) => name === cardName);
		const newPlayerHand = playerHand.filter(({ name }) => name !== cardName);

		// get random computer card
		const cpuHand = this.state.cpuCards.slice();
		const randomIndex = randomInt(0, cpuHand.length - 1);
		const cpuCard = cpuHand[randomIndex];
		const newCpuHand = cpuHand.filter(({ name }) => name !== cpuCard.name);

		// scoring
		let { playerScore, cpuScore } = this.state;
		if (playerCard.books.length > cpuCard.books.length) {
			playerScore += 1;
		}
		else if (cpuCard.books.length > playerCard.books.length) {
			cpuScore += 1;
		}

		let gameOver = false;
		if (newPlayerHand.length < 1) {
			gameOver = true;
		}

		this.setState({
			playerCards: newPlayerHand,
			cpuCards: newCpuHand,
			playerCard,
			cpuCard,
			playerScore,
			cpuScore,
			gameOver
		});
	}

	handlePlayAgainClick() {
		this.setState({
			playerTeam: '',
			playerCards: [],
			playerScore: 0,
			cpuTeam: '',
			cpuCards: [],
			cpuScore: 0,
			gameOver: false,
			playerCard: null,
			cpuCard: null
		});
	}

	render() {
		const {
			playerScore,
			playerCards,
			playerTeam,
			playerCard,
			cpuScore,
			cpuCard,
			cpuTeam,
			gameOver
		} = this.state;
		return (
			<div className="app">
				<Header />
				<Banner score={{ player: playerScore, cpu: cpuScore }} />
				<Table
					playerCard={playerCard}
					cpuCard={cpuCard}
					playerTeam={playerTeam}
					cpuTeam={cpuTeam}
				/>
				<Hand 
					cards={playerCards}
					playerTeam={playerTeam}
					gameOver={gameOver}
					playerScore={playerScore}
					cpuScore={cpuScore}
					handleCardClick={this.handleCardClick.bind(this)}
					handlePlayAgainClick={this.handlePlayAgainClick.bind(this)}
				/>
				{!playerTeam && <Intro handleHouseClick={this.handleHouseClick.bind(this)} />}
			</div>
		);
	}
}

export default App;
