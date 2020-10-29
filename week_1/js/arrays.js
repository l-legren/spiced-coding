// Write a function called each that accepts either an object or an array as its first parameter and a callback as its second parameter.

// If the first parameter is an object, it should loop over the object's properties and call the callback for each one. The property value should be the first parameter passed to the callback and the property name should be the second.

// If the first parameter is an array, it should loop over the array's elements and call the callback for each one. The array element should be the first parameter passed to the callback and the index should be the second. //

var each = (arg, callback) => {
    if (Array.isArray(arg)) {
        for (var i = 0; i < arg.length; i++) {
            callback(arg[i], i);
        }
    } else {
        for (var key in arg) {
            callback(arg[key], key);
        }
    }
};

var forArrays = (val, idx) => {
    console.log(val, idx);
};

var forObjects = (value, key) => {
    console.log(value, key);
};

var myObject = {
    a: 1,
    b: 2,
    c: 3,
};

var myArray = [1, 2, 34, 56, -4, -87];

console.log(each(myArray, forArrays));
console.log(each(myObject, forObjects));

// Write a function that takes an array as a parameter and returns a new array containing all of the items that are in the array that was passed in but in reverse order. Unlike the reverse method that all arrays have, this function should leave the original array unchanged. //

var transformArr = (arr) => {
    var newArr = [];
    for (var i = arr.length - 1; i >= 0; i--) {
        newArr.push(arr[i]);
    }
    return newArr;
};

console.log(transformArr(myArray));
console.log(myArray);

// Write a function called getLessThanZero that expects an array of numbers to be passed to it and returns a new array containing only those numbers from the array that was passed in that are less than zero. //

var getLessThanZero = (arr) => {
    var newArr = arr.filter((num) => num < 0);
    return newArr;
};

console.log(getLessThanZero(myArray));
