import { readFileSync } from "fs";

const input = readFileSync("day2/input.txt", "utf-8");
const ranges = input.trim().split(",");

let result = 0;
for (const range of ranges) {
  const start = +range.split("-")[0]!;
  const end = +range.split("-")[1]!;

  for (let i = start; i <= end; i++) {
    const id = i.toString();
    for (let j = 2; j <= id.length; j++) {
      if (id.length % j === 0) {
        const part = id.slice(0, id.length / j);
        let same = true;
        for (let k = 1; k < id.length / part.length; k++) {
          if (part !== id.slice(k * part.length, k * part.length + part.length)) {
            same = false;
          }
        }
        if (same) {
          result += i;
          break;
        }
      }
    }
  }
}

console.log(result);
