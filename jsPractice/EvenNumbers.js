const n = 10;

function evenNumbers(range) {

    if (range === 2) {
        return range;
    }
    if (range % 2 === 0) {
        return `${evenNumbers(range - 1)} \n` + range
    }
    return evenNumbers(range - 1)
}

console.log(evenNumbers(n))