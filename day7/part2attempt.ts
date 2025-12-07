import { readFileSync } from "fs";

const input = readFileSync("day7/test.txt", "utf-8");
const lines = input.split("\n").filter(Boolean);
let grid = lines.map(line => line.split(""));
let splitters = [];

for (let y = 0; y < grid.length; y++) {
  if (!grid[y].includes("^")) continue;
  for (let x = 0; x < grid[y].length; x++) {
    if (grid[y][x] !== "^") continue;
    let i = y;
    let splitted = false;
    while (i > 0) {
      i--;
      if (grid[i][x] === "S" || grid[i][x + 1] === "^" || grid[i][x - 1] === "^") {
        splitted = true;
        break;
      } else if (grid[i][x] === "^") {
        break;
      }
    }
    if (!splitted) grid[y][x] = ".";
  }
  let paths = [];
  for (let x = 0; x < grid[y].length; x++) {
    if (grid[y][x] !== ".") continue;
    if (grid[y][x + 1] === "^" || grid[y][x - 1] === "^") {
      if (!paths.includes(x)) paths.push(x);
    }
  }
  splitters.push(paths.length);
}

console.log(splitters);
console.log(splitters.reduce((a, b) => a * b, 1));
