import { readFileSync } from "fs";

function getLongestLength(arr: string[]): number {
  let longest = 0;
  for (const item of arr) {
    if (item.length > longest) {
      longest = item.length;
    }
  }
  return longest;
}

const input = readFileSync("day6/input.txt", "utf-8");
const lines = input.split("\n").filter(Boolean);

const operators = lines[lines.length - 1].split("").filter(x => x.trim() !== "");
const problems = [];
let currentProblem = [];
for (let i = 0; i < getLongestLength(lines); i++) {
  let col = "";
  for (let j = 0; j < lines.length - 1; j++) {
    col += lines[j].split("")[i] || " ";
  }
  if (col.trim() === "") {
    problems.push(currentProblem);
    currentProblem = [];
  } else {
    currentProblem.push(col);
  }
}
problems.push(currentProblem);

let result = 0;
for (let i = 0; i < problems.length; i++) {
  let subresult = 0;
  for (const num of problems[i]) {
    if (operators[i] === "+") {
      subresult += +num;
    } else {
      if (subresult === 0) subresult = 1;
      subresult *= +num;
    }
  }
  result += subresult;
}

console.log(result);
