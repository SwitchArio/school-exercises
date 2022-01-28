ctx = document.getElementById("myCanvas").getContext("2d");
PI = 2 * Math.PI;

function draw(){
    let nCircles = eval(document.getElementById("circles").value);
    let rgb = document.getElementById("col").value.split(",");
    drawConcentricCircle(nCircles, rgb[0], rgb[1], rgb[2]);
}

function drawConcentricCircle(nCircles, r, g, b) {
    if(isNaN(nCircles) || nCircles < 0 || nCircles > 10) {
        alert("insert a valid number of concentric Circles")
        return
    }
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
