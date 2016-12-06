var fs = require('fs');
var util = require('util');
var config = require('../config');
var should = require('chai').should();

var fileScanner = require('../fileScanning.js').getFilesInFolder;

/*js to test*/

//make sure things startup
describe('#Scan file folder', function() {
    beforeEach(function() {
        //nothing
    });

    afterEach(function() {
        //nothing
    });
    
    // tests here
    it('should be able to generate a list of files', function() {
        expect(fileScanner("/development/SoftDev2016/Session 3/Code Example/test/testCaseFolder")).to.include('\\development\\SoftDev2016\\Session 3\\Code Example\\test\\testCaseFolder\\txt1.txt');
        fileScanner("/development/SoftDev2016/Session 3/Code Example/test/testCaseFolder").should.contain('\\development\\SoftDev2016\\Session 3\\Code Example\\test\\testCaseFolder\\txt1.txt');
    });
});