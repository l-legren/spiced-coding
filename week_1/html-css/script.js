(function() {
    console.log("Sanity Check!!!");
})();

var menu = document.getElementById("menu");
var overlay = document.getElementById("overlay");
var sideBar = document.getElementById("side-bar");
var close = document.getElementById("x");

console.log(overlay);
console.log(menu);


menu.addEventListener("click", function() {
    console.log("clickin me!!");
    overlay.style.visibility = "visible";
    overlay.classList.add("on");
});

close.addEventListener("click", function() {
    console.log("I am closinnggg!");
    overlay.classList.remove("on");
    overlay.style.visibility = "hidden";
});