import { getPath } from "../getPath.js";
import fs from "node:fs/promises";

const rename = async () => {
    const sourse = getPath(import.meta.url, ['files', 'wrongFilename.txt']);
    const target = getPath(import.meta.url, ['files', 'properFilename.md']);

    try {
        await fs.rename(sourse, target);
        console.log('File renamed!');

    } catch(err) {
        throw new Error('FS operation failed');
    }

};

await rename();