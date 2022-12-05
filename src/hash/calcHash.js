import {createHash} from "crypto";
import { readFile } from "node:fs/promises";
import { getPath } from "../getPath.js";

const calculateHash = async () => {
    const target = getPath(import.meta.url, ['files', 'fileToCalculateHashFor.txt']);

    try {
        const content = await readFile(target);
        const hash = createHash('sha256');
        console.log(hash.update(content).digest('hex'))
    } catch(err) {
        throw err
    }
};

await calculateHash();