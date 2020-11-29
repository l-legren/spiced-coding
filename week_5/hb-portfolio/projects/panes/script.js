(function() {
    
    var slider = $("#slider");
    var container = $("#container");
    var top = $("#top-img");
    var topWidth = top.css("width");
    var bottom = $("#bottom-img");
    // var sliderGrab = $("#slider-grab");
    var sliderMoving;

    container.on("mousedown", function(e) {
        sliderMoving = true;
        console.log(sliderMoving);
    });

    container.on("mousemove", function(e) {
        if (sliderMoving && e.clientX <= 800 && e.clientX >= 0) {
            console.log(sliderMoving);
            slider.css("left", e.clientX - 10 + "px");
            top.css("width", e.clientX - 10 + "px");
        }
    });

    container.on("mouseup", function(e) {
        sliderMoving = false;
        container.off("mousemove");
        console.log(sliderMoving);
    });

})();