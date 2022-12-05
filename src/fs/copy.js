import { getPath } from "../getPath.js";
import {mkdir, readdir, copyFile} from "node:fs/promises";
import path from "node:path";

const copy = async () => {
    const source = getPath(import.meta.url, ['files']);
    const target = getPath(import.meta.url, ['files_copy']);

    try {
        await mkdir(target, {recursive: false});
        const files = await readdir(source);
        files.forEach(file => {
            copyFile(path.join(source, file), path.join(target, file))
        })
        console.log('Folder copying!')
    } catch(err) {
        throw new Error('FS operation failed')
    }
};

await copy();
