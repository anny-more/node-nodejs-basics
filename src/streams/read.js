import {createReadStream} from "node:fs";
import { getPath } from "../getPath.js";

const read = async () => {
    const target = getPath(import.meta.url, ['files', 'fileToRead.txt']);
    try {
        const stream = createReadStream(target, {encoding: 'utf8'});
        stream.pipe(process.stdout);
    } catch(err) {
        throw err
    }
};

await read();