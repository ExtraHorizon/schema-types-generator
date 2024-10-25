# schema-types-generator (BETA)

This tool is still in early development and is not yet ready for production use.
This is a tool to generate TypeScript types from the data service schema files.
  

example use:

deno --allow-all index.ts --filepath=./tests/Data/example-schema.json 
//will translate example-schema.json and place it in the same folder as index.ts (maybe create default folder where files are stored if no destination is given?)

deno --allow-all index.ts --dirpath=./tests/Data/exampledirschema --destination=./tests/Data
//will translate all files in the directory exampledirschema and place the new ones in ./tests/Data
