'use strict'

/*Wits SoftDev 2016
Jason Chalom
TicTacToe example*/

//libraries
var fs = require("fs");
var readlineSync = require('readline-sync');

//import layers
var logicLayer = require('./logicLayer');

function printWorld(world, size){
	var longString = "";
	for (var i = 0; i < size; i++){
		longString += (i+1)+ " |"; // the walls of the game
		for (var j = 0; j < size; j++){
			longString += world[i][j] + " ";
		}
		longString += "|";
		longString += "\n";
	}

	//add x values at the bottom for user
	longString += "  "; // add padding
	for (var i = 0; i < size; i++){
		longString += " " + (i+1) + "";
	}
	longString += "\n";

	console.log(longString);
}

function askMove(world, size){
	var checkUserMove = false;
	var userIn = "";

	//can create unending loop of no moves left
	var movesLeft = logicLayer.numberMovesLeft(world, size);

	var x = null; //shouldn't do this
	var y = null;

	while (!checkUserMove && movesLeft > 0)	{
		//an alternative approach
		
		/*//get console standard in
		var stdin = process.openStdin();
		
		stdin.addListener("data", function(input) {
	        userIn = input.toString().trim().split(',');
	  	});*/

	  	//using the library makes life easy
	  	userIn = readlineSync.question("Please input a move that has not been done. <x,y> ");
	  	userIn = userIn.split(',');

  		x = parseInt(userIn[0]) - 1;
		y = parseInt(userIn[1]) - 1;

	  	checkUserMove = logicLayer.checkMove(world, size, x, y);

	  	if (!checkUserMove){
	  		console.log("Please enter a valid move.\n");
	  	}
	}

	world[x][y] = "O";

	return world;
}

module.exports = {
	printWorld: printWorld,
	askMove: askMove
}