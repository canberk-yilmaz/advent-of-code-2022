import input from "./input.js";

let maxValue = 0;
let tempMax = 0;
for (let i = 0; i < input.length; i++) {
  if (input[i] == undefined) {
    if (tempMax > maxValue) {
      maxValue = tempMax;
    }
    tempMax = 0;
  } else {
    tempMax = tempMax + input[i];
  }
}
console.log("m", maxValue);
return maxValue;
