const parseArgs = () => {

    try {
        const argParsed = process.argv.slice(2).join(' ').split('--').slice(1).map(arg => {
            const [name, value] = arg.split(' ');
            return `${name} is ${value}`;
        })
     
        console.log(argParsed.join(', '));

    } catch(err) {
        throw err
    }
    
};

parseArgs();