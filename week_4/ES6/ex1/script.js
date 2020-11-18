function reverseArray(arr) {
    const [...other] = arr;
    // console.log(other === arr);
    const newArray = other.reverse();
    return newArray;
}

var a = ["pizza", 45, "Anne", 322, "Washington"];

console.log(reverseArray(a));
