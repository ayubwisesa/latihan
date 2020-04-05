function targetTerdekat(arr) {
    // you can only write your code here!
    if (arr.indexOf('x') === -1) {
        return 0
    }

    let indexO = arr.indexOf('o')

    let jarak = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 'x') jarak.push(Math.abs(i - indexO))
    }

    let shortest = jarak.slice(0, 1)[0]

    for (let i = 0; i < jarak.length; i++) {
        if (jarak[i] < shortest) shortest = jarak[i]
    }
    return shortest
}

// TEST CASES
console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2