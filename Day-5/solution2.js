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
  let lastItems = output[from - 1].slice(-moveCount);
  output[to - 1].push(...lastItems);
  output[from - 1].splice(-moveCount, moveCount);
};

newMoves.map((move) => moveItem(...move));

let answer = output
  .map((item) => item.slice(-1)[0])
  .join("")
  .replaceAll("[", "")
  .replaceAll("]", "");

console.log(answer);
