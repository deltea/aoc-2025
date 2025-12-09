import { readFileSync } from "fs";

const input = readFileSync("day8/test.txt", "utf-8");
let lines = input.split("\n").filter(Boolean).map(line => line.split(",")).map(coords => coords.map(Number));

type Junction = number[];

// get distance between 2 points in 3d space
function getDistance(a: number[], b: number[]): number {
  return Math.sqrt(
    (a[0] - b[0]) ** 2 + (a[1] - b[1]) ** 2 + (a[2] - b[2]) ** 2
  );
}

// include but with arrays
function arraysEqual(arr1: any[], arr2: any[]) {
  if (arr1.length !== arr2.length) return false;
  for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) return false;
  }
  return true;
}
function arraysInclude(arr: any[], target: any[]) {
  return arr.some(inner => arraysEqual(inner, target));
}

let closestJunctions: Junction[][] = [];
for (let i = 0; i < lines.length; i++) {
  for (let j = 0; j < lines.length; j++) {
    if (i === j) continue;
    closestJunctions.push([lines[i], lines[j]]);
  }
}
closestJunctions.sort((a, b) => getDistance(a[0], a[1]) - getDistance(b[0], b[1]));
closestJunctions = closestJunctions.filter((_, i) => i % 2 === 0).slice(0, 10);

let circuits: Junction[][] = [];
for (let i = 0; i < closestJunctions.length; i++) {
  let circuitIndex = -1;
  for (let k = 0; k < circuits.length; k++) {
    if (arraysInclude(circuits[k], closestJunctions[i][0]) || arraysInclude(circuits[k], closestJunctions[i][1])) {
      circuitIndex = k;
      break;
    }
  }
  if (circuitIndex >= 0) {
    if (arraysInclude(circuits[circuitIndex], closestJunctions[i][0]) && !arraysInclude(circuits[circuitIndex], closestJunctions[i][1])) {
      circuits[circuitIndex].push(closestJunctions[i][1]);
    }
    if (!arraysInclude(circuits[circuitIndex], closestJunctions[i][0]) && arraysInclude(circuits[circuitIndex], closestJunctions[i][1])) {
      circuits[circuitIndex].push(closestJunctions[i][0]);
    }
  } else {
    circuits.push([]);
    circuits[circuits.length - 1].push(closestJunctions[i][0]);
    circuits[circuits.length - 1].push(closestJunctions[i][1]);
  }
  console.log(circuitIndex, closestJunctions[i]);
  console.log(circuits.map((c, i) => "\t" + c.join(" | ")).join("\n\n"));
}

console.log(circuits);
