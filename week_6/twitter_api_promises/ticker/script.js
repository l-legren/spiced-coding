(function () {

    
    function ticker() {
        var ticker = $("#ticker");
        var headlines = ticker.children(".headlines");
        var links = headlines.children("a");
        var curX = headlines.offset().left;
        // var headlinesWidth = headlines.width();
        // var tickerWidth = ticker.width();
        
        // check whats fetching!
        var linkWidth = links.eq(0).width();
        var animId;
        
        $.ajax({
            type: "GET",
            url: "/data.json",
            success: function (response) {
                for (var i = 0; i < response.length; i++) {
                    links.eq(i).html(response[i].text);
                    links.attr("href", response[i].link);
                }     
            }
        });

        // console.log(curX);
        // console.log(linkWidth);

        headlines.on("mouseenter", function (){
            cancelAnimationFrame(animId);
        });

        headlines.on("mouseleave", function(){
            moveHeadlines();
        });

        moveHeadlines();

        function moveHeadlines() {
            curX --;
            if (curX < -linkWidth) {
                curX += linkWidth;
                // headlines.appendChild(links[0]);
                headlines.append(links.eq(0));
                // linkWidth = links[0].offsetWidth;
                linkWidth = links.eq(0).width();
            }

            headlines.offset().left = curX + "px";
            animId = requestAnimationFrame(moveHeadlines);
        }
    }

    ticker();

})();
