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
    res.sendFile(`${__dirname}/index.html`);
});

app.get("/cookies", (req, res) => {
    // res.sendFile(`${__dirname}/cookies.html`);
    res.send(`
        <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>This site use cookies</h1>
    <p>We collect cookies and you won't get through until you accept it 🥴</p>
    <input type="checkbox" name="cookies">Do you accept cookies???</input>
    <input type="submit" value="submit">
</body>
</html>
    `);
});

app.post("/cookies", (req, res) => {
    console.log("Cookies request made");
    console.log(req.body);
    res.send(
        `<h1>You are now registered</h1>`
    );
});

app.listen(8080, () => console.log("Listening to server on port 8080"));