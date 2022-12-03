const input = await Deno.readTextFile("./input.text");
const compartmentssArray = input.split("\n");

const convertToValue = (val) => {
  if (val) {
    if (val === val.toUpperCase()) {
      return val.charCodeAt(0) - 38;
    }
    return val.charCodeAt(0) - 96;
  }
  return 0;
};

const priorityArray = [];

compartmentssArray.forEach((c) => {
  let foundLetter;
  let halfLength = c.length / 2;
  const a = c.slice(0, halfLength);
  const b = c.slice(halfLength);
  const aArray = a.split("");
  const bArray = b.split("");

  aArray.forEach((letter) => {
    if (bArray.indexOf(letter) >= 0) {
      foundLetter = letter;
    }
  });
  priorityArray.push(foundLetter);
});

let total = 0;
priorityArray.forEach((item) => {
  total += convertToValue(item);
});

console.log("total", total);
