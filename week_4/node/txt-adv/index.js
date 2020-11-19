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
        home: "Oh really? So easy, how much did you blackmail the landlord?"
    },
};

function askQuestion(storyObj) {
    rl.question(chalk.bgMagenta("It is weekend yet?"), (answer) => {
        console.log(answer);
        if (answer === "no") {
            console.log(
                chalk.cyan(
                    "Oh I am soooooo sorry for you, tinies fiddle playing some sadness...."
                )
            );
            rl.close();
        } else {
            console.log(
                "That is not the truth and you know it....try again my friend"
            );
            askQuestion(storyObj);
        }
    });
}

askQuestion(story);