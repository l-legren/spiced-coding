const readline = require("readline"); // core module, no need to install it
const chalk = require("chalk"); // need to be installed before requiring (npm install chalk)

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const story = {
    q: "So where are you spending Christmas, in Berlin or at home",
    answers: {
        berlin: "Good luck with the firecrackers",
        home: {
            q : "Oh really? You traveling and exposing to Corona and risking yourself and everyone else?",
            answers: {
                yes: "Well, very good Mr. infectingeveryone. Do not contact me for 20 days.",
                no: {
                    q: "So you are staying in Berlin?",
                    answers: {
                        yes: "You are kind of weird...Anyway, good luck with the firecrackers",
                        no: "I am getting bored with your Christmas plans"
                    }
                }
            }
        }
    }
};

function askQuestion(storyObj) {
    rl.question(chalk.bgMagenta(storyObj.q), (answer) => {
        // console.log(answer);
        if (typeof storyObj.answers[answer] === "string") {
            console.log(
                chalk.bgRed(
                    storyObj.answers[answer]
                )
            );
            rl.close();
        } else if (typeof storyObj.answers[answer] === "object") {
            // console.log(storyObj.answers[answer].q);
            askQuestion(storyObj.answers[answer]);
        } else {
            console.log(
                chalk.bgGray(
                    "Are we talking the same language at all?"
                )
            );
            askQuestion(storyObj);
        }
    });
}

askQuestion(story);