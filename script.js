// Exercise 1 //

function logType(arg) {
    if (typeof arg === "undefined") {
        console.log("undefined!");
    } else if (!arg && arg !== false && !isNaN(arg)) {
        console.log("null!");
    } else if (arg > Math.pow(2, 53)) {
        console.log("bigint!");
    } else if (typeof arg === "number" && !isNaN(arg)) {
        console.log("number!");
    } else if (typeof arg === "string") {
        console.log("string!");
    } else if (arg === true || arg === false) {
        console.log("boolean!");
    } else if (typeof arg === "function") {
        console.log("function!");
    } else if (Array.isArray(arg)) {
        console.log("array!");
    } else if (typeof arg === "object") {
        console.log("object!");
    } else if (isNaN(arg)) {
        console.log("not a number!");
    } else if (typeof arg === "symbol") {
        console.log("I have no idea!");
    }
}

var x;

//console.log(isNaN(x));
//console.log(Array.isArray(x));
//console.log(typeof x);
//console.log(logType(x));

// Exercise 2 //

var a = {
    Berlin: "Germany",
    Paris: "France",
    "New York": "USA",
};

const b = {};

for (let key in a) {
    b[a[key]] = key;
}

console.log(b);

// Exercise 3 //

var d = 10;

while (d >= 1) {
    console.log(d);
    d--;
}
