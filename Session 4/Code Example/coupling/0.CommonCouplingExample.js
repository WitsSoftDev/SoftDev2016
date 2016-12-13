//both can see same global data structure
//any method can access and write to the data
var globalData = { "This is really bad" };

function DoSomething1() {
    console.log(globalData);
}

function DoSomething2() {
    globalData = "I have now just overridden data";
    console.log(globalData);
}
