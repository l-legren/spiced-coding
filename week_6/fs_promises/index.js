const { stat, readdir } = require("fs").promises;

const logSizes = (path) => {
    const files = readdir(path, { withFileTypes : true }).then(
        (content) => {
            for (let i = 0; i < content.length; i++) {
                if (content[i].isFile()) {                
                    stat(`${path}/${content[i].name}`)
                        .then(
                            (stats) => {
                                console.log(`${path}/${content[i].name}: `, stats.size);
                            }
                        );
                } else {
                    logSizes(`${path}/${content[i].name}`);
                }
            }
        });
    return files;
};

logSizes("./files");
