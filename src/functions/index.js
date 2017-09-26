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

export function getCharacter(char) {
	// if char is not the full address, but rather just the id
	if (char[0] !== 'h') {
		return xhr(`https://www.anapioficeandfire.com/api/characters/${char}`);
	}
	return xhr(char);
}

export function getHouse(id) {
	return xhr(`https://www.anapioficeandfire.com/api/houses/${id}`);
}

export function randomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function getTeamName(teamId) {
	if (teamId === '7') {
		return 'arryn';
	}
	if (teamId === '17') {
		return 'baratheon';
	}
	if (teamId === '229') {
		return 'lannister';
	}
	if (teamId === '285') {
		return 'martell';
	}
	if (teamId === '362') {
		return 'stark';
	}
	if (teamId === '378') {
		return 'targaryen';
	}
	if (teamId === '395') {
		return 'tully';
	}
	if (teamId === '398') {
		return 'tyrell';
	}
}
