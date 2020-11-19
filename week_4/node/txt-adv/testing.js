const story = {
    q: "So where are you spending Christmas, in Berlin or at home",
    answers: {
        berlin: "Good luck with the firecrackers",
        home: {
            q:
                "Oh really? You traveling and exposing to Corona and risking yourself and everyone else?",
            answers: {
                yes:
                    "Well, very good Mr. infectingeveryone. Do not contact me for 20 days.",
                no: {
                    q: "So you are staying in Berlin?",
                    answers: {
                        yes:
                            "You are kind of weird...Anyway, good luck with the firecrackers",
                        no: "I am getting bored with your Christmas plans",
                    },
                },
            },
        },
    },
};

console.log(story.answers.home.answers.no.answers.yes);