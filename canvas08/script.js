canvas = document.getElementById("CanvasCompito");
ctx = canvas.getContext("2d");

function prendiPunto(id){
	x = eval(document.getElementById("x"+id).value);
	y = eval(document.getElementById("y"+id).value);
	return [x, y]
}

puntoMedio = (x, y, x2, y2) => [(x+x2)/2, (y+y2)/2];

function disegnaPunto(x, y){
	ctx.beginPath()
	ctx.arc(x, y, 5, 0, 2*Math.PI)
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
	
	abM = puntoMedio(a[0], a[1], b[0], b[1])
	cbM = puntoMedio(c[0], c[1], b[0], b[1])
	
	slopeAB = (a[1] - b[1])/(a[0] - b[0]) // coefficente angolare
	interceptAB = a[1] - slopeAB*a[0] // ordinata all'origine
	
	slopeBC = (c[1] - b[1])/(c[0] - b[0]) // coefficente angolare
	interceptBC = b[1] - slopeBC*b[0] // ordinata all'origine
	
	// centro della circonferenza xK e yK
	/*
	
	
	
	
	
	*/	
	
}

function pulisciGrafico(){
	ctx.clearRect(0, 0, canvas.width, canvas.height);
}
