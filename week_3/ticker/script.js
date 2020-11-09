(function () {
    ticker("ticker1", -1);

    ticker("ticker2", 1);

    function ticker(id, step) {
        // var ticker = document.getElementById(id);
        var ticker = $(id);
        // var headlines = ticker.querySelector(".headlines");
        var headlines = ticker.children(".headlines");
        // var links = headlines.getElementsByTagName("A");
        var links = headlines.children("a");
        // var curX = headlines.offsetLeft;
        var curx = headlines.offset().left;
        // var headlinesWidth = headlines.offsetWidth;
        var headlinesWidth = headlines.width();
        // var tickerWidth = ticker.offsetWidth;
        var tickerWidth = ticker.width();
        var linkWidth =
            step < 0
                ?  links.eq(0).width() // links[0].offsetWidth //
                :  links.eq(links.length - 1).width(); // links[links.length - 1].offsetWidth; //;
        var animId;

        // headlines.addEventListener("mouseenter", function (e) {
        //     cancelAnimationFrame(animId);
        // });

        headlines.on("mouseenter", function (e){
            cancelAnimationFrame(animId);
        });

        // headlines.addEventListener("mouseleave", function () {
        //     moveHeadlines();
        // });

        headlines.on("mouseleave", function(e){
            moveHeadlines();
        });

        moveHeadlines();

        function moveHeadlines() {
            curX += step;
            if (step < 0 && curX < -linkWidth) {
                curX += linkWidth;
                // headlines.appendChild(links[0]);
                headlines.append(links.eq(0));
                // linkWidth = links[0].offsetWidth;
                linkWidth = links.eq(0).width();
            }
            if (step > 0 && curX + headlinesWidth > tickerWidth + linkWidth) {
                curX -= linkWidth;
                // headlines.insertBefore(links[links.length - 1], links[0]);
                headlines.before(links.eq(links.length - 1), links.eq(0));
                // linkWidth = links[links.length - 1].offsetWidth;
                linkWidth = links.eq(links.length - 1).width();
            }
            headlines.style.left = curX + "px";
            animId = requestAnimationFrame(moveHeadlines);
        }
    }
})();
