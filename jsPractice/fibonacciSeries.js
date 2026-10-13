const number = 10;

function fibonacciTerm(n) {
    if (n === 0 || n === 1) {
        return n
    }

    return fibonacciTerm(n - 1) + fibonacciTerm(n - 2);
}

function fibonacci(n) {

    if (n === 0 || n === 1) {
        return n
    }

    return `${fibonacci(n - 1)} ${fibonacciTerm(n - 1) + fibonacciTerm(n - 2)}`

}

console.log(fibonacci(number));