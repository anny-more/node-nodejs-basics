import {spawn} from "node:child_process";
import { getPath } from "../getPath.js";

const spawnChildProcess = async (args) => {

    const target = getPath(import.meta.url, ['files', 'script.js']);

    const child = spawn('node', [target, ...args]); 

    process.stdin.on('data', (data) => {
        child.stdin.write(data.toString());
    }) 
    
    child.stdin.on('data', (data) => {
        process.stdin.write(data.toString());
    })

    child.stdout.on('data', (data) => {
        process.stdout.write(data.toString());
    })

    child.stderr.on('data', (data) => {
        console.error(data.toString())
    })

    child.on('error', (err) => {
        console.log(err)
    })

};

// Put your arguments in function call to test this functionality
spawnChildProcess( ['--some-arg value1',  '--other 1337', '--arg2 42']);
