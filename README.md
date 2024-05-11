# Magical Arena

## Run

To run the program, run `npm start`.  
To run unit tests, run `npm test`.  

## Modelling

2 classes have been designed.

`Player` class represents a player with health, strength and attack stats.  
A player can attack other players using the attack_player() method.  
A player can roll the dice by calling the roll() method. 

`Arena` class contains a group of players (an `array` of `Player` objects).  
An arena can "host" a match between 2 players in the player list by calling the fight() method, and passing the respective indices of the players.

A few validation functions are added so that the program does not enter an infinite loop. 

Dummy data has been added into `data.json` at the root of the project which can be parsed to create an `Array` of `Player` objects. 

For testing, functionality tests and negative tests are added, using the `assert` module.
