(function() {
    
    var slider = $("#slider");
    var container = $("#container");
    var top = $("#top-img");
    var topWidth = top.css("width");
    var bottom = $("#bottom-img");
    // var sliderGrab = $("#slider-grab");
    var sliderMoving = false;

    slider.on("mousedown", function(e) {
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

    slider.on("mouseup", function() {
        sliderMoving = false;
        console.log(sliderMoving);
    });

})();