function reverseStringLoop(str) {
    let reversed = '';
  //! looped backwards
    for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
    }
    return reversed;
}

const originalString = 'javascript';
const reversedString = reverseStringLoop(originalString);
console.log(reversedString);