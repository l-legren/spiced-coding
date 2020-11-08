(function() {
    // console.log("Hey, this is a kitty Carousel!");

    var kitty = document.querySelectorAll(".kitty-container img");
    var dots = document.getElementsByClassName("dot");
    var doton;
    var timer;
    var isTransitioning = false;

    timer = setTimeout(function() {moveKitties;}, 3000);

    function moveKitties(n, userClick) {
        
        for (var i = 0; i < dots.length; i++) {
            dots[i].addEventListener("click", function (e) {
                for (var j = 0; j < dots.length; j++) {
                    if (dots[j] === e.target) {
                        console.log(e.target);
                    }
                }
            });
        }

        if (n === 3) {
            kitty[3].classList.remove("onscreen");
            kitty[3].classList.add("offscreen");
            kitty[0].classList.add("onscreen");
            doton = document.querySelector(".on");
            doton.classList.remove("on");
            dots[0].classList.add("on");
            doton = document.querySelector(".on");
            setTimeout(function () {
                moveKitties(0);
            }, 3000);
        } else {
            kitty[n].classList.remove("onscreen");
            kitty[n].classList.add("offscreen");
            kitty[n+1].classList.add("onscreen");
            doton = document.querySelector(".on");
            doton.classList.remove("on");
            dots[n+1].classList.add("on");
            doton = document.querySelector(".on");
            n++;
            setTimeout(function () {
                moveKitties(n);
            }, 3000);
        }
    }

    document.addEventListener("transitionrun", function() {
        isTransitioning = true;
    });

    // need to check this !!!!!!!!!!!!
    document.addEventListener("transitionend", function(e) {
        isTransitioning = false;
        e.target.classList.remove("offscreen");
    });
    
    setTimeout(moveKitties(0), 3000);
})();