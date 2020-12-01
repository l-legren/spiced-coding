const https = require("https");
const { twitterKey, twitterSecret } = require("./secrets");

module.exports.getToken = (callback) => {
    // Requesting bearer token from twitter
    // This is an ASYNCHRONOUS process
    // need to wait until it's finished, therefore we need the callback 
    const creds = `${twitterKey}:${twitterSecret}`;
    const encodedCreds = Buffer.from(creds).toString("base64");

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
    const config = {
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
        let body = "";
        res.on("data", (chunk) => {
            body += chunk;
        });
        res.on("end", () => {
            const parsedBody = JSON.parse(body);
            // console.log("parsedBody: ", parsedBody[0].full_text);
            callback(null, parsedBody);
        });
            
    }

    const req = https.request(config, tweetsCallback);
    req.end();
};

module.exports.filterTweets = (tweets) => {
    // Once we have our tweets we will pass them to this function to filter and sort them into the format we need
    // This is a SYNCHRONOUS process
    const result = [];
    const tweet = {};
    for (let i = 0; i < tweets.length; i++) {
        tweet.text = tweets[i].full_text;
        tweet.url = tweets[i].entities.urls[0].url;
        result.push(tweet);
        // console.log(tweets[i].entities.urls[0].url);
        // console.log("result: ", result);
    }
    return result;
};