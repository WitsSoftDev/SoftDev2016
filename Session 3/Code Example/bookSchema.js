var mongoose = require('./mongooseSetup.js').mongoose;

var bookSchema = mongoose.Schema({
    bookId: String,
    title: String,
    author: String,
    userId: String,
    noAvailable: Number,
    isAvailable: Boolean,
    interests: [String],
    picURL: String,
    ISBN: String,
    publishDate: Date,
    creationDate: Date,
    language: String,
    edition: String,
    loanPrice: Number,
    sellPrice: Number,
    isForLoan: Boolean,
    isForSale: Boolean,
/*    isSold: Boolean,*/
/*    isOnLoan: Boolean,*/
    summary: String
}, { strict: false, collection: 'Book' });

bookSchema.methods.toString = function() {
    return this.title + " by " + this.author;
};

var book = mongoose.model('Book', bookSchema);

module.exports = book;
