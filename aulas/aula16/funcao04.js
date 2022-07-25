function fa(n) {
    var res = n
    for (let index = 1; index < res; index++) {
        n *= index
    }
    return n
}

console.log(fa(15))