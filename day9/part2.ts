import { readFileSync } from "fs";

const input = readFileSync("day9/test.txt", "utf-8");
const lines = input.split("\n").filter(Boolean).map(l => l.split(",").map(Number));

function getDistance(a: number[], b: number[]): number {
  return Math.abs(a[0] - b[0]) + Math.abs(a[1] - b[1]);
}

function getDir(a: number[], b: number[]): number[] {
  if (a[0] === b[0]) {
    return [0, Math.sign(b[1] - a[1])];
  } else {
    return [Math.sign(b[0] - a[0]), 0];
  }
}

let longestDistance = 0;
let longest = [];
for (let i = 0; i < lines.length; i++) {
  for (let j = 0; j < lines.length; j++) {
   if (i === j) continue;
    longest.push([i, j]);
    const dist = getDistance(lines[i], lines[j]);
    if (dist > longestDistance) {
      longestDistance = dist;
    }
  }
}
longest.reverse();
longest.sort((a, b) => getDistance(lines[b[0]], lines[b[1]]) - getDistance(lines[a[0]], lines[a[1]]));
// console.log(longest.map(l => [lines[l[0]], lines[l[1]]]));

// const dims = [97580, 50120];
const dims = [15, 10]
let grid = Array.from({ length: dims[1] }, () => new Array(dims[0]).fill("."));

for (let i = 0; i < lines.length; i++) {
  grid[lines[i][1]][lines[i][0]] = "#";
}

let pos = lines[0].slice();
let i = 0;
while (i < lines.length) {
  const nextPos = i === lines.length - 1 ? lines[0] : lines[i + 1];
  const dir = getDir(lines[i], nextPos);
  const distance = getDistance(lines[i], nextPos);
  for (let j = 0; j < distance; j++) {
    pos[0] += dir[0];
    pos[1] += dir[1];
    grid[pos[1]][pos[0]] = "X";
  }
  i++;
}

for (let y = 0; y < grid.length; y++) {
  const row = grid[y];
  const range = [row.indexOf("X"), row.lastIndexOf("X")];
  if (range.includes(-1)) continue;
  grid[y] = [
    ...grid[y].slice(0, range[0]),
    ...new Array(range[1] - range[0]).fill("X"),
    ...grid[y].slice(range[1])
  ];
}

console.log(grid);

let result = [];
for (let i = 0; i < longest.length; i++) {
  let squashed = [];
  const first = lines[longest[i][0]];
  const second = lines[longest[i][1]]
  for (let y = Math.min(first[1], second[1]); y < Math.max(first[1], second[1]); y++) {
    for (let x = Math.min(first[0], second[0]); x < Math.max(first[0], second[0]); x++) {
      squashed.push(grid[y][x]);
    }
  }

  if (squashed.every(c => c === "X")) {
    result = longest[i];
    break;
  }
}

console.log(result);
console.log(
  (Math.abs(lines[result[0]][0] - lines[result[1]][0]) + 1) *
  (Math.abs(lines[result[0]][1] - lines[result[1]][1]) + 1)
);
