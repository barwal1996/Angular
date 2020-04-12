//named function
function display() {
    console.log("Hello TypeScript!");
}
// function with return type
function Sum(x, y) {
    return x + y;
}
//anonymous function
var greeting = function () {
    console.log("Hello TypeScript Anonymous function!");
};
display();
var s = Sum(2, 3);
console.log("The addition of 2 nos is :" + s);
greeting();
