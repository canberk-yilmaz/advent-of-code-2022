const input = await Deno.readTextFile("./input.text");
const pairsArray = input.split("\n");
let total = 0;

for (const pair of pairsArray) {
  const [f, s] = pair.split(",");
  const [f1s, f2s] = f.split("-");
  const [s1s, s2s] = s.split("-");

  const f1 = parseInt(f1s);
  const f2 = parseInt(f2s);
  const s1 = parseInt(s1s);
  const s2 = parseInt(s2s);

  if ((f1 < s1 && f2 < s1) || (f1 > s2 && f2 > s2)) {
    total = total + 1;
  }
}
console.log(pairsArray.length - total);
