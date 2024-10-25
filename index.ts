import process from "node:process";
import { hideBin } from 'npm:yargs/helpers';
import Yargs from 'npm:yargs/yargs';
import { fileGive } from "./fileconverter.mjs";
import { walk } from "jsr:@std/fs/walk";

async function processInput(){
    let files: string[] = [];
    const argv = Yargs(hideBin(process.argv)).parse()

    if(argv.filepath && argv.dirpath){
        throw new Error("No filepath given")
    }
    if (argv.filepath){
        files = [argv.filepath];
    }
    else if (argv.dirpath){
        
        for await (const dirEntry of walk(argv.dirpath)) {
            if(dirEntry.path.endsWith(".json")){
                files.push(dirEntry.path)
            }
        }
    }
    fileGive(files);
}

processInput();