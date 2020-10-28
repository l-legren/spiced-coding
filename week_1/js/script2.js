// Write a function that takes any number of numbers as arguments and returns the sum of those numbers. //

var add = function () {
    var result = arguments[0];
    for (var i = 1; i < arguments.length; i++) {
        result += arguments[i];
    }
    return result;
};

// console.log(add(5, 12, 13));
// console.log(add(5, 12, 13, 25, 30));

// Write a function that takes another function as an argument. It should wait 1.5 seconds and then run the function that was passed in. //

var waitThenRun = function (fn) {
    console.log("Hi Guys!");
    setTimeout(fn, 1500);
};

var ciaoGuys = function () {
    console.log("Ciao guys, see'ya!");
};

// console.log(waitThenRun(ciaoGuys));

// Write a function that expects a number as an argument. If the value that is passed in is less than 0, equal to 0, or not a number, the function should return the string 'ERROR'. If the number that is passed in is greater than or equal to 1000000 it should sivar toTheInfinite = (num)mply {} return the number. Otherwise it should multiply the number by 10 however many times it takes to get a number that is greater than or equal to 1000000 and return that. //

var toTheInfinite = function (num) {
    if (typeof num !== "number" || num <= 0) {
        return "ERROR";
    } else if (num >= Math.pow(10, 6)) {
        return num;
    } else {
        num *= 10;
        return toTheInfinite(num);
    }
};

// console.log(toTheInfinite(43));

// Write a function that returns a function that can be called repeatedly and passed a number each time. Each time it is called it should return the sum of the number that is passed in and all other numbers that were passed in previous calls. That is, it should return the sum of all the numbers that were ever passed to it. //

var getTotaler = function () {
    var total = 0;
    return function totaler(num) {
        return (total += num);
    };
};

var totaler = getTotaler();

console.log(totaler(2));
console.log(totaler(7));
