const principalAmount = 1000;
const rateOfIntrest = 10;
const years = 2;

function percentage(value, percentage) {
    return value * (percentage / 100);
}

function compoundIntrest(principalAmount, rateOfIntrest, years) {
    if (years === 0) {
        return principalAmount;
    }

    return compoundIntrest(principalAmount + percentage(principalAmount, rateOfIntrest), rateOfIntrest, years - 1)
}

console.log(compoundIntrest(principalAmount, rateOfIntrest, years))

