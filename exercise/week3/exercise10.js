function perkalianUnik(arr) {
    // you can only write your code here!

    let temp = []
    for (let i = 0; i < arr.length; i++) {
        if (i === 0) {
            let hasil = arr[i + 1]
            for (let j = 2; j < arr.length; j++) {
                hasil *= arr[j]
            }
            temp.push(hasil)
        }

        if (i === arr.length - 1 || i !== 0) {
            let hasil = arr[0]
            for (let j = 0; j < arr.length; j++) {
                if (j !== i) hasil *= arr[j]
            }
            temp.push(hasil)
        }
    }
    return temp
}

// TEST CASES
console.log(perkalianUnik([2, 4, 6])); // [24, 12, 8]
console.log(perkalianUnik([1, 2, 3, 4, 5])); // [120, 60, 40, 30, 24]
console.log(perkalianUnik([1, 4, 3, 2, 5])); // [120, 30, 40, 60, 24]
console.log(perkalianUnik([1, 3, 3, 1])); // [9, 3, 3, 9]
console.log(perkalianUnik([2, 1, 8, 10, 2])); // [160, 320, 40, 32, 160]