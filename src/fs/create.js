import {writeFile} from 'node:fs/promises';
import { getPath } from '../getPath.js';

const create = async () => {
    const target = getPath(import.meta.url, ['files', 'fresh.txt']);
    const content = 'I am fresh and young';

    try {
        await writeFile(target, content, {encoding: 'utf8', flag: 'wx'});
        console.log('File created!')
    } catch(err) {
        throw new Error('FS operation failed')
    }
};

await create();