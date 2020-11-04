(function () {
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
    // Drawing the arms
    ctx.beginPath();
    ctx.strokeStyle = "black";
    ctx.lineWidth = 4;
    ctx.moveTo(20, 150);
    ctx.lineTo(200, 200);
    ctx.lineTo(380, 150);
    ctx.stroke();
    // The head
    ctx.beginPath();
    ctx.strokeStyle = "black";
    ctx.lineWidth = 4;
    ctx.arc(200, 80, 60, 0, 2 * Math.PI);
    ctx.stroke();
    // Body
    ctx.beginPath();
    ctx.strokeStyle = "black";
    ctx.lineWidth = 4;
    ctx.moveTo(200,140);
    ctx.lineTo(200, 450);
    ctx.stroke();
    // Legs
    ctx.beginPath();
    ctx.strokeStyle = "black";
    ctx.lineWidth = 4;
    ctx.moveTo(60, 600);
    ctx.lineTo(200, 450);
    ctx.lineTo(340, 600);
    ctx.stroke();
})();
