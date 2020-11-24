const http = require("http");
const fs = require("fs");
const path = require("path");
const projectList = require("./projectList");

http.createServer((req, res) => {
    
    req.on("error", (err) => console.error(err));
    res.on("error", (err) => console.error(err));

    const method = req.method;

    if (method !== "GET") {
        res.statusCode = 405;
        return res.end();
    }

    // const stream = fs.createReadStream(`${__dirname}/projects/whatevermyprojectsname`);
    // stream.pipe(res);

    const filePath = `${__dirname}/projects${req.url}`;
    // console.log(filePath);

    if (!path.normalize(filePath).startsWith(__dirname + "/projects")) {
        res.statusCode = 403; // forbidden
        console.log("INTRUDER ALERT!!!");
        return res.end();
    }

    fs.stat(filePath, (err, stats) => {
        // error will happen if what user is requesting doesn't exist
        if (err) {
            console.log(err);
            res.statusCode = 404; // not found
            return res.end();
        }

        if (stats.isFile()) {
            console.log("It's a file!!!");

            const contentType = {
                ".html": "text/html",
                ".css" : "text/css",
                ".js" : "text/javascript",
                ".json": "application/json",
                ".gif": "image/gif",
                ".jpg": "image/jpeg",
                ".png": "image/png",
                ".svg": "image/svg+xml"
            };

            res.setHeader("Content-type", `${contentType[path.extname(filePath)]}`);
            const readStreamHtml = fs.createReadStream(filePath);
            readStreamHtml.pipe(res);

            readStreamHtml.on("error", (err) => {
                console.error(err);
                res.statusCode = 500; // Internal server error
                res.end();
            });
        } else {
            console.log("It's a directory!!!");

            if (req.url === "/") {
                res.setHeader("Content-type", "text/html");
                res.writeFile("./", projectList);
                res.end();
            }

            if (req.url.endsWith("/")) {
                const readStreamHtml = fs.createReadStream(filePath + "index.html");
                res.setHeader("Content-type", "text-html");
                readStreamHtml.pipe(res);

                readStreamHtml.on("error", (err) => {
                    console.error(err);
                    res.statusCode = 404;
                    res.end();
                });
            } else {
                // redirect to the request url
                // set the correct header that causes a redirect
                res.setHeader("Location", `${req.url}/`);
                // set the staus code for 302
                res.statusCode = 302;
                // send a response
                res.end();
            }
        }
    });
}).listen("8080", () => console.log("Server is running...."));