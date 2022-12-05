const input = await Deno.readTextFile("./input.text");
const inputArray = input.split("\n");

const box = inputArray.slice(0, 8);
const moves = inputArray.slice(10);

const boxColumn = box.map((row) =>
  row.replaceAll("    ", "_").replaceAll(" ", "_").split("_")
);

let output = boxColumn[0].map((_, colIndex) =>
  boxColumn.map((row) => row[colIndex]).reverse()
);
//delete empty strings

output = output.map((row) => row.filter((item) => item !== ""));
// console.log(output);

let newMoves = moves.map((move) => {
  return [
    Number(move.split(" ")[1]),
    //move count
    Number(move.split(" ")[3]),
    //move from
    Number(move.split(" ")[5]),
    //move to
  ];
});

const moveItem = (moveCount, from, to) => {
  for (let i = 0; i < moveCount; i++) {
    let lastItem = output[from - 1].slice(-1)[0];
    output[to - 1].push(lastItem);
    output[from - 1].pop();
  }
};

newMoves.map((move) => moveItem(...move));

let answer = output
  .map((item) => item.slice(-1)[0])
  .join("")
  .replaceAll("[", "")
  .replaceAll("]", "");

console.log(answer);
