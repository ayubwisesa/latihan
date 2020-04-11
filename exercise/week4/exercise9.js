function checkAB(num) {
    // you can only write your code here!
    var indexA = []
    var indexB = []

    for (let i = 0; i < num.length; i++) {
        if (num[i] === 'a') indexA.push(i)
        else if (num[i] === 'b') indexB.push(i)
        else continue
    }

    for (let i = 0; i < indexA.length; i++) {
        for (let j = 0; j < indexB.length; j++) {
            if (Math.abs(indexA[i] - indexB[j]) === 4) {
                return true
            }
        }
    }

    return false
}



// TEST CASES
console.log(checkAB('lane borrowed')); // true
console.log(checkAB('i am sick')); // false
console.log(checkAB('you are boring')); // true
console.log(checkAB('barbarian')); // true
console.log(checkAB('bacon and meat')); // false