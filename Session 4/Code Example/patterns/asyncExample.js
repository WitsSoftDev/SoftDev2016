var async = require("async");

function hello(options, callback) {
    data.push("how are you doing?");

    if (typeof callback === "function") {
        callback(options, true);
    }
}

//async.parallel
//async.series

async.waterfall([
        function(callback) {
            getSomething(options, function(err, result) {
                if (err) {
                    callback(new Error("failed getting something:" + err.message));
                    // we should return here
                }
                
                // since we did not return, this callback still will be called and
                // `processData` will be called twice
                callback(null, result);
            });
        },
        processData
    ],
    hello({ test: true }, callback),
    done);
