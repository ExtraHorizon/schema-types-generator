import { compile } from "npm:json-schema-to-typescript";
import { readFileToConvert } from "./readJSON.mjs";
import { writeFile } from "node:fs";

export function fileGive(processedFiles, desFolder = "") {
  for (const file of processedFiles) {
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

async function completeSchema(mySchema, desFolder = null) {
  const ts = await convertSchema(mySchema, mySchema.name);
  console.log(`writing ${desFolder}/${mySchema.name}.ts`);
  console.log(`Writing ${mySchema.name}.ts...`);
  if (desFolder) {
    await writeFile(`${desFolder}/${mySchema.name}.ts`, ts, function (err) {
      if (err) throw err;
    });
  } else {
    await writeFile(`${mySchema.name}.ts`, ts, function (err) {
      if (err) throw err;
    });
  }
}
