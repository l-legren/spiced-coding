const https = require("https");
const { twitterKey, twitterSecret } = require("./secrets");

module.exports.getToken = (callback) => {
    // Requesting bearer token from twitter
    // This is an ASYNCHRONOUS process
    // need to wait until it's finished, therefore we need the callback 
    // console.log("getToken is correctly called");
    const creds = `${twitterKey}:${twitterSecret}`;
    const encodedCreds = Buffer.from(creds).toString("base64");

    // console.log(creds, encodedCreds);

    const config = {
        method: "POST",
        host: "api.twitter.com",
        path: "/oauth2/token",
        headers: {
            Authorization: `Basic ${encodedCreds}`,
            "Content-type": "application/x-www-form-urlencoded;charset=UTF-8"
        }
    };

    function httpsRequestCallback(res) {
        if (res.statusCode !== 200) {
            callback(res.statusCode);
            return;
        }
        let body = "";
        res.on("data", chunk => body += chunk);
        res.on("end", () => {
            const parsedBody = JSON.parse(body);
            // console.log("parsedBody: ", parsedBody);
            callback(null, parsedBody.access_token);
        });
    }

    const req = https.request(config, httpsRequestCallback);
    req.end("grant_type=client_credentials");
};

module.exports.getTweets = (bearerToken, callback) => {
    //Once we have our bearerToken we can get the tweets
    // This is also ASYNCHRONOUS process -> Hence another callback
    // WE need to send the bearerToken everytime we make a request
    const configTweet = {
        method: "GET",
        host: "api.twitter.com",
        path:
            "/1.1/statuses/user_timeline.json?screen_name=TheOnion&tweet_mode=extended",
        headers: {
            Authorization: `Bearer ${bearerToken}`,
        },
    };
    
    function tweetsCallback(res) {
        if (res.statusCode !== 200) {
            callback(res.statusCode);
            return;
        }
        let arrayTweets = [];
        res.on("data", chunk => arrayTweets.push(chunk));
        res.on("end", () => {
            console.log("arrayTweets: ", arrayTweets[0]);
        });
            
    }

    const reqTweet = https.request(configTweet, tweetsCallback);
    reqTweet.end();
};

module.exports.filterTweets = (tweets) => {
    // Once we have our tweets we will pass them to this function to filter and sort them into the format we need
    // This is a SYNCHRONOU process
};