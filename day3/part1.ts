import { readFileSync } from "fs";

const input = readFileSync("day3/input.txt", "utf-8");
const lines = input.split("\n").filter(Boolean);
let result = 0;

for (const line of lines) {
  let joltage = "";
  let largestIndex = 0;
  const nums = line.split("");
  for (let i = 0; i < nums.length - 1; i++) {
    if (+nums[i]! > +nums[largestIndex]!) {
      largestIndex = i;
    }
  }
  joltage += nums[largestIndex];

  const left = nums.slice(largestIndex + 1);
  largestIndex = 0;
  for (let i = 0; i < left.length; i++) {
    if (+left[i]! > +left[largestIndex]!) {
      largestIndex = i;
    }
  }
  joltage += left[largestIndex];

  result += +joltage;
  console.log(joltage, line, left.join(""));
}

console.log(result);
