import { readFileSync } from "fs";

const input = readFileSync("day7/input.txt", "utf-8");
const lines = input.split("\n").filter(Boolean);
