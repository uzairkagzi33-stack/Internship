const convertTemp = (a) => {
   return  a * (9/5) + 32 
}

const evenOdd = (a) => {
    return (a%2 === 0) ? 'Even' : 'Odd';
}

const minMax = (a,b) => {
    return (a>b) ? a : b;
}
console.log(minMax(1,3) + ' is Max');

console.log(convertTemp(90)+ 'F is the conversion');

console.log('17 is '+evenOdd(17));