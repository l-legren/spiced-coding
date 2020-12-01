const { stat, readdir } = require("fs").promises;

const logSizes = (path) => {
    return readdir(path, { withFileTypes : true }).then(
        (content) => {
            var promisedArray = [];
            for (let i = 0; i < content.length; i++) {                
                var mySinglePromise = stat(`${path}/${content[i].name}`)
                    .then(
                        (stats) => {
                            if (content[i].isFile()) {
                                console.log(
                                    `${path}/${content[i].name}: `,
                                    stats.size
                                );
                            } else {
                                return logSizes(
                                    `${path}/${content[i].name}`
                                );
                            }
                        }
                    );
                promisedArray.push(mySinglePromise);
            }
            return Promise.all(promisedArray);
        })
        .catch(err => console.error(err));
};

logSizes("./files").then(() => {
    console.log("done!");
});
