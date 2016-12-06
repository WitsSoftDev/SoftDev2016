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
    if (process.env.NODE_ENV === 'test') {
        console.log("test db");
        mongoose.connect(config.mongodbTest, options);
        console.log("connected to database.");
    } else if (process.env.NODE_ENV === 'production') {
        console.log("production db");
        mongoose.connect(process.env.MONGODB_URI, options); //heroku deploy
        console.log("connected to database.");
    } else {
        console.log("development db");
        mongoose.connect(config.mongodb, options);
        console.log("connected to database.");
    }

} catch (error) {
    console.error("Error connecting to db. Err: " + error);
}

module.exports = {
    mongoose: mongoose
};