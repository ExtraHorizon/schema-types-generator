import { fileGive } from "./fileconverter.mjs";
import { walk } from "jsr:@std/fs/walk";

export async function processInput(inputDir: string, outputDir: string) {
    let files: string[] = [];
    if (!inputDir) {
        throw new Error("No path given");
    }

    try {
        const stats = await Deno.stat(inputDir);
        if (stats.isFile) {
            files = [inputDir];
        } else if (stats.isDirectory) {
            for await (const dirEntry of walk(inputDir)) {
                if (dirEntry.path.endsWith(".json")) {
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
