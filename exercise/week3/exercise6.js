function angkaPalindrome(num) {
    num++

    let temp = ''
    for (let i = num.toString().length - 1; i >= 0; i--) {
        temp += num.toString()[i]
    }

    return num.toString() === temp ?
        num :
        angkaPalindrome(num)
}

// TEST CASES
console.log(angkaPalindrome(8)); // 9
console.log(angkaPalindrome(10)); // 11
console.log(angkaPalindrome(117)); // 121
console.log(angkaPalindrome(175)); // 181
console.log(angkaPalindrome(1000)); // 1001