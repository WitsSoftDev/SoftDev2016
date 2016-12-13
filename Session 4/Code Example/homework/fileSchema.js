var mongoose = require('./mongooseSetup.js').mongoose;

var fileSchema = mongoose.Schema({
    fileList: [String]
}, { strict: false, collection: 'File' });


var file = mongoose.model('File', fileSchema);

module.exports = file;
