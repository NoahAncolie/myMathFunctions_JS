//Factorials
const computeFactorialIt = (n) => {
    let result = 1
    if (n === 0) {
        return (1)
    }
    while (n > 1) {
        result *= n
        n -= 1
    }
    return (result)
}

const computeFactorialRec = (n) => {
    if (n === 0) {
        return (1)
    } else {
        return (computeFactorialIt(n - 1) * n)
    }
}
//Power
const computePowerIt = (n, p) => {
    let result = n
    if (p === 0){
        return (1)
    }
    while (p > 1) {
        result *= n
        p--
    }
    return (result)
}

const computePowerRec = (n, p) => {
    if (p === 0){
        return (1)
    } else {
        return (computePowerRec(n, p - 1) * n)
    }
}
//Square Root
const computeSquareRoot = (n, p = 0) => {
    let i = 0
    if (n === 2) {
        return (4)
    }
    while (i * i <= n) {
        if (i * i === n) {
            return (i)
        }
        i++
    }
    return (undefined)
}
//Nombres Premiers
const isPrimeNumber = (n) => {
    let i = 2
    if (n % 2 === 0 && n != 2) {
        return (false)
    }
    while (i < n / 2) {
        if (n % i === 0) {
            return (false)
        }
        i++
    }
    return (true)
}

const findSupPrime = (n) => {
    if (isPrimeNumber(n)) {
        return (n)
    } else {
        return (findSupPrime(n + 1))
    }
}
//Jeu des Queens
const returnErrorQueens = (queen) => {
    let x = 0
    let y = 0
    while (x < queen.length) {
        y = 0
        while (y < queen.length) {
            if ((queen[x] === queen[y] || queen[x] + x === queen[y] + y || queen[x] - x === queen[y] - y) && x != y) {
                return (false)
            }
            y++
        }
        x++
    }
    return (true)
}

const brutForcePositions = (array, x, result) => {
    let i = 0;
    if (x === array.length) {
        return (result)
    }
    while (i < array.length) {
        array[x] = i;
        i += 1
        if (returnErrorQueens(array)) {
            result += 1
            console.log(array)
        }
        result = brutForcePositions(array, x + 1, result)
    }
    return (result)
} 

const countValidQueens = (n) => {
    let queenArray = []
    let result = 0

    while (n > 0) {
        queenArray.push(0)
        n -= 1
    }
    console.log(brutForcePositions(queenArray, 0, result))
}

countValidQueens(10)