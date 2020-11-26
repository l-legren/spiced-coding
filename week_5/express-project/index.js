const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const { projectList } = require("./projectList");
const basicAuth = require("basic-auth");

const auth = function (req, res, next) {
    const creds = basicAuth(req);
    if (!creds || creds.name != "discoduck" || creds.pass != "opensesame") {
        res.setHeader(
            "WWW-Authenticate",
            'Basic realm="Enter your credentials to see this stuff."'
        );
        res.sendStatus(401);
    } else {
        next();
    }
};

app.use(
    express.urlencoded({
        extended: false
    })
);

app.use(cookieParser());

app.use(express.static("./projects"));

app.get("/", (req, res) => {
    // console.log(req.cookies.cookies);
    res.cookie("cookies", false);
    if (req.cookies.cookies === "true") {
        res.send(
            `<!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Document</title>
            </head>
            <body>
                <h1>Having some cookies fun</h1>
                <h2>It's gonna be cooklicious 😁</h2>
                $projectList()
            </body>
            </html>`
        );
    } else {
        res.redirect("/cookies");
    }
});

app.get("/cookies", (req, res) => {
    res.sendFile(`${__dirname}/cookies.html`);
});

app.post("/cookies", (req, res) => {
    // console.log("POST request was made to /cookies");
    // console.log(req.body);
    const { cookies } = req.body;
    if (cookies) {
        res.cookie("cookies", true);
        res.redirect("/");
    } else {
        res.cookie("cookies", false);
        res.send(
            "<h1>No cookies no site</h1><p>🛑 Without cookies you can not navigate the site 🛑</p>"
        );
    }
});


app.get("/connect4", (req, res) => {
    app.use(auth);
    res.sendFile(`${__dirname}/projects/connect4/index.html`);
});

app.listen(8080, () => console.log("Listening to server on port 8080"));