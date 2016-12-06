var book = require('./bookSchema.js');

var iBook = new book({
    title: "A Book about Tests",
    author: "me",
    userId: "01",
    noAvailable: 1,
    isAvailable: true,
    interests: ["testInterest1"],
    picURL: null,
    ISBN: null,
    publishDate: new Date(),
    creationDate: new Date(),
    language: "English",
    edition: "1",
    loanPrice: 500,
    sellPrice: 600,
    isForLoan: true,
    isForSale: true,
    isSold: false,
    isOnLoan: false,
    summary: "This is a test summary about testing tests."
});

iBook.save(); //sequential
console.log("created book.\n");

console.log(iBook.toString()); //can use in-built functions in object instances


console.log("returning the book:\n\n");

//
book.findOne({ $or: [{ author: "01" }, { language: "English" }] }, function(err, book) {
    /* istanbul ignore next */
    if (err) {
        logger.error(err);
        return reject(err);
    }

    book.picURL = "http://";

    book.save();

    console.log(book);
});
