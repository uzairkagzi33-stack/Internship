//function that accepts a callback
function calculate(a, b, operation) {
    return operation(a, b);
}

// Callback functions
const add = (x, y) => x + y;
const multiply = (x, y) => x * y;

// Passing functions as arguments
console.log("Sum:", calculate(5, 3, add));        
console.log("Product:", calculate(5, 3, multiply)); 
