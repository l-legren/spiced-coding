console.log("Sanity Check!!!");

var square = document.getElementById("element");

console.log(square.style.left);

document.body.addEventListener("mousemove", function (e) {
    // console.log(e);
    square.style.top = e.clientX + "px";
    square.style.left = e.clientY + "px";
});
