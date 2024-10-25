import { readFileSync } from "node:fs";

export function readFileToConvert(path) {
  const data = readFileSync(path, { encoding: "utf8", flag: "r" }); //read out the file
  return JSON.parse(data);
}
