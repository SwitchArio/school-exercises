ctx = document.getElementById("myCanvas").getContext("2d");
PI = 2 * Math.PI;

function drawGraphic() {
    txt1 = eval(document.getElementById("txt1").value);
    txt2 = eval(document.getElementById("txt2").value);
    txt3 = eval(document.getElementById("txt3").value);
    sum = txt1 + txt2 + txt3;
    let v = [
        0,
        (txt1 / sum) * PI,
        ((txt1 + txt2) / sum) * PI,
        PI
    ];

    for (var i = 0; i < 3; i++) {
        ctx.beginPath();
        ctx.arc(150, 150, 50, v[i], v[i + 1]);
        ctx.lineTo(150, 150);
        ctx.fillStyle = document.getElementById("col" + (i + 1)).value();
        ctx.fill();
        ctx.closePath();
    }

    ctx.stroke();
}
