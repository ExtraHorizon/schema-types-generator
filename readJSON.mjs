import { readFileSync } from 'node:fs';

export function readFileToConvert(path){
  const data = readFileSync(path, { encoding: 'utf8', flag: 'r' })
  return JSON.parse(data);
}
