// Write a constructor called Rectangle that accepts two numbers (width and height) as parameters. Rectangle instances should have a method called getArea that returns the instance's width multiplied by its height. Write another constructor called Square that accepts one number (which will serve as both width and the height) as a parameter. Instances of Square should also have a getArea method but you should not rewrite the getArea function you wrote for Rectangle. Square instances should use the same getArea method that Rectangle instances do. //


// function Rectangle(width, height) {
//     this.width= width;
//     this.height = height;
//     this.getArea = function() {
//         var area = this.height * this.width;
//         return area;
//     }
// }

// function Square(num) {
//     this.side = num;
//     this.getArea = Rectangle.prototype.getArea;
// }

// console.log(Square(3).getArea());

