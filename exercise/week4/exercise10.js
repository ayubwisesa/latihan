function changeMe(arr) {
    // you can only write your code here!
    var date = new Date()
    for (var i = 0; i < arr.length; i++) {
        var temp = {
            firstName: arr[i][0],
            lastName: arr[i][1],
            gender: arr[i][2],
            age: arr[i][3] ? 2020 - arr[i][3] : 'Invalid Birth Year'
        }
        console.log((i + 1) + '.' + (temp.firstName) + ' ' + (temp.lastName) + ':')

        console.log(temp)
    }
}

// TEST CASES
changeMe([
    ['Christ', 'Evans', 'Male', 1982],
    ['Robert', 'Downey', 'Male']
]); // 1. Christ Evans:
// { firstName: 'Christ',
//   lastName: 'Evans',
//   gender: 'Male',
//   age: 37 }
// 2. Robert Downey:
// { firstName: 'Robert',
//   lastName: 'Downey',
//   gender: 'Male',
//   age: 'Invalid Birth Year' }
changeMe([]); // ""