let str = "uzair kagzi"
let vowels = 'aeiouAEIOU'
let count = 0;

for (const char of str) {
    if(vowels.includes(char)){
        count++;
    }
}
console.log(count);