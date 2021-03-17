// 1. What are our parameters?
// -- an array of numbers
// 2. What are we returning from our function?
// -- a single number


const sumAll = numsArray => {
    var total = 0;
    for (let i = 0; i < numsArray.length; i++) {
        total += numsArray[i]
    }
    return total
}

console.log(sumAll([42, 76, 100]))

module.exports = sumAll;