// Only saving when I click outside TEXTAREA!!!!

(function() {
    console.log("Sanity Check!");
    
    var textArea = $("#textarea");
    var text;

    var savedText = localStorage.getItem("text");
    var savedTextString = JSON.stringify(savedText);
    // console.log(savedText);
    console.log(savedTextString);
    
    $(document).ready(function () {
        // localStorage.setItem("text", savedTextString);
        textArea.val(savedTextString);
    });
    
    textArea.on("change", function () {
        text = textArea.val();
        localStorage.setItem("text", text);
    });

})();