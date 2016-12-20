var pkg = require('./package.json');
var config = require('./config.json');

var options = {
    /*db: { native_parser: true },
    server: { poolSize: 5 },
    replset: { rs_name: 'myReplicaSetName' },*/
    /* user: config.mongoUser,
     pass: config.mongoPassword*/
}

var mongoose = require('mongoose');
mongoose.Promise = global.Promise; //talk about in session 4

try {
    console.log("development db");
    mongoose.connect(config.mongodb, options);
    console.log("connected to database.");

} catch (error) {
    console.error("Error connecting to db. Err: " + error);
}

module.exports = {
    mongoose: mongoose
};
