canvas = document.getElementById("myCanvas");
color = "red";
ctx = canvas.getContext("2d");
//to draw the circle
ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 3;
ctx.arc(200, 200, 40, 0, 2 * Math.PI);
//x, y, radius, starting angle, ending angle
ctx.stroke();

canvas.addEventListener("mousedown", myMousedown);
function myMousedown(e) {
    color = document.getElementById("arc-colour").value;
    console.log(color);
 mouseX = e.clientX - canvas.offsetLeft;
 mouseY = e.clientY - canvas.offsetTop;
 console.log("X = "+ mouseX + "Y = " + mouseY);
 //No dashes, symbols, numbers in starting of a var name
 circle(mouseX, mouseY);
}

function circle(mouseX, mouseY) {
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = 3;
    ctx.arc(mouseX, mouseY, 40, 0, 2 * Math.PI);
    ctx.stroke();
    //stroke is pendown
}

function clear() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}