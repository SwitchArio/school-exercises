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

function sinusoide(x, A, omega, phi){
	return (A * Math.cos(omega*x + phi))*-1
}

function prendiDato(id){
	return eval(document.getElementById(id).value)
}

function drawSinusoide(){
	assi()
    	pulsazione = prendiDato("pulsazione")
    	ampiezza = prendiDato("ampiezza")
	sfasamento = prendiDato("sfasamento")/180*Math.PI
	document.getElementById("frequenza").textContent = "frequenza: " + Math.round(1000*pulsazione/(2*Math.PI))/1000

	
    	ctx.moveTo(offset(0), offset(0))
	ctx.beginPath()
	for(x=0; x<canvas.width/2; x++) 
		ctx.lineTo(offset(x), offset(sinusoide(x, ampiezza, pulsazione, sfasamento)))
		
	ctx.stroke()
	ctx.beginPath()
	for(x=0; x>-canvas.width/2; x--) 
		ctx.lineTo(offset(x), offset(sinusoide(x, ampiezza, pulsazione, sfasamento)))
		
	ctx.stroke()
}



