import { readFileSync } from "fs";

const input = readFileSync("day6/input.txt", "utf-8");
const lines = input.split("\n").filter(Boolean);
let result = 0;
for (let i = 0; i < lines[0].split(" ").filter(Boolean).length; i++) {
  const operator = lines[lines.length - 1].split(" ").filter(Boolean)[i].trim();
  let subresult = 0;
  for (let j = 0; j < lines.length - 1; j++) {
    switch (operator) {
      case "+":
        subresult += +lines[j].split(" ").filter(Boolean)[i].trim();
        break;
      case "*":
        if (subresult === 0) subresult = 1;
        subresult *= +lines[j].split(" ").filter(Boolean)[i].trim();
        break;
      default:
        break;
    }
  }
  result += subresult;
}
console.log(result);
