(function () {
    var nextUrl;

    $("#submit-button").on("click", function (e) {
        var userInput = encodeURIComponent($("#input").val());
        var albumOrArtist = $("select").val();
        
        $.ajax({
            method: "GET",
            url: "https://spicedify.herokuapp.com/spotify",
            data: {
                query: userInput,
                type: albumOrArtist
            },
            success: function (response) {
                response = response.artists || response.albums;

                if (location.search.indexOf("scroll=infinite") > -1) {
                    checkScrollPosition();
                }

                if (response.items[0]) {
                    $("#results-found").html('Results for "' + userInput + '"');
                    $("#results-container").addClass("frame-results");
                } else {
                    $("#results-found").html("No results found");
                }
                
                $("#results-container").html(showResults(response));

                $("#results-container").append(
                    '<div id="button-container"><button class="button" id="more">More</button></div>'
                );

                setNextUrl(response.next);
                
                $("#more").on("click", function () {
                    $.ajax({
                        url: nextUrl,
                        success: showResults,
                    });
                });
            }
        });
    });

    function checkScrollPosition() {

        setTimeout(function() {
            if (
                $(window).height() + $(document).scrollTop() 
                >= $(document).height() - 200 
            ) {
                console.log("Bottom was reached!");
                $("#button-container").remove();
                $.ajax({
                    // method: "GET",
                    url: nextUrl,
                    success: function (newResponse) {
                        newResponse = newResponse.artists || newResponse.albums;
                        $("#results-container").append(showResults(newResponse));
                        checkScrollPosition();
                    },
                });
            } else {
                checkScrollPosition();
            }    
        }, 500);
    }

    function setNextUrl(next) {
        if (next) {
            nextUrl = next.replace(
                "https://api.spotify.com/v1/search",
                "https://spicedify.herokuapp.com/spotify"
            );
        }
    }

    function showResults(payload) {
        
        var myHtml = "";

        for (var i = 0; i < payload.items.length; i++) {
            var imageUrl = "/default.jpg";
            if (payload.items[i].images[0]) {
                imageUrl = payload.items[i].images[0].url;
            }

            myHtml +=
                "<div class='single-result-container'><img class='result-image' src=" +
                imageUrl +
                " alt='album-image'/>" +
                "<div class='result'>" +
                payload.items[i].name +
                "</div></div>";
        }
        return myHtml;
    }

})();
