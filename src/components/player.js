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
