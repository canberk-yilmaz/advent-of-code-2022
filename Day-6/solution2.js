const input = await Deno.readTextFile("./input.text");

let controlSize = 14;

let arr = Array.from(Array(controlSize).keys());

let answer = null;
for (let i = 0; i < input.length; i++) {
  let tempArr = arr.map((x) => input[i + x]);
  if (new Set(tempArr).size === 14) {
    answer = i + controlSize;
    break;
  }
}
console.log(answer);
