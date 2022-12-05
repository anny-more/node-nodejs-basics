import path from 'node:path';
import { fileURLToPath } from 'node:url';

export const getPath = (url, pathToFile) => {
    const fileName = fileURLToPath(url);
    const dirName = path.dirname(fileName);
    return path.join(dirName, ...pathToFile)
} 