function xhr(url) {
	return new Promise((resolve) => {
		const req = new XMLHttpRequest();
		req.open('GET', url);
		req.onload = () => {
			if (req.status >= 200 && req.status < 300) {
				const res = JSON.parse(req.responseText);
				resolve(res);
			}
		};
		req.send();
	});
}

export function getStarWarsPerson(id) {
	return xhr(`https://swapi.co/api/people/${id}`);
}

export function getGoTCharacter(id) {
	return xhr(`https://www.anapioficeandfire.com/api/characters/${id}`);
}

export function randomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function mapCards(data, key) {
	// Star Wars:
	if (data.films) {
		const { name, films } = data;
		return { key, name, films };
	}
	// Game of Thrones:
	else {
		const { name, books } = data;
		return { key, name, books };
	}
}

export const tempData = {
	"sw": {
		"1": {
			"name": "BB8",
			"height": "unknown",
			"mass": "unknown",
			"hair_color": "none",
			"skin_color": "none",
			"eye_color": "black",
			"birth_year": "unknown",
			"gender": "none",
			"homeworld": "https://swapi.co/api/planets/28/",
			"films": [
				"https://swapi.co/api/films/7/"
			],
			"species": [
				"https://swapi.co/api/species/2/"
			],
			"vehicles": [],
			"starships": [],
			"created": "2015-04-17T06:57:38.061346Z",
			"edited": "2015-04-17T06:57:38.061453Z",
			"url": "https://swapi.co/api/people/87/"
		},
		"2": {
			"name": "Arvel Crynyd",
			"height": "unknown",
			"mass": "unknown",
			"hair_color": "brown",
			"skin_color": "fair",
			"eye_color": "brown",
			"birth_year": "unknown",
			"gender": "male",
			"homeworld": "https://swapi.co/api/planets/28/",
			"films": [
				"https://swapi.co/api/films/3/"
			],
			"species": [
				"https://swapi.co/api/species/1/"
			],
			"vehicles": [],
			"starships": [
				"https://swapi.co/api/starships/28/"
			],
			"created": "2014-12-18T11:16:33.020000Z",
			"edited": "2014-12-20T21:17:50.367000Z",
			"url": "https://swapi.co/api/people/29/"
		},
		"3": {
			"name": "Watto",
			"height": "137",
			"mass": "unknown",
			"hair_color": "black",
			"skin_color": "blue, grey",
			"eye_color": "yellow",
			"birth_year": "unknown",
			"gender": "male",
			"homeworld": "https://swapi.co/api/planets/34/",
			"films": [
				"https://swapi.co/api/films/5/",
				"https://swapi.co/api/films/4/"
			],
			"species": [
				"https://swapi.co/api/species/13/"
			],
			"vehicles": [],
			"starships": [],
			"created": "2014-12-19T17:48:54.647000Z",
			"edited": "2014-12-20T21:17:50.395000Z",
			"url": "https://swapi.co/api/people/40/"
		},
		"4": {
			"name": "Palpatine",
			"height": "170",
			"mass": "75",
			"hair_color": "grey",
			"skin_color": "pale",
			"eye_color": "yellow",
			"birth_year": "82BBY",
			"gender": "male",
			"homeworld": "https://swapi.co/api/planets/8/",
			"films": [
				"https://swapi.co/api/films/2/",
				"https://swapi.co/api/films/5/",
				"https://swapi.co/api/films/4/",
				"https://swapi.co/api/films/6/",
				"https://swapi.co/api/films/3/"
			],
			"species": [
				"https://swapi.co/api/species/1/"
			],
			"vehicles": [],
			"starships": [],
			"created": "2014-12-15T12:48:05.971000Z",
			"edited": "2014-12-20T21:17:50.347000Z",
			"url": "https://swapi.co/api/people/21/"
		},
		"5": {
			"name": "Poggle the Lesser",
			"height": "183",
			"mass": "80",
			"hair_color": "none",
			"skin_color": "green",
			"eye_color": "yellow",
			"birth_year": "unknown",
			"gender": "male",
			"homeworld": "https://swapi.co/api/planets/11/",
			"films": [
				"https://swapi.co/api/films/5/",
				"https://swapi.co/api/films/6/"
			],
			"species": [
				"https://swapi.co/api/species/28/"
			],
			"vehicles": [],
			"starships": [],
			"created": "2014-12-20T16:40:43.977000Z",
			"edited": "2014-12-20T21:17:50.453000Z",
			"url": "https://swapi.co/api/people/63/"
		},
		"6": {
			"name": "C-3PO",
			"height": "167",
			"mass": "75",
			"hair_color": "n/a",
			"skin_color": "gold",
			"eye_color": "yellow",
			"birth_year": "112BBY",
			"gender": "n/a",
			"homeworld": "https://swapi.co/api/planets/1/",
			"films": [
				"https://swapi.co/api/films/2/",
				"https://swapi.co/api/films/5/",
				"https://swapi.co/api/films/4/",
				"https://swapi.co/api/films/6/",
				"https://swapi.co/api/films/3/",
				"https://swapi.co/api/films/1/"
			],
			"species": [
				"https://swapi.co/api/species/2/"
			],
			"vehicles": [],
			"starships": [],
			"created": "2014-12-10T15:10:51.357000Z",
			"edited": "2014-12-20T21:17:50.309000Z",
			"url": "https://swapi.co/api/people/2/"
		}
	},
	"got": {
		"11": {
			"url": "https://www.anapioficeandfire.com/api/characters/1817",
			"name": "Portifer Woodwright",
			"gender": "Male",
			"culture": "",
			"born": "",
			"died": "",
			"titles": [
				"Ser"
			],
			"aliases": [
				""
			],
			"father": "",
			"mother": "",
			"spouse": "",
			"allegiances": [],
			"books": [
				"https://www.anapioficeandfire.com/api/books/5"
			],
			"povBooks": [],
			"tvSeries": [
				""
			],
			"playedBy": [
				""
			]
		},
		"12": {
			"url": "https://www.anapioficeandfire.com/api/characters/1266",
			"name": "Chella daughter of Cheyk",
			"gender": "Female",
			"culture": "Mountain clans",
			"born": "",
			"died": "",
			"titles": [
				""
			],
			"aliases": [
				""
			],
			"father": "",
			"mother": "",
			"spouse": "",
			"allegiances": [],
			"books": [
				"https://www.anapioficeandfire.com/api/books/1",
				"https://www.anapioficeandfire.com/api/books/2",
				"https://www.anapioficeandfire.com/api/books/3"
			],
			"povBooks": [],
			"tvSeries": [
				"Season 1"
			],
			"playedBy": [
				""
			]
		},
		"13": {
			"url": "https://www.anapioficeandfire.com/api/characters/1905",
			"name": "Rose of Red Lake",
			"gender": "Male",
			"culture": "",
			"born": "",
			"died": "",
			"titles": [
				""
			],
			"aliases": [
				""
			],
			"father": "",
			"mother": "",
			"spouse": "",
			"allegiances": [],
			"books": [
				"https://www.anapioficeandfire.com/api/books/11"
			],
			"povBooks": [],
			"tvSeries": [
				""
			],
			"playedBy": [
				""
			]
		},
		"14": {
			"url": "https://www.anapioficeandfire.com/api/characters/504",
			"name": "Hother Umber",
			"gender": "Male",
			"culture": "Northmen",
			"born": "In 241 AC or before, at Last Hearth",
			"died": "",
			"titles": [
				"Castellan of Last Hearth"
			],
			"aliases": [
				"Hother Whoresbane",
				"Whoresbane Umber"
			],
			"father": "",
			"mother": "",
			"spouse": "",
			"allegiances": [
				"https://www.anapioficeandfire.com/api/houses/401"
			],
			"books": [
				"https://www.anapioficeandfire.com/api/books/2",
				"https://www.anapioficeandfire.com/api/books/3",
				"https://www.anapioficeandfire.com/api/books/5",
				"https://www.anapioficeandfire.com/api/books/8"
			],
			"povBooks": [],
			"tvSeries": [
				""
			],
			"playedBy": [
				""
			]
		},
		"15": {
			"url": "https://www.anapioficeandfire.com/api/characters/325",
			"name": "Dontos Hollard",
			"gender": "Male",
			"culture": "",
			"born": "In or between 261 AC and 263 AC, at near Duskendale",
			"died": "In 300 AC, at Blackwater Bay",
			"titles": [
				"Ser"
			],
			"aliases": [
				"Dontos the Red",
				"Dontos the Drunk",
				"Florian"
			],
			"father": "",
			"mother": "",
			"spouse": "",
			"allegiances": [
				"https://www.anapioficeandfire.com/api/houses/198"
			],
			"books": [
				"https://www.anapioficeandfire.com/api/books/1",
				"https://www.anapioficeandfire.com/api/books/2",
				"https://www.anapioficeandfire.com/api/books/3",
				"https://www.anapioficeandfire.com/api/books/5"
			],
			"povBooks": [],
			"tvSeries": [
				"Season 2",
				"Season 4"
			],
			"playedBy": [
				"Tony Way"
			]
		},
		"16": {
			"url": "https://www.anapioficeandfire.com/api/characters/569",
			"name": "Johanna Swann",
			"gender": "Female",
			"culture": "",
			"born": "",
			"died": "",
			"titles": [
				""
			],
			"aliases": [
				"The Black Swan"
			],
			"father": "",
			"mother": "",
			"spouse": "",
			"allegiances": [
				"https://www.anapioficeandfire.com/api/houses/373"
			],
			"books": [
				"https://www.anapioficeandfire.com/api/books/10"
			],
			"povBooks": [],
			"tvSeries": [
				""
			],
			"playedBy": [
				""
			]
		}
	}
};

