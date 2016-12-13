//methods have flags, switches or conditional logic gates which affect another module's logic via a parameter

function ThinkingMethod() {
    var shouldIDo = true;
    DoingMethod(shouldIDo);
}

function DoingMethod(ShouldIDo) {
    if (ShouldIDo) {
        //Do Method1()
        console.log("Congrats you have deleted the internet!");
    } else if (!ShouldIDo) {
        //Do Method2()
        //some different logic should go here
        console.log("Congrats you have deleted the internet!, I did it anyway. :)");
    }
}
