var data = {
    isTrue: false
};

//Statements are grouped together because they operate on the same set of data
function method() {
    var isValid = null;

    if (IsTheSystemUp()) {
        isValid = true;
    } else if (TheSystemIsDown()) {
        isValid = false;
    }

    //because isValid is ... do ...
}

function IsTheSystemUp() {
    return data.isTrue;
}

function TheSystemIsDown() {
    return data.isTrue;
}
