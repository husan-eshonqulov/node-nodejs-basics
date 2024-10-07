const parseEnv = () => {
    const envs = process.env;
    for (const env in envs) {
        console.log(`RSS_${env}=${envs[env]};`);
    }
};

parseEnv();