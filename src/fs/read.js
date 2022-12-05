import {getPath} from "../getPath.js";
import {readFile} from "node:fs/promises";

const read = async () => {
    const target = getPath(import.meta.url, ['files', 'fileToRead.txt']);

    try {
        const content = await readFile(target, 'utf8')
        console.log(content);

    } catch(err) {
        throw new Error('FS operation failed')
    }
};

await read();