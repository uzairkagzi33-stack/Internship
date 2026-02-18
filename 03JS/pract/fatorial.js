function factorial(n) {
  // Factorial is not defined for negative numbers
    if (n < 0) return "Invalid Input";
  
  // 0! and 1! are both 1
    if (n===1) return "number is one"
    let result = 1;
    
  // Loop from 2 up to n
    for (let i = 2; i <= n; i++) {
    result *= i;
    }
    
    return result;
}

console.log(factorial(10));
