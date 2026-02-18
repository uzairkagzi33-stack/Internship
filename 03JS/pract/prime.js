function isPrime(num) {
    let limit = Math.floor(Math.sqrt(num));     //? Limit till sq root, checking till sq root will be enough

    if(num <= 1){       //? less than one, than return
        return false;
    }
    if (num === 2){     //? 2 than return true
        return true;
        
    }
    if(num%2 === 0){    //? if num can be divided by 2 than it`ll be a even num
        return false;
    }
    for(let i = 3 ; i <= limit ; i += 2){   //! Started loop from 3 as, 1,2 cases are already covered
        if (num%i === 0){          //? Checks for number till limit 
            return false;
        }
    }
    return true;

}

console.log("2 is " + isPrime(11))

