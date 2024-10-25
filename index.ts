import { fileGive } from "./fileconverter.mjs";
import { walk } from "jsr:@std/fs/walk";

export async function processInput(input: string, outputDir: string) {
    let files: string[] = [];
    if (!input) {
        throw new Error("No path given");
    }

    try {
        const stats = await Deno.stat(input); //check if input is a file or a directory
        if (stats.isFile) {
            files = [input];
        } else if (stats.isDirectory) {
            for await (const dirEntry of walk(input)) { //loop through files recursively
                if (dirEntry.path.endsWith(".json")) { // only collect .json files
                    files.push(dirEntry.path);
                }
            }
        } else {
            throw new Error("Provided path is neither a file nor a directory");
        }
    } catch (error) {
        throw error;
    }
    fileGive(files, outputDir);
}
