(function () {
    $("#submit-button").on("click", function (e) {
        var userInput = encodeURIComponent($("#input").val());
        var albumOrArtist = $("select").val();
        var nextUrl;
        
        $.ajax({
            method: "GET",
            url: "https://spicedify.herokuapp.com/spotify",
            data: {
                query: userInput,
                type: albumOrArtist
            },
            success: function showResults(response) {
                response = response.artists || response.albums;
                
                if (response.items[0]) {
                    $("#results-found").html('Results for "' + userInput + '"');
                    $("#results-container").addClass("frame-results");
                    // $("#more").css("visibility", "visible");
                } else {
                    $("#results-found").html("No results found");
                }

                var myHtml = "";
                
                for (var i = 0; i < response.items.length; i++) {
                    
                    var imageUrl = "/default.jpg";
                    if (response.items[i].images[0]) {
                        imageUrl = response.items[i].images[0].url;
                    }
                    
                    myHtml += "<div class='single-result-container'><img class='result-image' src=" + imageUrl + " alt='album-image'/>" + "<div class='result'>" + response.items[i].name + "</div></div>";
                }
                
                console.log(response);
                $("#results-container").html(myHtml);

                $("#results-container").append(
                    '<div id="button-container"><button class="button" id="more">More</button></div>'
                );


                // When I press the more button should make another request

                nextUrl =
                    response.next &&
                    response.next.replace(
                        "https://api.spotify.com/v1/search",
                        "https://spicedify.herokuapp.com/spotify"
                    );
                
                console.log($("#more"));

                $("#more").on("click", function () {
                    // console.log(nextUrl);
                    $.ajax({
                        method: "GET",
                        url: nextUrl,
                        success: showResults,
                    });
                });
            }
        });
    });
})();
