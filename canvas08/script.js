canvas = document.getElementById("CanvasCompito");
ctx = canvas.getContext("2d");

function prendiPunto(id){
	x = eval(document.getElementById("x"+id).value);
	y = eval(document.getElementById("y"+id).value);
	return [x, y]
}

puntoMedio = (x, y, x2, y2) => [(x+x2)/2, (y+y2)/2];
offset = (value) => value+canvas.width/2;

function disegnaPunto(x, y){
	ctx.beginPath()
	ctx.arc(offset(x), offset(y*-1), 5, 0, 2*Math.PI)
	ctx.fillStyle = "green"
	ctx.fill()
	ctx.stroke()
}

function disegnaCirconferenza(){
	a = prendiPunto("1")
	b = prendiPunto("2")
	c = prendiPunto("3")
		
	disegnaPunto(a[0], a[1])
	disegnaPunto(b[0], b[1])
	disegnaPunto(c[0], c[1])
	
		if((a[1] - b[1])/(a[0] - b[0]) == (c[1] - b[1])/(c[0] - b[0]))
		return alert("i punti devono esser non allineati")
	
	abM = puntoMedio(a[0], a[1], b[0], b[1])
	cbM = puntoMedio(c[0], c[1], b[0], b[1])
	
	slopeMabK = -1/((a[1] - b[1])/(a[0] - b[0])) // coefficente angolare asse del segmento AC
	interceptKabM = abM[1] - slopeMabK*abM[0] 	 // ordinata all'origine dell'asse del segmento BC
	
	slopeMcbK = -1/((c[1] - b[1])/(c[0] - b[0])) // coefficente angolare asse del segmento BC
	interceptKcbM = cbM[1] - slopeMcbK*cbM[0] 	 // ordinata all'origine dell'asse del segmento BC
	
	// centro della circonferenza xK e yK
	xK = (interceptKcbM-interceptKabM)/(slopeMabK-slopeMcbK)
	yK = slopeMabK*xK + interceptKabM
	disegnaPunto(xK, yK)
	
	raggio = Math.sqrt(Math.pow(xK-a[0], 2) + Math.pow(yK-a[1], 2))
	ctx.beginPath()
	ctx.arc(offset(xK), offset(yK*-1), raggio, 0, 2*Math.PI)
	ctx.stroke()
}

function pulisciGrafico(){
	ctx.clearRect(0, 0, canvas.width, canvas.height);
}
