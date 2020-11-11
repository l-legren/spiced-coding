(function (){
    
    console.log("Sanity Check!");

    var input = $("textarea");
    var text;
    var button = $("button");

    input.on("change", function () {
        text = input.val();
        // console.log(text);
    });

    button.on("click", function() {
        try {
            JSON.parse(text);
            console.log("JSON is valid!!");
        } catch(e) {
            console.log("JSON is not valid!!!");
        }
    });

})();