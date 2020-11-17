(function () {

    ///////////// DO NOT TOUCH //////////////////////////

    Handlebars.templates = Handlebars.templates || {};

    var templates = document.querySelectorAll(
        'script[type="text/x-handlebars-template"]'
    );

    Array.prototype.slice.call(templates).forEach(function (script) {
        Handlebars.templates[script.id] = Handlebars.compile(script.innerHTML);
    });

    ///////////// DO NOT TOUCH //////////////////////////

    var nextUrl;

    $("#submit-button").on("click", function (e) {
        var userInput = encodeURIComponent($("#input").val());
        var albumOrArtist = $("select").val();

        $.ajax({
            method: "GET",
            url: "https://spicedify.herokuapp.com/spotify",
            data: {
                query: userInput,
                type: albumOrArtist,
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

                // $("#results-container").html(showResults(response));
                $("#results-container").html(Handlebars.templates.musicId(response));

                $("#results-container").append(
                    '<div id="button-container"><button class="button" id="more">More</button></div>'
                );

                setNextUrl(response.next);

                $("#more").on("click", function () {
                    $.ajax({
                        url: nextUrl,
                        success: function (buttonResponse) {

                            buttonResponse = buttonResponse.artists || buttonResponse.albums;

                            if (buttonResponse.items[0]) {
                                $("#results-found").html(
                                    'Results for "' +
                                        userInput +
                                        '"'
                                );
                                $(
                                    "#results-container"
                                ).addClass("frame-results");
                            } else {
                                $("#results-found").html(
                                    "No results found"
                                );
                            }

                            $("#results-container").append(
                                Handlebars.templates.musicId(
                                    response
                                )
                            );

                        },
                    });
                });
            },
        });
    });

    function checkScrollPosition() {
        setTimeout(function () {
            if (
                $(window).height() + $(document).scrollTop() >=
                $(document).height() - 200
            ) {
                console.log("Bottom was reached!");
                $("#button-container").remove();
                $.ajax({
                    url: nextUrl,
                    success: function (response) {
                        response = response.artists || response.albums;
                        $("#results-container").append(
                            Handlebars.templates.musicId(response)
                        );
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

})();
