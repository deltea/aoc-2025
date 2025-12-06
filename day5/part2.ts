import { readFileSync } from "fs";

const input = readFileSync("day5/input.txt", "utf-8");
let lines = [...input.split("\n\n")[0].split("\n")];
let result = 0;

for (let x = 0; x < lines.length; x++) {
  for (let y = 0; y < lines.length; y++) {
    if (x === y) continue;
    if (!lines[x] || !lines[y]) continue;

    const rangeX = [+lines[x].split("-")[0], +lines[x].split("-")[1]];
    const rangeY = [+lines[y].split("-")[0], +lines[y].split("-")[1]];
    if (
      rangeX[0] >= rangeY[0] &&
      rangeX[0] <= rangeY[1] &&
      rangeX[1] <= rangeY[1] &&
      rangeX[1] >= rangeY[0]
    ) {
      lines[x] = null;
      break;
    } else if (
      rangeX[0] >= rangeY[0] &&
      rangeX[0] <= rangeY[1] &&
      rangeX[1] > rangeY[1]
    ) {
      lines.push(`${rangeY[0]}-${rangeX[1]}`);
      lines[x] = null;
      lines[y] = null;
      break;
    } else if (
      rangeX[0] < rangeY[0] &&
      rangeX[1] <= rangeY[1] &&
      rangeX[1] >= rangeY[0]
    ) {
      lines.push(`${lines[x].split("-")[0]}-${lines[y].split("-")[1]}`);
      lines[x] = null;
      lines[y] = null;
      break;
    }
  }
}

lines = lines.filter(Boolean);
for (const line of lines) {
  result += (+line.split("-")[1] - +line.split("-")[0]) + 1;
}

console.log(result);
