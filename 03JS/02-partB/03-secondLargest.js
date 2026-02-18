function secondLargest(arr) {
    const max = Math.max(...arr);
    const filtered = arr.filter(n => n !== max);
    return Math.max(...filtered) ;
}
console.log(secondLargest([10,20,20,9,3]));