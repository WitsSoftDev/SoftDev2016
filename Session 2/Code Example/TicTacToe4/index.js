'use strict'

//application layer

/*Wits SoftDev 2016
Jason Chalom
TicTacToe example*/

//libraries
var fs = require("fs");
var readlineSync = require('readline-sync');

//import layers
var logicLayer = require('./logicLayer');
/*var dataLayer = require('./dataLayer');*/ //the application layer should npt be able to access this layer
var presentationLayer = require('./presentationLayer');

//main function for the code
//this makes the code look neater
function main(){
	//main executable code
	console.log("Welcome to TicTacToe!");

	var worldSize = 3;
	var world = logicLayer.startWorld(worldSize);
	console.log("\n==================");
	presentationLayer.printWorld(world, worldSize);

	var movesLeft = logicLayer.numberMovesLeft(world, worldSize);

	while(movesLeft > 0){
		//do rnd move
		world = logicLayer.rndMove(world, worldSize);
		//print world
		console.log("\n==================");
		presentationLayer.printWorld(world, worldSize);
		//ask for move
		world = presentationLayer.askMove(world, worldSize);
		//repeat till end - check who won

		movesLeft = logicLayer.numberMovesLeft(world, worldSize);
	}
}

//run main function
main();