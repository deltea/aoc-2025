import { readFileSync } from "fs";

const input = readFileSync("day7/input.txt", "utf-8");
const lines = input.split("\n").filter(Boolean);
let grid = lines.map(line => line.split(""));
let paths = new Array(grid[0].length).fill(0);
paths[grid[0].indexOf("S")] = 1;

let y = 0;
while (y < lines.length) {
  for (let x = 0; x < grid[y].length; x++) {
    if (grid[y][x] === "^") {
      paths[x + 1] += paths[x];
      paths[x - 1] += paths[x];
      paths[x] = 0;
    }
  }
  y++;
}

console.log(Object.values(paths).reduce((a, b) => a + b, 0));
