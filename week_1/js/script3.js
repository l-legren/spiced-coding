// Write a constructor called Rectangle that accepts two numbers (width and height) as parameters. Rectangle instances should have a method called getArea that returns the instance's width multiplied by its height. Write another constructor called Square that accepts one number (which will serve as both width and the height) as a parameter. Instances of Square should also have a getArea method but you should not rewrite the getArea function you wrote for Rectangle. Square instances should use the same getArea method that Rectangle instances do. //


function Rectangle(width, height) {
    this.width= width;
    this.height = height;
    this.getArea = function() {
        var area = this.height * this.width;
        return area;
    }
}

function Square(size) {
    Rectangle.call(this, size, size);
}

// console.log(Square.prototype.constructor);

// var sq1 = new Square(2);
// var rec1 = new Rectangle(2, 3);

// console.log(sq1.getArea());

// Write a function called invertCase that expects a string as a parameter. This function should return a new string with all the same characters as the string that was passed in but with the cases of the alphabetic characters switched. Uppercase characters should become lowercase and lowercase letters should become uppercase. Characters that are not alphabetic should not change. The toUpperCase and toLowerCase methods that all strings have will come in handy here. //

var invertCase = function (arg) {
    var newString = "";
    for (var i = 0; i < arg.length; i++) {
        if (arg[i] == arg[i].toUpperCase()) {
            newString += arg[i].toLowerCase();
        } else if (arg[i] == arg[i]) {
            newString += arg[i].toUpperCase();
        }
    }
    return newString;
}

// console.log(invertCase("HelloooooOOO!!!"));

// BONUS EXERCISE 

// Write a constructor called Countdown that accepts a single argument - the number of seconds to count down. It should be possible to call the start method of instances of Countdown to initiate the countdown. Once the countdown starts, it should count down to zero starting with the number that was passed to the constructor and logging each number to the console with a one second delay.

// STILL NOT WORKING THE CODE!!

var Countdown = function(seconds) {
    this.start = function() {
        while (seconds >= 0) {
            setTimeout(
                (function(seconds) {
            console.log(seconds);
            seconds -=1;}), 1000)
        }
    }
}

// var seg = new Countdown(7);

// console.log(seg.start());