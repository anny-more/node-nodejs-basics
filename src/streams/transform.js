import { Transform } from "stream";
import { EOL } from 'os';

const transform = async () => {
    const transforming = new Transform({
        transform(chunk, encoding, callback) {
            let reverseStr = chunk.toString();
            reverseStr = reverseStr.split('');
            reverseStr = reverseStr.reverse().join('') + EOL;
            callback(null, reverseStr)
        }
    })
    process.stdin.pipe(transforming).pipe(process.stdout);

};

await transform();