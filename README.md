# schema-types-generator (BETA)

This tool is still in early development and is not yet ready for production use.
This is a tool to generate TypeScript types from the data service schema files.
  

example use:

deno run --allow-all cli.ts exh-ts ./tests/Data/exampledirschema //wil produce a dir ./output with all of the ts files inside
..or with dir provided
deno run --allow-all cli.ts exh-ts ./tests/Data/exampledirschema -o ./dirForSchemas // will create a directory dirForSchemas and put all of the ts files inside

deno run --allow-all cli.ts exh-ts --help
will output 

```
deno.exe exh-ts <inputDir>

Generate typescript from schemas

Positionals:
  input  The input file/directory to process                            [string]

Options:
      --help     Show help                                             [boolean]
      --version  Show version number                                   [boolean]
  -o, --output   The output directory             [string] [default: "./output"]
```
