let array = [1,2,3,4,5]


let add = array.reduce((a,b)=> a+b, 0)
let sub = array.slice(1).reduce((a,b)=> a-b, array[0])
let mul = array.reduce((a,b)=> a*b, 1)
let avg = add / array.length
console.log("Addition: " + add);
console.log("Subtraction: " + sub);
console.log("Multiplication: " + mul);
console.log("Average: " + avg);
