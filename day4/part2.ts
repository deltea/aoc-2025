import { readFileSync } from "fs";

const input = readFileSync("day4/input.txt", "utf-8");
let result = 0;
let lines = input.split("\n").filter(Boolean).map(line => line.split(""));
const dirs = [[1, 0], [-1, 0], [0, 1], [0, -1], [1, 1], [-1, -1], [1, -1], [-1, 1]];

let keepGoing = true;
while (keepGoing) {
  let clone = [...lines];
  keepGoing = false;
  for (let row = 0; row < clone.length; row++) {
    for (let col = 0; col < clone[row].length; col++) {
      if (clone[row][col] !== "@") continue;
      let count = 0;
      for (let i = 0; i < dirs.length; i++) {
        const newPos = [col + dirs[i][0], row + dirs[i][1]];
        if (
          newPos[0] < 0 ||
          newPos[0] >= clone[row].length ||
          newPos[1] < 0 ||
          newPos[1] >= clone.length
        ) continue;
        if (clone[newPos[1]][newPos[0]] === "@") {
          count++;
        }
      }
      if (count < 4) {
        keepGoing = true;
        clone[row][col] = ".";
        result++;
      }
    }
  }
  lines = clone;
}

console.log(result);
