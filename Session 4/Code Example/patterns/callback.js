//taken from last week's example
var data = [];

function hello(options, callback) {
    data.push("how are you doing?");
    
    if (typeof callback === "function") {
        callback(options, true);
    }
}
