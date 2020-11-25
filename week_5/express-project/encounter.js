const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");

console.log(cookieParser);

app.use(
    express.urlencoded({
        extended: false
    })
);

app.use((req, res, next) => {
    console.log(`a ${req.method} request was made to the ${req.url} route`)
    next();
});

app.use(cookieParser());

app.use(express.static("./express-project"));

app.get("/", (req, res) => {
    res.cookie("first-cookie", "exciting!!!");
    res.cookie("authenticated", true);
    console.log("re.cookies: ", req.cookies);
    res.send("Hey hey hey");
});

app.get("/about", (req, res) => {
    res.sendFile(`${__dirname}/index.html`);
});

app.get("/users/:username/:postId", (req, res) => {
    console.log("req.params: ", req.params);
    const { username, postId } = req.params;
    res.send(`
    <h1>This is the page of ${username}</h1>
    <h2>You have this Id: ${postId}
    `);
});

app.get("/private", (req, res) => {
    if (req.cookies.authenticated) {
        res.send(`
            <h1>TOP SECRET STUFF</h1>
            <h2>This is super secret 🛑</h2>
        `);
    } else {
        res.redirect("/");
    }
});

app.post("/register", (req, res) {
    res.send(`
        <h2>Please tell us about yourself</h2>
        <form method='POST' style="display: flex; flex-direction: column; justify-content: space-between; width: 40%; height: 50%;">
            <input type='text' name='firstname' placeholder='First Name' autocomplete='off'>
            <input type='text' name='lastname' placeholder='Last Name' autocomplete='off'>
            <div>
                <span>How old are you? </span><input type="number" name="age">
            </div>
            <div>
                <input type="checkbox" name="subscribe"><span>Would you like to receive our newsletter?</span>
            </div>
            <button> submit </submit>
        </form>
    `);
});

app.listen(8080, () => {
    console.log("Server running....");
});