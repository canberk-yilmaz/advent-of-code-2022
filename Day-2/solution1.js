const input = await Deno.readTextFile("./input.text");
const roundsArray = input.split("\n");

const calcScoreForRound = (first, second) => {
  if (first == "A") {
    if (second == "X") return 4;
    if (second == "Y") return 8;
    if (second == "Z") return 3;
  } else if (first == "B") {
    if (second == "X") return 1;
    if (second == "Y") return 5;
    if (second == "Z") return 9;
  } else if (first == "C") {
    if (second == "X") return 7;
    if (second == "Y") return 2;
    if (second == "Z") return 6;
  }
};

let total = 0;
roundsArray.forEach((round) => {
  const [first, second] = round.split(" ");
  const score = calcScoreForRound(first, second);
  total += score;
});

console.log("total", total);
