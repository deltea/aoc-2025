import { readFileSync } from "fs";

const input = readFileSync("day10/test.txt", "utf-8");
const lines = input.split("\n").filter(Boolean);

for (const line of lines) {
  const lights = line.slice(1, line.indexOf("]"));
  const splitted = line.split(" ");
  const buttons = splitted.slice(1, splitted.length - 1).map(b => b.slice(1, b.length - 1).split(",").map(Number));

  let depth = 0;

}
