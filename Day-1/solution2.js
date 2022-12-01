import input from "./input.js";

// bad solution
// let tempMax = 0;
// let calorieArray = [];
// for (let i = 0; i < input.length; i++) {
//   if (input[i] == undefined) {
//     calorieArray.push(tempMax);
//     tempMax = 0;
//   } else {
//     tempMax = tempMax + input[i];
//   }
// }

// calorieArray.sort((a, b) => b - a);

// let topThree = calorieArray.slice(0, 3);

// let total = topThree.reduce((partialSum, a) => partialSum + a, 0);
// console.log("total", total);
// return total;

// better solution
let max1 = 0;
let max2 = 0;
let max3 = 0;
let tempMax = 0;
for (let i = 0; i < input.length; i++) {
  if (input[i] == undefined) {
    // console.log("max1", max1);
    if (tempMax > max1) {
      max3 = max2;
      max2 = max1;
      max1 = tempMax;
    } else if (tempMax > max2) {
      max3 = max2;
      max2 = tempMax;
    } else if (tempMax > max3) {
      max3 = tempMax;
    }

    tempMax = 0;
  } else {
    tempMax = tempMax + input[i];
  }
}
console.log("m", max1 + max2 + max3);
return max1 + max2 + max3;
