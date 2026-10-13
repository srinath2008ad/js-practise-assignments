function nestedParanthesis(number){
    if(number === 0){
        return "";
    }
    return `(${nestedParanthesis(number-1)})`
}

console.log(nestedParanthesis(12))
