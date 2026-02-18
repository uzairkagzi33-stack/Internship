let array = ["uzair","keval","zakiya","sunny"]

// console.log(array[2].length);

// for(let i = 0; i<array.length; i++){
//     for(let j =0; j<array[i].length ; j++){
//         array[i].shift
//     }
//     console.log(array[i].shift);
// }

let firstEleArray = array.map((e) => e.slice(1))
console.log(firstEleArray);

let lastEleArray = array.map((e)=> e.slice(0,-1))
console.log(lastEleArray);

let filterArray = array.filter((e)=>e.includes('z'))
console.log(filterArray);