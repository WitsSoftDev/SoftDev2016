var readlineSync = require('readline-sync');
var util = require('util');

var filesScanning = require('./filesScanning.js');
var fileSchema = require('./fileSchema.js');

var userIn = "";
userIn = readlineSync.question("Please input a directory to be scanned: ");

var files = filesScanning.getFilesInFolder(userIn);


var iFileList = new fileSchema({
    fileList: files
});


iFileList.save();
console.log("created file list.\n");

console.log("Please wait 2 seconds.")
setTimeout(function() {
    //will pull all records
    fileSchema.find({}, function(err, files) {
        /* istanbul ignore next */
        if (err) {
            console.log("Error: " + err);
        }

        for (var i = 0; i < files.length; i++) {
            console.log("\nFiles:" + util.inspect(files[i]) + "\n\n");
        }

        console.log("END OF LINE.\n");
    });
}, 2000);
