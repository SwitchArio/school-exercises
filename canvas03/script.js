ctx = document.getElementById("myCanvas").getContext("2d");

function getPointValues(n){
    x = document.getElementById(n + "x").value;
    y = document.getElementById(n + "y").value;
    return [x, y];
}

function triangleType(ab, ac, cb){
    let lati_uguali = 0
    if (ab == ac ) lati_uguali += 1
    if (ab == cb ) lati_uguali += 1
    if (ac == cb ) lati_uguali += 1

    if(lati_uguali == 1) return "isoscele"
    if(lati_uguali == 3) return "equilatero"
    return "scaleno"
}

function draw() {
    let a = getPointValues(1);
    let b = getPointValues(2);
    let c = getPointValues(3);

    let ab = Math.round(Math.sqrt(Math.pow(a[0] - b[0], 2) + Math.pow(a[1] - b[1], 2)))
    let ac = Math.round(Math.sqrt(Math.pow(a[0] - c[0], 2) + Math.pow(a[1] - c[1], 2)))
    let cb = Math.round(Math.sqrt(Math.pow(c[0] - b[0], 2) + Math.pow(c[1] - b[1], 2)))

    alert(triangleType(ab, ac, cb))

    ctx.beginPath()
    ctx.lineTo(a[0], a[1])
    ctx.lineTo(b[0], b[1])
    ctx.lineTo(c[0], c[1])
    ctx.closePath()
    ctx.stroke()
}
