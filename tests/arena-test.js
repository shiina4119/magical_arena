const assert = require("assert");
const Arena = require("../src/components/arena");
const { generatePlayerData } = require("../src/utils");

let players = generatePlayerData("data.json");

test("constructor for Arena should throw error when there are less than 2 players",
	() => {
		assert.throws(() => {
			let _ = new Arena([]);
		});
	}
);

test("validateFight() should return -1 for valid players", () => {
	let arena = new Arena(players);
	assert.equal(arena.validateFight(0, 1), -1);
});


test("validateFight() should throw an error when both players are same", () => {
	let arena = new Arena(players);
	assert.throws(() => {
		arena.validateFight(3, 3);
	});
});

test("validateFight() should throw an error when a player does not have valid\
 stats", () => {
	let arena = new Arena(players);
	assert.throws(() => {
		arena.validateFight(1, 2);
	});
});

test("fight() should not return -1 in a valid match",
	() => {
		let arena = new Arena(players);
		assert.notEqual(arena.fight(0, 1), -1);
	}
);

test("fight() should return -1 when validateFight() throws error", () => {
	let arena = new Arena(players);
	assert.equal(arena.fight(1, 2), -1);
});
