const input = await Deno.readTextFile("./input.text");

let answer = null;
for (let i = 0; i < input.length; i++) {
  if (
    input[i] !== input[i + 1] &&
    input[i] !== input[i + 2] &&
    input[i] !== input[i + 3] &&
    input[i + 1] !== input[i + 2] &&
    input[i + 1] !== input[i + 3] &&
    input[i + 2] !== input[i + 3]
  ) {
    answer = i + 4;
    break;
  }
}

console.log(answer);
