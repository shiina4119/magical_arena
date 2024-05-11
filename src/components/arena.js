class Arena {
	#players = [];

	constructor(players) {
		/* An Arena object contains a players[] array, consisting of Player objects
		   which is initialized in this constructor. */
		this.#players = players;
	}

	fight(i, j) {
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
