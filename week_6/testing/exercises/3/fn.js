
module.exports.fn = function fn(input) {
    
    function reverseString(str) {
        let arrayOfLetters = str.split("");
        console.log(arrayOfLetters)
        var newString = "";
        for (let i = arrayOfLetters.length - 1; i >= 0; i--) {
            newString += arrayOfLetters[i];
        }
        return newString;
    }

    if (typeof input == "string") {
        console.log(typeof input == "string");
        return reverseString(input);
    } 

    else if (Array.isArray(input)) {
        const newArray = [];
        for (let i = 1; i < input.length; i++) {
            newArray[0] = reverseString(input[0]);
            input[i] = null;
            newArray.push(input[i]);
            return newArray;
        }
        
    } else if (typeof input != "string" || !Array.isArray(input)) {
        return null;
    }
};