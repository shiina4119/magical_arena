class Arena {
	#players = [];

	constructor(players) {
		/* An Arena object contains a players[] array, consisting of Player objects
		   which is initialized in this constructor. */
		this.#players = players;
        if (this.#players.length < 2) {
			throw new Error("Not enough players.");
		}
	}

    validateFight(i, j) {
		if (i === j) {
			throw new Error("Both players are same.");
		}

		this.#players[i].validateStats();
		this.#players[j].validateStats();

		return -1
	}


	fight(i, j) {
        /* returns the index of the winning player.
		   -1 if validateFight() fails. */
        try {
			this.validateFight(i, j);
			console.log("Valid match!");
		} catch (e) {
			console.error(e.message);
			return -1;
		}

		/* player with less health attacks first. */
		let chance = this.#players[i].getHealth() < this.#players[j].getHealth();
		while (this.#players[i].getHealth() > 0 && this.#players[j].getHealth() > 0) {
			this.#players[i].roll();
			this.#players[j].roll();
			if (chance) {
				this.#players[i].attack_player(this.#players[j]);
			}
			else {
				this.#players[j].attack_player(this.#players[i]);
			}
			chance = !chance;
		}

		if (this.#players[i].getHealth() == 0) {
			return j;
		}
		if (this.#players[j].getHealth() == 0) {
			return i;
		}
	}
}

module.exports = Arena;
