'use strict'

/*Wits SoftDev 2016
Jason Chalom
TicTacToe example*/

//libraries
var fs = require("fs");
var readlineSync = require('readline-sync');

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

function checkMove(world, size, x, y){
	var hasMoved = true;

	if (world[x][y] === "X" || world[x][y] === "O"){
		hasMoved == false;
	}

	return hasMoved;
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

function askMove(world, size){
	var checkUserMove = false;
	var userIn = "";

	//can create unending loop of no moves left
	var movesLeft = numberMovesLeft(world, size);
	while (!checkUserMove && movesLeft > 0)	{
		//an alternative approach
		
		/*//get console standard in
		var stdin = process.openStdin();
		
		stdin.addListener("data", function(input) {
	        userIn = input.toString().trim().split(',');
	  	});*/

	  	//using the library makes life easy
	  	userIn = readlineSync.question("Please input a move that has not been done. <x,y> ");

	  	checkUserMove = checkMove(world, size, userIn[0], userIn[1]);

	  	if (!checkMove){
	  		console.log("Please enter a valid move.\n");
	  	}
	}

	world[userIn[0]][userIn[1]] = "O";

	return world;
}

//main function for the code
//this makes the code look neater
function main(){
	//main executable code
	console.log("Welcome to TicTacToe!");

	var worldSize = 3;
	var world = initGameWorld(worldSize);
	console.log("\n==================");
	printWorld(world, worldSize);

	var movesLeft = numberMovesLeft(world, worldSize);

	while(movesLeft > 0){
		//do rnd move
		world = rndMove(world, worldSize);
		//print world
		console.log("\n==================");
		printWorld(world, worldSize);
		//ask for move
		world = askMove(world, worldSize);
		//repeat till end - check who won

		movesLeft = numberMovesLeft(world, worldSize);
	}
}

//run main function
main();