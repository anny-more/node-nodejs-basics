import {createWriteStream} from "node:fs";
import { getPath } from "../getPath.js";

const write = async () => {
    const target = getPath(import.meta.url, ['files', 'fileToWrite.txt']);

    try {
        const write = createWriteStream(target, {encoding: 'utf8'});
        process.stdin.pipe(write);
    } catch(err) {
        throw err
    }

};

await write();