import {cpus} from 'node:os';
import { Worker } from 'node:worker_threads';

const performCalculations = async () => {

    const increment = cpus().length;

    const result = await Promise.allSettled(Array.from({length: increment}, (_, index) => index + 10).map((n) => {
            return new Promise((resolve, reject) => {
                const worker = new Worker('./src/wt/worker.js', {workerData: n});
                worker.on('message', (msg) => resolve(msg));
                worker.on('error', (err) => reject(null))
            })
        }));
        result.map(obj => {
            return {
            status: obj.status,
            value: obj.status == 'fulfilled'? obj.value : null 
        }})
    console.log(result);
};

await performCalculations();