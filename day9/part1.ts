import { readFileSync } from "fs";

const input = readFileSync("day9/input.txt", "utf-8");
const lines = input.split("\n").filter(Boolean).map(l => l.split(",").map(Number));

function getDistance(a: number[], b: number[]): number {
  return Math.abs(a[0] - b[0]) + Math.abs(a[1] - b[1]);
}

let longestDistance = 0;
let indices = [];
for (let i = 0; i < lines.length; i++) {
  for (let j = 0; j < lines.length; j++) {
   if (i === j) continue;
    const dist = getDistance(lines[i], lines[j]);
    if (dist > longestDistance) {
      longestDistance = dist;
      indices = [i, j];
    }
  }
}

console.log(
  (Math.abs(lines[indices[0]][0] - lines[indices[1]][0]) + 1) *
  (Math.abs(lines[indices[0]][1] - lines[indices[1]][1]) + 1)
);
