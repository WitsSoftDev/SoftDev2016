'use strict'

/*Wits SoftDev 2016
Jason Chalom
File Scanning HW*/

//used: http://stackoverflow.com/questions/2727167/getting-all-filenames-in-a-directory-with-node-js as a guide

//libraries
var fs = require("fs");
var readlineSync = require('readline-sync');
var path = require('path');
var util = require('util');

function getFilesInFolder(currentDirPath, files) {
    if (!files) files = [];

    fs.readdirSync(currentDirPath).forEach(function(name) {
        var filePath = path.join(currentDirPath, name);
        var stat = fs.statSync(filePath);
        if (stat.isFile()) {
            files.push(filePath);
        } else if (stat.isDirectory()) {
            files = getFilesInFolder(filePath, files);
        }
    });

    return files;
}

module.exports = {
    getFilesInFolder: getFilesInFolder
}
