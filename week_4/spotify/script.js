(function () {
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
                
                if (response.items[0]) {
                    $("#results-found").html('Results for "' + userInput + '"');
                    $("#results-container").addClass("frame-results");
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

                // When I press the more button should make another request

                var nextUrl =
                    response.next &&
                    response.next.replace(
                        "https://api.spotify.com/v1/search?query=heart&type=artist&offset=20&limit=20",
                        "https://spicedify.herokuapp.com/spotify"
                    );
            }
        });
    });
})();
