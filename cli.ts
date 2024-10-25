import { hideBin } from "npm:yargs/helpers";
import yargs, { Arguments, YargsInstance } from "npm:yargs/yargs";
import { ensureDir } from "https://deno.land/std@0.224.0/fs/ensure_dir.ts";
import process from "node:process";
import { processInput } from "./index.ts";

// Define the shape of argv with a specific type
interface ExhTsArgs {
    inputDir: string;
    output: string;
}

yargs(hideBin(process.argv))
    .command(
        "exh-ts <inputDir>",
        "Generate typescript from schemas",
        (yargs: YargsInstance) => {
            return yargs
                .positional("input", {
                    describe: "The input file/directory to process",
                    type: "string",
                })
                .option("output", {
                    alias: "o",
                    type: "string",
                    describe: "The output directory",
                    default: "./output",
                });
        },
        async (argv: Arguments<ExhTsArgs>) => {
            const inputDir: string = argv.inputDir;
            const outputDir: string = argv.output;

            console.log(`Processing directory: ${inputDir}`);
            console.log(`Output directory: ${outputDir}`);

            await ensureDir(outputDir); // Ensures output directory exists

            processInput(inputDir, outputDir);
            console.log(`Files processed successfully!`);
        },
    )
    .strictCommands()
    .demandCommand(1)
    .parse();
