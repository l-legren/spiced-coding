//CHECK in hte morning

var link = document.getElementById("headlines");

var left = link.offsetLeft;

var links = document.getElementsByClassName("headline");

var animation = function() {
    left--;
    link.style.left = left + "px";
    
    var width1 = links[0].offsetWidth;
    if (links[0] < -width1) {
        link.style.left += width1;
        var removed = link.removeChild(links[0]);
        link.appendChild(removed);
    }
    requestAnimationFrame(animation);
};

animation();

