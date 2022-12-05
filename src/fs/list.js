import { getPath } from "../getPath.js";
import {readdir} from "node:fs/promises";

const list = async () => {
    
    const target = getPath(import.meta.url, ['files']);
    
    try {
        const files = await readdir(target);
        console.log('List of files:');
        console.log(files);

    } catch(err) {
        throw new Error('FS operation failed')
    }

};

await list();