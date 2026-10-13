function stars(number) {
  if (number === 1) {
    return "*";
  }

  return `${stars(number - 1)}*`;
}

// function pattern1(number) {
//   if (number === 0) {
//     return "";
//   }

//   return `${pattern1(number - 1)}\n${stars(number)}`;
// }

// function pattern2(number) {
//   if (number === 0) {
//     return "";
//   }

//   return `${stars(number)}\n${pattern2(number - 1)}`;
// }

// function pattern(num) {
//     if(num === 0){
//         return "";
//     }
//   return `${pattern1(num)}\n${pattern2(num - 1)}`;
// }

// console.log(pattern(4));

function pattern(n,i){
  const line = stars(i);

  if(i>=n){
    return stars(i);
  }

  return `${line}\n${pattern(n,i+1)}\n${line}`
}

function testing(n,expectedOutput){
  const starLine = pattern(n,1)

  if(starLine === expectedOutput){
    console.log("its working");
    console.log("expected",expectedOutput);
    console.log("actual",starLine);
  }
  if(starLine != expectedOutput){
    console.log("its not working");
    console.log("expected",expectedOutput);
    console.log("actual",starLine);
  }
}

testing(3,"*\n**\n***\n**\n*")