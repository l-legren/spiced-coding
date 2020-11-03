// Write a function that expects a string representing a selector to be passed as a parameter. The function should find all the elements in the document that match the selector and change their style so that the text they contain is italic, underlined, and bold.

var styler = function (selector) {
    var selected = document.querySelectorAll(selector);
    for ( var i = 0; i < selected.length; i++) {
        selected[i].style.fontWeight = "bold";
        selected[i].style.fontStyle = "italic";
        selected[i].style.textDecoration = "underline";
    }
};

// Write a function that expects a string representing a class name to be passed as a parameter. The function should return an array containing all the elements in the document that have the class that was passed in.

var classer = function (cl) {
    var allInClass = document.getElementsByClassName(cl);
    return allInClass;
};

// Write a function that inserts an element into the body of the currently loaded page. That element should have fixed position, z-index of 2147483647, left of 20px, top of 100px, font-size of 200px, and contain the text 'AWESOME'.

var inserter = function (elem) {
    // I create a new element
    var newElem = document.createElement(elem);
    // I format the new elemente with some text
    var text = document.createTextNode("AWESOME");
    // Give some format to the new
    newElem.style.left = "20px";
    newElem.style.top = "100px";
    newElem.style.fontSize = "200px";
    newElem.style.zIndex = 328904723878342;
    // Add the text node to the new div element
    newElem.appendChild(text);
    // add into the DOM
    document.querySelector("body").appendChild(newElem);
};

