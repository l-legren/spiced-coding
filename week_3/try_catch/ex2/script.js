(function () {
    
    // console.log("sanityyyy");
    
    var numGerman = {
        1: "eins",
        2: "zwei",
        3: "drei",
        4: "vier",
        5: "fünf",
        6: "sechs",
        7: "sieben",
        8: "acht",
        9: "neun",
        10: "zehn"
    };

    function askForNumber() {
        var num = prompt("Please enter a number between 1 and 10");
        if (num >= 1 && num <= 10 && num == parseInt(num)) {
            return num;
        }
        throw new Error("Bad number");
    }

    function translateNumberToGerman () {
        try {
            var numero = askForNumber();
            // console.log(numero);
            console.log(numGerman[numero]);
        } catch(e) {
            console.log("That's not a number between 1 and 10!");
        }
    }

    translateNumberToGerman();

})();

