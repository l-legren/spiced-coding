const os = require("os");

console.log(os.cpus().length);

setInterval(() => {
    console.log("Knock, knock");
}, 5000);

