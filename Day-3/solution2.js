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

const chunkSize = 3;
for (let i = 0; i < compartmentssArray.length; i += chunkSize) {
  const chunk = compartmentssArray.slice(i, i + chunkSize);

  let foundLetter;
  const aArray = chunk[0].split("");
  const bArray = chunk[1].split("");
  const cArray = chunk[2].split("");

  aArray.forEach((letter) => {
    if (bArray.indexOf(letter) >= 0 && cArray.indexOf(letter) >= 0) {
      foundLetter = letter;
    }
  });
  priorityArray.push(foundLetter);
}

let total = 0;
priorityArray.forEach((item) => {
  total += convertToValue(item);
});

console.log("total", total);
