const Player = require("./components/player");
const fs = require("fs");

const welcomeMessage = () => {
	console.clear();
	console.log("Welcome to Magical Arena");
	console.log("------------------------");
}

const generatePlayerData = (path) => {
	const rawData = fs.readFileSync(path);
	const playerData = JSON.parse(rawData);

	let players = new Array();
	for (let i = 0; i < playerData.length; i++) {
		let player = new Player(
			playerData[i].health,
			playerData[i].strength,
			playerData[i].attack
		)
		players.push(player);
	}
	return players;
}

module.exports = {
	welcomeMessage,
	generatePlayerData
}