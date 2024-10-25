import { compile } from "npm:json-schema-to-typescript";
import { readFileToConvert } from "./readJSON.mjs";
import { writeFile } from "node:fs";

export function fileGive(processedFiles, desFolder) {
  for (const file of processedFiles) { // process all schemas
    const mySchema = readFileToConvert(file);
    completeSchema(mySchema, desFolder);
  }
}

export async function convertSchema(schema, name) {
  return await compile(schema, name, {
    bannerComment: `/* eslint-disable */
/* !! DO NOT MODIFY THIS FILE BY HAND !!
* It was automatically generated from the schema files.
* If you want to regenerate this file, do 'yarn script scripts/update-schema-types.ts' from the root of the repository
*/
`,
    additionalProperties: false,
  });
}

export async function completeSchema(mySchema, desFolder) {
  const ts = await convertSchema(mySchema, mySchema.name);
  if (desFolder) {
    await writeFile(`${desFolder}/${mySchema.name}.ts`, ts, function (err) { //write actual file
      if (err) throw err;
    });
  } else {
    throw new Error("No destination folder provided");
  }
}
