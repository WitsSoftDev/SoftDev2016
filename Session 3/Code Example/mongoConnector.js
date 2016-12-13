var config = require("./config.json");
var MongoClient = require('mongodb').MongoClient;

//manual connection, maybe  use?
//http://doduck.com/node-js-mongodb-hello-world-example/

function main() {
    var myCollection;
    var db = MongoClient.connect(config.mongodb, function(err, db) {
        if (!err) {
            console.log("Connected to database");
            myCollection = db.collection("collectionA");

            myCollection.insert({ name: "Dog", description: "An animal." }, function(err, result) {
                if (err)
                    console.error("Error: " + err);

                console.log("entry saved");
            });
        } else {
            console.error("Error: " + err);
        }
    });
}
main(); //this is removed when integrated into a package
