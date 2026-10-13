const decimal = 90379892173;

function binary(n) {
    if (n === 0) {
        return 0
    }
    return `${binary(Math.floor(n / 2))}${n % 2}`
}

console.log(`binary value of ${decimal} is ${binary(decimal)}`)