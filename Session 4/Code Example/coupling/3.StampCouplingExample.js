//Methods pass non-global data structres to each other via parameters

function Method1() {
    var check = true;
    if (check) {
        Method2_True(true);
    } else if (!check) {
        Method2_False(false, true);
    }
}

function Method2_True(param1) {

}

function Method2_False(param1, param2) {

}
