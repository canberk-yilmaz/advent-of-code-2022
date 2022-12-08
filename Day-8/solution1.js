const input = await Deno.readTextFile("./input.text");
// const sampleInput = await Deno.readTextFile("./sampleInput.text");
// let sampleAnswer = 21;
// const SI = sampleInput.split("\n");

const SI = input.split("\n");
console.log("SI", SI[0]);

let transposed = SI[0]
  .split("")
  .map((_, colIndex) => SI.map((row) => row[colIndex]));

let visibleCount = 0;
for (let i = 0; i < SI.length; i++) {
  for (let j = 0; j < SI[0].length; j++) {
    let leftCurrent = SI[i].slice(0, j);
    let rightCurrent = SI[i].slice(j + 1);

    let topCurrent = transposed[j].slice(0, i);

    let bottomCurrent = transposed[j].slice(i + 1);

    let leftCase = leftCurrent
      .split("")
      ?.every((el) => Number(el) < Number(SI[i][j]));
    let rightCase = rightCurrent
      .split("")
      ?.every((el) => Number(el) < Number(SI[i][j]));
    let topCase = topCurrent.every((el) => Number(el) < Number(SI[i][j]));
    let bottomCase = bottomCurrent.every((el) => Number(el) < Number(SI[i][j]));

    if (i == 0 || j == 0 || i == SI.length - 1 || j == SI[0].length - 1) {
      visibleCount++;
    } else if (bottomCase || topCase || leftCase || rightCase) {
      visibleCount++;
    }
  }
}

console.log("visibleCount", visibleCount);
