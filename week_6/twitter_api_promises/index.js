const express = require("express");
const app = express();
const { getToken, getTweets, filterTweets } = require("./twitter.js");

app.use(express.static("./ticker"));

app.get("/data.json", (req, res) => {
    getToken()
        .then((bearerToken) => {
            // console.log(bearerToken);
            return Promise.all([
                getTweets(bearerToken, "guardian"),
                getTweets(bearerToken, "SPIEGEL_english"),
                getTweets(bearerToken, "washingtonpost")
            ]); 
        })
        .then((tweets) => {
            
            let guardian = tweets[0];
            let spiegel = tweets[1];
            let washington = tweets[2];
            
            let sourcesTogether = [...guardian, ...spiegel, ...washington];
            let sourcesSorted = sourcesTogether.sort((a,b) => {
                return new Date(b.created_at) - new Date(a.created_at);
            });

            const filteredTweets = filterTweets(sourcesSorted);
            console.log(filteredTweets);
            res.json(filteredTweets);
        })
        .catch((err) => {
            console.log(err);
        });
});

app.listen(8080, () => console.log("Server listening...port 8080"));