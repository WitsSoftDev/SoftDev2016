"use strict";
//ES6 Example

async function GetData() {
    return await fileSchema.find({}, function(err, files) {
        /* istanbul ignore next */
        if (err) {
            console.log("Error: " + err);
        }

        for (var i = 0; i < files.length; i++) {
            console.log("\nFiles:" + util.inspect(files[i]) + "\n\n");
        }

        console.log("END OF LINE.\n");

        return files; //bad to do this in a callback but just to show how this pattern works
    });
}

function main() {
	var files = await GetData();
}
