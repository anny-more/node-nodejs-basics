const parseEnv = () => {

    try {
        const envParsed = Object.entries(process.env).reduce((acc, variable) => {
            const [key, value] = variable;
            if (key.startsWith('RSS_')) {
                acc.push(`${key}=${value}`);
            }
            return acc
        }, []);

        console.log(envParsed.join('; '));

    } catch(err) {
        throw err
    }
};

parseEnv();