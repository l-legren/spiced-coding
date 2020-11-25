const express = require("express");
const cookieParser = require("cookie-parser");

const app = express();

app.use(
    express.urlencoded({
        extended: false
    })
);

app.use(cookieParser());

app.use(express.static("./projects"));

app.get("/", (req, res) => {
    console.log(req.cookies.cookies);
    res.cookie("cookies", false);
    if (req.cookies.cookies === "true") {
        res.sendFile(`${__dirname}/index.html`);
    } else {
        res.redirect("/cookies");
    }
});

app.get("/cookies", (req, res) => {
    res.sendFile(`${__dirname}/cookies.html`);
});

app.post("/cookies", (req, res) => {
    console.log("POST request was made to /cookies");
    console.log(req.body);
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

app.listen(8080, () => console.log("Listening to server on port 8080"));