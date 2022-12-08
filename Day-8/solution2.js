const input = await Deno.readTextFile("./input.text");
const SI = input.split("\n");

let transposed = SI[0]
  .split("")
  .map((_, colIndex) => SI.map((row) => row[colIndex]));

let max = 0;
for (let i = 0; i < SI.length; i++) {
  for (let j = 0; j < SI[0].length; j++) {
    let leftCurrent = SI[i].slice(0, j);
    let rightCurrent = SI[i].slice(j + 1);
    let topCurrent = transposed[j].slice(0, i);
    let bottomCurrent = transposed[j].slice(i + 1);
    let l = 0;
    let r = 0;
    let t = 0;
    let b = 0;
    if (i == 0 || j == 0 || i == SI.length - 1 || j == SI[0].length - 1) {
      //pass corner cases
    } else {
      //reversed to fix direction
      leftCurrent
        .split("")
        .reverse()
        .some((el) => {
          l++;
          return Number(el) >= Number(SI[i][j]);
        });
      rightCurrent.split("").some((el) => {
        r++;
        return Number(el) >= Number(SI[i][j]);
      });
      //reversed to fix direction
      topCurrent.reverse().some((el) => {
        t++;
        return Number(el) >= Number(SI[i][j]);
      });
      bottomCurrent.some((el) => {
        b++;
        return Number(el) >= Number(SI[i][j]);
      });
      let mul = l * r * t * b;
      max = Math.max(max, mul);
    }
  }
}
console.log("max", max);
