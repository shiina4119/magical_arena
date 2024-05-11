class Player {
	#health = null;
	#strength = null;
	#attack = null;
	#roll = null;

	constructor(health, strength, attack) {
		this.#health = health;
		this.#strength = strength;
		this.#attack = attack;
	}

    validateStats() {
		/* Player cannot take part in a match if stats are invalid. */
		if (isNaN(this.#health) || isNaN(this.#strength) || isNaN(this.#attack)) {
			throw new TypeError("Player stats are not numeric!");
		}
		if (this.#health <= 0 || this.#strength <= 0 || this.#attack <= 0) {
			throw new Error("Player stats should be positive.");
		}
		return 1;
	}

	getHealth() {
		return this.#health;
	}

	getStrength() {
		return this.#strength;
	}

	getAttack() {
		return this.#attack;
	}

	roll() {
		this.#roll = Math.floor(Math.random() * 6) + 1;
	}
	getRoll() {
		return this.#roll;
	}

	// printStats() {
	// 	console.log(`Health: ${this.#health}`);
	// 	console.log(`Strength: ${this.#strength}`);
	// 	console.log(`Attack: ${this.#attack}`);
	// 	console.log(`Roll: ${this.getRoll()}`);
	// 	console.log();
	// }

	attack_player(player) {
		let defensiveStrength = player.getStrength() * player.getRoll();
		let attackingStrength = this.getAttack() * this.getRoll();
		if (attackingStrength > defensiveStrength) {
			player.#health -= (attackingStrength - defensiveStrength);
			if (player.#health < 0) {
				player.#health = 0;
			}
		}
	}
};

module.exports = Player;
