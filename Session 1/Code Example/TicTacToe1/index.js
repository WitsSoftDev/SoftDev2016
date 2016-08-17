'use strict'

/*Wits SoftDev 2016
Jason Chalom
TicTacToe example*/

var fs = require("fs");

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

function blankWorld(world, size){
	//This can be done above, the logic has been split to make it easier to understand
	for (var i = 0; i < size; i++){
		for (var j = 0; j < size; j++){
			world[i][j] = "."
		}
	}

	return world;
}

function printWorld(world, size){
	var longString = "";
	for (var i = 0; i < size; i++){
		longString += "|"; // the walls of the game
		for (var j = 0; j < size; j++){
			longString += world[i][j] + " ";
		}
		longString += "|";
		longString += "\n";
	}

	console.log(longString);
}

//main executable code
console.log("Welcome to TicTacToe!");

var worldSize = 3;
var world = initGameWorld(worldSize);
printWorld(world, worldSize);
