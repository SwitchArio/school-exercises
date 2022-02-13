canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
assi()

function assi(){
	ctx.clearRect(0, 0, canvas.width, canvas.height)
	ctx.beginPath()
	ctx.moveTo(offset(0), offset(-canvas.width/2))
	ctx.lineTo(offset(0), offset(canvas.width/2))
	ctx.moveTo(offset(-canvas.height/2), offset(0))
	ctx.lineTo(offset(canvas.height/2), offset(0))
	ctx.stroke() 
}

function offset(value){
    return canvas.width/2+value
}

function parabola(x, a, b, c){
	return (x*x*a + x*b + c)*-1
}

function prendiDato(id){
	return eval(document.getElementById(id).value)
}

function drawParabola(){
	assi()
    	a = prendiDato("a")
    	b = prendiDato("b")
	c = prendiDato("c")

	
	delta = b*b - 4*a*c
	x1 = Math.round((-b+Math.sqrt(delta))/(2*a)*10)/10
	x2 = Math.round((-b-Math.sqrt(delta))/(2*a)*10)/10
	if(delta > 0) {
		document.getElementById("nIntersezioni").textContent = 2
		
		document.getElementById("x1").textContent = "x "+x1+";y 0"
		document.getElementById("x2").textContent = "x "+x2+";y 0"
	}
	else if(delta == 0) {
		document.getElementById("nIntersezioni").textContent = 1
		document.getElementById("x1").textContent = "x "+x1+";y 0"
		document.getElementById("x2").textContent = "x -;y -"
	}
	
	else if(delta < 0){
		document.getElementById("nIntersezioni").textContent = 0
		document.getElementById("x1").textContent = "x -;y -"
		document.getElementById("x2").textContent = "x -;y -"
	} 
	
	
	
    ctx.moveTo(offset(0), offset(0))
	ctx.beginPath()
	for(x=0; x<canvas.height/2; x++) 
		ctx.lineTo(offset(x), offset(parabola(x, a, b, c)))
		
	ctx.stroke()
	ctx.beginPath()
	for(x=0; x>-canvas.height/2; x--) 
		ctx.lineTo(offset(x), offset(parabola(x, a, b, c)))
		
	ctx.stroke()
}
