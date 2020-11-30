const express = require("express");
const app = express();
const { getToken, getTweets, filterTweets } = require("./twitter.js");

app.use(express.static("./ticker"));

app.get("/data.json", (req, res) => {
    console.log("request made for data.json");
    // NEXT STEPS

    // 1. Get our bearer token from twitter
    getToken((err, bearerToken) => {
        if (err) {
            console.log("err getting bearer token: ", err);
            return;
        }
        // console.log("bearerToken: ", bearerToken);
        // 2. Use this bearer token to get tweets from twitter
        getTweets(bearerToken, (err, tweets) => {
            if (err) {
                console.log("err getting tweets: ", err);
                return;
            }
            // console.log("tweets: ", tweets);
            // 3. Filter them into the format you need
            const filteredTweets = filterTweets(tweets);
            // 4. Send data back as JSON
            // res.json(filteredTweets);
        });
    });
});


app.listen(8080, () => console.log("Server listening...port 8080"));