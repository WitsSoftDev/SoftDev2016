'use strict'

/*Wits SoftDev 2016
Jason Chalom
TicTacToe example*/

//libraries
var fs = require("fs");
var readlineSync = require('readline-sync');

//import layers
var dataLayer = require('./dataLayer');

function startWorld(worldSize) {
	var world = dataLayer.initGameWorld(worldSize);
	return world;
}

//this will make a random move
//if the place is taken then it will try again until move is made
//can only be done if game is not over
function rndMove(world, size){
	var movex = 0; // 0 to size-1 ie the coords
	var movey = 0; // 0 to size-1 ie the coords
	var x = parseInt(movex);
	var y = parseInt(movey);
	var madeMove = false;

	//can create unending loop of no moves left
	var movesLeft = numberMovesLeft(world, size);
	while (!madeMove){
		movex = Math.random() * size; // 0 to size-1 ie the coords
		movey = Math.random() * size; // 0 to size-1 ie the coords

		x = parseInt(movex);
		y = parseInt(movey);
		madeMove = checkMove(world, size, x, y);
	}

	world[x][y] = "X";

	return world;
}

//count number of moves left
function numberMovesLeft(world, size){
	var count = 0;
	for (var i = 0; i < size; i++){
		for (var j = 0; j < size; j++){
			if (world[i][j] === "."){
				count ++;
			}
		}	
	}

	return count;
}

function checkMove(world, size, x, y){
	var hasMoved = true;

	if (world[x][y] === "X" || world[x][y] === "O"){
		hasMoved == false;
	}

	return hasMoved;
}

module.exports = {
	startWorld: startWorld,
	rndMove: rndMove,
	numberMovesLeft: numberMovesLeft,
	checkMove: checkMove
}