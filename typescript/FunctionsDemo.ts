//named function
function display() {
    console.log("Hello TypeScript!");
}

// function with return type
function Sum(x: number, y: number) : number {
    return x + y;
}

//anonymous function
let greeting = function() {
    console.log("Hello TypeScript Anonymous function!");
};

display();
var s=Sum(2,3);
console.log("The addition of 2 nos is :"+s);
greeting();