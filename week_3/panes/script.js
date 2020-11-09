(function() {
    
    var slider = $("#slider");
    var container = $("#container");
    var top = $("#top-img");
    var bottom = $("#bottom-img");
    var sliderGrab = $("#slider-grab");
    var sliderMoving = false;


    var sliderLeft = slider.css("left");
    // var topLeft = top.css("left");
    var bottomWidth = bottom.width();
    // console.log(container.offset().left);
    // console.log(sliderLeft);

    $(document).on("mousedown", function(e) {
        sliderMoving = true;
        slider.css("left", e.pageX + "px");
        console.log(sliderMoving);
    });

    slider.on("mousemove", function(e) {
        if (sliderMoving && e.pageX < 800 && e.pageX > 0) {
            console.log(e.pageX);
            console.log(sliderMoving);
            slider.css("left", e.pageX + "px");
        }
    });

    $(document).on("mouseup", function() {
        sliderMoving = false;
        console.log(sliderMoving);
    });

})();