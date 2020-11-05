(function() {
    // console.log("Hey, this is a kitty Carousel!");

    var kitty = document.querySelectorAll(".kitty-container img");
    // console.log(kitty);

    function moveKitties() {
        kitty[0].classList.remove("onscreen");
        kitty[0].classList.add("offscreen");

        kitty[1].classList.add("onscreen");
        setTimeout(moveKitties, 3000);
    }

    document.addEventListener("transitionend", function(e) {
        if (kitty[0].style.right == 0) {
            console.log(e);
            // console.log("transition ended!");
            kitty[0].classList.remove("offscreen");
            
        }
    });
    
    setTimeout(moveKitties, 3000);

})();