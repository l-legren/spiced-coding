const fs = require("fs");

const mapSizes = (path) => {
    const filesSync = fs.readdirSync(path, { withFileTypes: true } );
    const obj = {};
    // console.log(filesSync);
    for (let i = 0; i < filesSync.length; i++) {
        if (filesSync[i].isFile()) {
            obj[filesSync[i].name] = fs.statSync(
                `${path}/${filesSync[i].name}`
            ).size;
            // console.log(obj);
        } else {
            obj[filesSync[i].name] = mapSizes(`${path}/${filesSync[i].name}`);
        }
    }
    return obj;
};

const jsonObj = JSON.stringify(mapSizes("./files"), null, 4);

console.log(__dirname);

fs.writeFileSync(`${__dirname}/files.json`, jsonObj);
