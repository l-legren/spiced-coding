(function (countries) {
    var searchField = $("input");
    var resultsContainer = $(".results-container");

    searchField.on("input", function () {
        var matchResults = [];
        var inputVal = searchField.val().toLowerCase();

        for (var i = 0; i < countries.length; i++) {
            if (countries[i].toLowerCase().indexOf(inputVal) === 0) {
                // console.log(countries[i]);
                matchResults.push(countries[i]);
                if (matchResults.length === 4) {
                    break;
                }
            }
        }
        // console.log(matchResults);
        var htmlForCountries = "";
        for (var j = 0; j < matchResults.length; j++) {
            htmlForCountries +=
                '<p class="country">' + matchResults[j] + "</p>";
        }

        // Need to fix this!
        // if (htmlForCountries.length === 0) {
        //     resultsContainer.html("<p>No results found</p>");
        // }

        // console.log(htmlForCountries);
        resultsContainer.html(htmlForCountries);

        if (!inputVal) {
            resultsContainer.html("");
        }
    });

    resultsContainer.on("mouseover", "p", function (e) {
        // console.log(e.target);
        $(e.target).addClass("highlighted");
    });

    resultsContainer.on("mouseout", "p", function (e) {
        $(e.target).removeClass("highlighted");
    });

    resultsContainer.on("mousedown", "p", function (e) {
        var countryName = $(e.target).html();
        searchField.val(countryName);
        resultsContainer.html("");
    });

    $(document).on("keydown", function (e) {
        var renderedCountries = $("p");
        // console.log(renderedCountries.length);
        if ($(e.keyCode === 40)) {
            // console.log("arrowdown");
            var curHigh;
            for (var i = 0; i < renderedCountries.length; i++) {
                if (!renderedCountries.eq(i).hasClass("highlighted")) {
                    // renderedCountries.eq(0).addClass("highlighted");
                    curHigh = renderedCountries.eq(0);
                    // console.log(curHigh);
                } else {
                    curHigh = renderedCountries.eq(i);
                }
            }
            curHigh.addClass("highlighted");
            curHigh = curHigh.next();
            // curHigh.removeClass("highlighted");
        }
    });

    searchField.on("click", function (e) {
        e.stopPropagation();
        var htmlFocus = "";
        for (var i = 0; i < 4; i++) {
            htmlFocus += "<p>" + countries[i] + "</p>";
        }
        resultsContainer.html(htmlFocus);
    });

    $(document).on("click", function () {
        resultsContainer.html("");
    });
})([
    "Afghanistan",
    "Albania",
    "Algeria",
    "Andorra",
    "Angola",
    "Antigua and Barbuda",
    "Argentina",
    "Armenia",
    "Australia",
    "Austria",
    "Azerbaijan",
    "Bahamas",
    "Bahrain",
    "Bangladesh",
    "Barbados",
    "Belarus",
    "Belgium",
    "Belize",
    "Benin",
    "Bhutan",
    "Bolivia",
    "Bosnia and Herzegovina",
    "Botswana",
    "Brazil",
    "Brunei Darussalam",
    "Bulgaria",
    "Burkina Faso",
    "Burundi",
    "Cabo Verde",
    "Cambodia",
    "Cameroon",
    "Canada",
    "Central African Republic",
    "Chad",
    "Chile",
    "China",
    "Colombia",
    "Comoros",
    "Congo",
    "Costa Rica",
    "Côte D'Ivoire",
    "Croatia",
    "Cuba",
    "Cyprus",
    "Czech Republic",
    "Democratic People's Republic of Korea",
    "Democratic Republic of the Congo",
    "Denmark",
    "Djibouti",
    "Dominica",
    "Dominican Republic",
    "Ecuador",
    "Egypt",
    "El Salvador",
    "Equatorial Guinea",
    "Eritrea",
    "Estonia",
    "Eswatini",
    "Ethiopia",
    "Fiji",
    "Finland",
    "France",
    "Gabon",
    "Gambia",
    "Georgia",
    "Germany",
    "Ghana",
    "Greece",
    "Grenada",
    "Guatemala",
    "Guinea",
    "Guinea Bissau",
    "Guyana",
    "Haiti",
    "Honduras",
    "Hungary",
    "Iceland",
    "India",
    "Indonesia",
    "Iran",
    "Iraq",
    "Ireland",
    "Israel",
    "Italy",
    "Jamaica",
    "Japan",
    "Jordan",
    "Kazakhstan",
    "Kenya",
    "Kiribati",
    "Kuwait",
    "Kyrgyzstan",
    "Lao People’s Democratic Republic",
    "Latvia",
    "Lebanon",
    "Lesotho",
    "Liberia",
    "Libya",
    "Liechtenstein",
    "Lithuania",
    "Luxembourg",
    "Madagascar",
    "Malawi",
    "Malaysia",
    "Maldives",
    "Mali",
    "Malta",
    "Marshall Islands",
    "Mauritania",
    "Mauritius",
    "Mexico",
    "Micronesia",
    "Monaco",
    "Mongolia",
    "Montenegro",
    "Morocco",
    "Mozambique",
    "Myanmar",
    "Namibia",
    "Nauru",
    "Nepal",
    "Netherlands",
    "New Zealand",
    "Nicaragua",
    "Niger",
    "Nigeria",
    "North Macedonia",
    "Norway",
    "Oman",
    "Pakistan",
    "Palau",
    "Panama",
    "Papua New Guinea",
    "Paraguay",
    "Peru",
    "Philippines",
    "Poland",
    "Portugal",
    "Qatar",
    "Republic of Korea",
    "Republic of Moldova",
    "Romania",
    "Russian Federation",
    "Rwanda",
    "Saint Kitts and Nevis",
    "Saint Lucia",
    "Saint Vincent and the Grenadines",
    "Samoa",
    "San Marino",
    "Sao Tome and Principe",
    "Saudi Arabia",
    "Senegal",
    "Serbia",
    "Seychelles",
    "Sierra Leone",
    "Singapore",
    "Slovakia",
    "Slovenia",
    "Solomon Islands",
    "Somalia",
    "South Africa",
    "South Sudan",
    "Spain",
    "Sri Lanka",
    "Sudan",
    "Suriname",
    "Sweden",
    "Switzerland",
    "Syrian Arab Republic",
    "Tajikistan",
    "Thailand",
    "Timor-Leste",
    "Togo",
    "Tonga",
    "Trinidad and Tobago",
    "Tunisia",
    "Turkey",
    "Turkmenistan",
    "Tuvalu",
    "Uganda",
    "Ukraine",
    "United Arab Emirates",
    "United Kingdom",
    "United Republic of Tanzania",
    "United States of America",
    "Uruguay",
    "Uzbekistan",
    "Vanuatu",
    "Venezuela",
    "Viet Nam",
    "Yemen",
    "Zambia",
    "Zimbabwe",
]);
