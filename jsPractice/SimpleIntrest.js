const principalAmount = 1000;
const rateOfIntrest = 5;
const time = 2;

function simpleIntrest(principalAmount,rateOfIntrest,time){
    return (principalAmount * rateOfIntrest * time) / 100;
}

console.log(`Simple Intrest = ${simpleIntrest(principalAmount,rateOfIntrest,time)}`);