//Statements must be executed in a specific sequence or procedure so that specific objectives are achieved

//some exmaple values
var a = 4;
var b = 5;
var c = 1;


function Method() {
    //quadratic formula = (-b +/- sqr(b^2-4ac))/2a 

    //calculations
    var bsquared = b * b;
    var descriminant = bsquared - 4 * a * c;

    //now using the formula
    var root1 = (-b - Math.Sqrt(descriminant)) / 2;
    var root2 = (-b + Math.Sqrt(descriminant)) / 2;

    console.log(root1 + "\n" + root2);
}
