const input = await Deno.readTextFile("./input.text");
const roundsArray = input.split("\n");

const calcScoreForRound = (first, second) => {
  if (first == "A") {
    if (second == "X") return 0 + 3;
    if (second == "Y") return 3 + 1;
    if (second == "Z") return 6 + 2;
  } else if (first == "B") {
    if (second == "X") return 0 + 1;
    if (second == "Y") return 3 + 2;
    if (second == "Z") return 6 + 3;
  } else if (first == "C") {
    if (second == "X") return 0 + 2;
    if (second == "Y") return 3 + 3;
    if (second == "Z") return 6 + 1;
  }
};

let total = 0;
roundsArray.forEach((round) => {
  const [first, second] = round.split(" ");
  const score = calcScoreForRound(first, second);
  total += score;
});

console.log("total", total);
