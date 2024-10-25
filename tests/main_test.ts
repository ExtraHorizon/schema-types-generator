import { assertEquals } from "@std/assert";
import { readFileToConvert } from "../readJSON.mjs";
import { walk } from "jsr:@std/fs/walk";

Deno.test("convert file test", () => {
  const result = readFileToConvert("./tests/Data/example-schema.json");
  assertEquals(result, expectedConversion);
});

Deno.test("convert dir test", async () => {
  for await (const dirEntry of walk("./tests/Data/SchemaForDirTest")) {
    if (dirEntry.path.endsWith(".json")) {
      assertEquals(readFileToConvert(dirEntry.path), expectedConversion);
    }
  }
});

/*
Deno.test("compareTSOutput", async () =>{
  //WIP
})
*/

const expectedConversion = {
  name: "blood-pressure-measurement",
  description: "Blood pressure measurement",
  statuses: { created: {} },
  creationTransition: {
    type: "manual",
    toStatus: "created",
    conditions: [],
    actions: [],
  },
  properties: {
    systolic: { type: "number", description: "Systolic pressure in mmHg" },
    diastolic: { type: "number", description: "Diastolic pressure in mmHg" },
    timestamp: {
      type: "string",
      format: "date-time",
      description: "Timestamp when the measurement was taken",
    },
  },
};

const expectedTSConversion = "tests/Data/blood-pressure-measurement.ts";
