import { getPath } from "../getPath.js";
import {unlink} from "node:fs/promises";

const remove = async () => {

    const target = getPath(import.meta.url, ['files', 'fileToRemove.txt'])

    try {
        await unlink(target);
        console.log('File deleted!')

    } catch(err) {
        throw new Error('FS operation failed');
    }

};

await remove();