# Canvas

## 04/11/2020

`<canvas id="" width="" height=""></canvas>` 

### Draw a Triangle

1) Rendering our drawing context

`var canvas = document.getElementById("canvas");`

`var ctx = canvas.getContext('2d');`

2) Begin to draw a Path

`ctx.beginPath();`

3) Optionally set a color and a line width

`ctx.strokeStyle = "color";`

`ctx.lineWidth = 3;`

4) Move to starting position 

`ctx.moveTo(150, 150);`

5) Mapping out the shape we want to draw

`ctx.lineTo(450, 150);`

`ctx.lineTo(300, 300);`

`ctx.lineTo(150, 150);`

// to close the edge

`ctx.closePath();`

6) Call the function to draw the shape

`ctx.stroke();`

7) Optionally fill in with color

`ctx.fillStyle = "color";`

`ctx.fill();`

### Draw a Circle

**First 3 steps same as with the Triangle**

`ctx.arc(x, y, radius, 0, 2*Math.PI);`

4th and 5th argument are beginning and end of the arc.

**6th and 7th steps same as with the Triangle!**