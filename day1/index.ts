import { readFileSync } from "fs";

const input = readFileSync("day1/input.txt", "utf-8");
const lines = input.split("\n").filter(Boolean);

let position = 50;
let result = 0;
for (const line of lines) {
  const dir = line.charAt(0) === "R" ? 1 : -1;
  const value = +line.slice(1);
  for (let i = 0; i < value; i++) {
    position += dir;
    if (position < 0) position = 99;
    if (position > 99) position = 0;
    if (position === 0) result++;
  }
}

console.log(result);
