import { readFileSync } from "fs";

const input = readFileSync("day7/input.txt", "utf-8");
const lines = input.split("\n").filter(Boolean);
const grid = lines.map(line => line.split(""));
let result = 0;
let splits = [grid[0].indexOf("S")];
let nums = [];

for (let y = 0; y < grid.length; y++) {
  console.log(splits);
  nums.push("")
  for (let x = 0; x < grid[y].length; x++) {
    if (grid[y][x] === "^" && splits.includes(x)) {
      if (!splits.includes(x - 1)) splits.push(x - 1);
      if (!splits.includes(x + 1)) splits.push(x + 1);
      splits.splice(splits.indexOf(x), 1);
      result++;
    }
  }
}

console.log(result);
