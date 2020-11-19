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
        if (storyObj.answers[answer]) {
            if (answer === "berlin") {
                console.log(
                    chalk.bgRed(
                        storyObj.answers[answer]
                    )
                );
                rl.close();
            } else if (answer === "home") {
                rl.question(chalk.bgMagenta(storyObj.answers.home.q), (answer2) => {
                    // console.log(answer2);
                    if (storyObj.answers.home.answers[answer2]) {
                        if (answer2 === "yes") {
                            console.log(
                                chalk.bgRed(
                                    storyObj.answers.home.answers[answer2]
                                )
                            );
                            rl.close();
                        } else {
                            rl.question(chalk.bgMagenta(storyObj.answers.home.answers.no.q), (answer3) => {
                                if (storyObj.answers.home.answers.no.answers[answer3]) {
                                    if (answer3 === "yes") {
                                        console.log(
                                            chalk.red(
                                                storyObj.answers.home.answers.no.answer[answer3]
                                            )
                                        );
                                        rl.close();
                                    } else {
                                        console.log(
                                            chalk.red(
                                                storyObj.answers.home.answers.no.answers[answer3]
                                            )
                                        );
                                        rl.close();
                                    }
                                }
                            });
                        }
                    }
                });
            }
            
        } else {
            console.log(
                "Are we talking the same language at all?"
            );
            askQuestion(storyObj);
        }
    });
}

askQuestion(story);