import zlip from "zlib";
import { pipeline } from "stream";
import { createReadStream, createWriteStream } from "fs";
import { getPath } from "../getPath.js";

const decompress = async () => {
    const read = createReadStream(getPath(import.meta.url, ['files', 'archive.gz']));
    const write = createWriteStream(getPath(import.meta.url, ['files', 'fileToCompress.txt']));
    
    pipeline(
        read,
        zlip.createUnzip(),
        write,
        (err) => {
            if (err) {
                console.error('Unzip failed', err)
            } else {
                console.error('Unzip succesfully finished!')
            }
        }
    )
};

await decompress();