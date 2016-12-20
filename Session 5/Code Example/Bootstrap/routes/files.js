var express = require('express');
var router = express.Router();
var util = require('util');
var fileSchema = require('../fileSchema.js');

router.get('/', function(req, res, next) {
    //will pull all records
    fileSchema.find({}, function(err, files) {
        /* istanbul ignore next */
        if (err) {
            console.log("Error: " + err);
        }

        for (var i = 0; i < files.length; i++) {
            console.log("\nFiles:" + util.inspect(files[i]) + "\n\n");
        }

        res.render('files', { title: 'File Scanner', files: files });
    });
});

module.exports = router;
