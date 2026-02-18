let array = ["uzair","aadi","keval","sunn"]
// let evenArray = array.length
let even = 0;
let odd = 0;
array.forEach(element => {
    if(element.length %2 == 0){
        console.log(`Element is Even ${element}`);
        even++
    }
    else
        odd++
});
console.log(`There are ${even} even elements `);
console.log(`There are ${odd} odd elements `);

// filter((a)=> a%2 == 0)
// console.log(evenArray);