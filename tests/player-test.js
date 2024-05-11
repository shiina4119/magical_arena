const assert = require("assert");
const Player = require("../src/components/player");

test("validateStats() for player with positive stats should return 1", () => {
	let player = new Player(100, 15, 20);
	assert.equal(player.validateStats(), 1);
});

test("validateStats() for player with negative stats should throw an error", () => {
	let player = new Player(-10, 15, 20);
	assert.throws(() => player.validateStats());
});

test("validateStats() for player with stats == 0 should throw an error", () => {
	let player = new Player(12, 0, 15);
	assert.throws(() => player.validateStats());
});

test("validateStats() for player with non-numeric stats should throw an error",
	() => {
		let player = new Player("e", 11, 13);
		assert.throws(() => player.validateStats());
	}
);
