'use strict'

/*Wits SoftDev 2016
Jason Chalom
TicTacToe example*/

//libraries
var fs = require("fs");
var readlineSync = require('readline-sync');

//import layers

function blankWorld(world, size){
	//This can be done above, the logic has been split to make it easier to understand
	for (var i = 0; i < size; i++){
		for (var j = 0; j < size; j++){
			world[i][j] = "."
		}
	}

	return world;
}

function initGameWorld(size){
	//make a 2D array for the game world
	//[row][col]
	var world = new Array(size);

	for (var i = 0; i < size; i++){
		world[i] = new Array(size);
	}

	//This will make a blank world
	world = blankWorld(world, size);

	return world;
}

module.exports = {
	blankWorld: blankWorld,
	initGameWorld: initGameWorld
}