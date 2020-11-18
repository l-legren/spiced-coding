function twoArrays(arr1, arr2) {

    const newArr = [...arr1, ...arr2 ];
    return newArr;
}


var a = [1, "ceviche", 5, "dog", 6, "tacos"];
var b = [43, "pasta", "cats", 12, 3, "Chicago"];

console.log(twoArrays(a, b));