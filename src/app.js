const Arena = require("./components/arena");
const { generatePlayerData, welcomeMessage } = require("./utils");

welcomeMessage();

let players = null;
let arena = null;

players = generatePlayerData("data.json");

try {
	/* check whether players[] have enough number of players. */
	arena = new Arena(players);
} catch (e) {
	console.error(e.message);
	process.exit(1);
}

let winner = -1;

/* can simulate any fight here.
   open data.json to view the data of all players. */
winner = arena.fight(0, 1);

if (winner != -1) {
	console.log(`Player ${winner + 1} has won!`);
}
