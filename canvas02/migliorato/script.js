ctx = document.getElementById("myCanvas").getContext("2d");
PI = 2 * Math.PI;

function draw(){
    let nCircles = document.getElementById("quantity").value;
    let r = document.getElementById("red").value;
    let g = document.getElementById("green").value;
    let b = document.getElementById("blue").value;
    drawConcentricCircle(nCircles, r, g, b);
}

function drawConcentricCircle(nCircles, r, g, b) {
    let radius = 150;
    let radiusVal = radius/nCircles, rVal = r/nCircles, gVal = g/nCircles, bVal = b/nCircles;

    for (let i = 0; i < nCircles; i++) {
        ctx.beginPath();
        ctx.arc(150, 150, radius, 0, PI);
        ctx.fillStyle = "rgba("+r+","+g+","+b+",1)";
        ctx.fill();
        ctx.stroke();

        radius -= radiusVal;
        r -= rVal;
        g -= gVal;
        b -= bVal;
    }
}
