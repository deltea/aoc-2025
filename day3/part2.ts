import { readFileSync } from "fs";

const input = readFileSync("day3/input.txt", "utf-8");
const lines = input.split("\n").filter(Boolean);
const batteryNum = 12;
let result = 0;

for (const line of lines) {
  let joltage = "";
  let largestIndex = -1;
  let nums = line.split("");

  for (let j = 0; j < batteryNum; j++) {
    nums = nums.slice(largestIndex + 1);
    largestIndex = 0;
    for (let i = 0; i <= nums.length - batteryNum + j; i++) {
      if (+nums[i]! > +nums[largestIndex]!) {
        largestIndex = i;
      }
    }
    joltage += nums[largestIndex];

    console.log(joltage, nums.join(""));
  }

  result += +joltage;
  console.log(joltage);
}

console.log(result);
