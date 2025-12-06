import { readFileSync } from "fs";

const input = readFileSync("day4/input.txt", "utf-8");
const lines = input.split("\n").filter(Boolean);
let result = 0;
const dirs = [[1, 0], [-1, 0], [0, 1], [0, -1], [1, 1], [-1, -1], [1, -1], [-1, 1]];

for (let row = 0; row < lines.length; row++) {
  for (let col = 0; col < lines[row].length; col++) {
    if (lines[row][col] !== "@") continue;
    let count = 0;
    for (let i = 0; i < dirs.length; i++) {
      const newPos = [col + dirs[i][0], row + dirs[i][1]];
      if (
        newPos[0] < 0 ||
        newPos[0] >= lines[row].length ||
        newPos[1] < 0 ||
        newPos[1] >= lines.length
      ) continue;
      if (lines[newPos[1]][newPos[0]] === "@") {
        count++;
      }
    }
    if (count < 4) {
      console.log(col, row);
      result++;
    }
  }
}

console.log(result);
