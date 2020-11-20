const fs = require("fs");

const logSizes = (path) => {
    const files = fs.readdir(path, { withFileTypes : true }, (err, content) => {
        if (err) {
            console.log(err);
            return err;
        }
        for (let i = 0; i < content.length; i++) {
            if (content[i].isFile()) {
                // console.log(content[i]);
                console.log(fs.stat(`${path}/${content[i].name}`, (err, stats) => {
                    if (err) {
                        console.log("err: ", err);
                    }
                    if (stats.size === undefined) {
                        return;
                    } else {
                        console.log(`${path}/${content[i].name}: `, stats.size);
                    }
                }));
            } else {
                // console.log("It's a dir");
                logSizes(`${path}/${content[i].name}`);
            }
        }
    });
    return files;
};

logSizes("./files");