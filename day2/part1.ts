import { readFileSync } from "fs";

const input = readFileSync("day2/input.txt", "utf-8");
const ranges = input.trim().split(",");

let result = 0;
for (const range of ranges) {
  const start = +range.split("-")[0];
  const end = +range.split("-")[1];
  for (let i = start; i <= end; i++) {
    const id = i.toString();
    if (
      id.length % 2 === 0 &&
      id.slice(0, id.length / 2) === id.slice(id.length / 2)
    ) {
      result += i;
    }
  }
}

console.log(result);
