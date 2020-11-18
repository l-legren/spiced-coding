function* generator(arr) {
    const newArr = [...arr].reverse();

    yield newArr;
}


var a = [1, 3, 5, 7, 9];

console.log(generator());