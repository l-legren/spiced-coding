(function () {
    console.log("Sanity Check!!!");
    var modal = $(".modal-dialog .container");

    function bringModal() {
        modal.css("zIndex", 5);
        $(document).addClass("modalon");
    }

    $(document).ready(function () {
        console.log("Ready");
        setTimeout(bringModal, 1000);
    });

})();

var menu = document.getElementById("menu");
var overlay = document.getElementById("overlay");
var sideBar = document.getElementById("side-bar");
var close = document.getElementById("x");

console.log(overlay);
console.log(menu);

menu.addEventListener("click", function () {
    console.log("clickin me!!");
    overlay.classList.remove("off");
    overlay.style.visibility = "visible";
    overlay.classList.add("on");
});

close.addEventListener("click", function () {
    console.log("I am closinnggg!");
    // overlay.classList.add("off");
    overlay.classList.remove("on");
    overlay.style.visibility = "hidden";
});

