let array = [1,2,3,4,5]

// let mulArray = array.map((e)=>{
//     e = e*e;
// })
let mulArray = (array.map((e)=>{    //! Takes Current Val
    return e *= e;
}));
console.log(mulArray);

let sum = mulArray.reduce((acc, e) => acc + e, 0); //! Reduce takes early value and current val as params
console.log("Sum of squared array: " + sum);
console.log(mulArray);