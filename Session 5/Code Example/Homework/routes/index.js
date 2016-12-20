var express = require('express');
var router = express.Router();

var filesScanning = require('../filesScanning.js');
var fileSchema = require('../fileSchema.js');


/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'File Scanner' });
});

router.post('/', function(req, res, next) {
    var files = filesScanning.getFilesInFolder(req.body.filePath);

    var iFileList = new fileSchema({
        fileList: files
    });

    iFileList.save();

    res.redirect('/');
});

module.exports = router;
