import { readFileSync } from "fs";

const input = readFileSync("day5/input.txt", "utf-8");
const ranges = input.split("\n\n")[0].split("\n");
const ingredients = input.split("\n\n")[1].split("\n").filter(Boolean);
let result = 0;
for (const ingredient of ingredients) {
  for (const range of ranges) {
    if (+ingredient >= +range.split("-")[0] && +ingredient <= +range.split("-")[1]) {
      result++;
      break;
    }
  }
}
console.log(result);
