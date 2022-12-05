import zlip from "zlib";
import { pipeline } from "stream";
import { createReadStream, createWriteStream } from "fs";
import { getPath } from "../getPath.js";

const compress = async () => {

    const read = createReadStream(getPath(import.meta.url, ['files', 'fileToCompress.txt']));
    const write = createWriteStream(getPath(import.meta.url, ['files', 'archive.gz']));

    pipeline(
        read,
        zlip.createGzip(),
        write,
        (err) => {
            if (err) {
            console.error('Compress failed');
            } else {
            console.log('File compressed!');
            }
        }
    );
};

await compress();