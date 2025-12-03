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

  const part = nums.slice(largestIndex + 1);
  largestIndex = 0;
  for (let i = 0; i < part.length; i++) {
    if (+part[i]! > +part[largestIndex]!) {
      largestIndex = i;
    }
  }

  joltage += part[largestIndex];
  result += +joltage;
}

console.log(result);
