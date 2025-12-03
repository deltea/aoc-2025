import { readFileSync } from "fs";

const input = readFileSync("day3/input.txt", "utf-8");
const lines = input.split("\n").filter(Boolean);
const batteryNum = 12;

let result = 0;
for (const line of lines) {
  let joltage = "";
  let largest = -1;
  let nums = line.split("");

  for (let j = 0; j < batteryNum; j++) {
    nums = nums.slice(largest + 1);
    largest = 0;
    for (let i = 0; i <= nums.length - batteryNum + j; i++) {
      if (+nums[i] > +nums[largest]) {
        largest = i;
      }
    }
    joltage += nums[largest];
  }
  result += +joltage;
}

console.log(result);
