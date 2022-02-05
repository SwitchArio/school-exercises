canvas = document.getElementById("myCanvas")
ctx = canvas.getContext("2d")
ctx.translate(canvas.width/2, canvas.height/2)

function prendiPunto(id){
	x = document.getElementById("x" + id).value
	y = document.getElementById("y" + id).value
	return [x, y*-1] // l'asse y del canvas è specchiato
}

function disegnaPunto(x, y){
	ctx.beginPath()
	
	ctx.fillStyle = "green"	
	ctx.arc(x, y, 5, 0, 2*Math.PI)
	ctx.fill()
	
	ctx.stroke()
}

function assi(){
	ctx.beginPath()
	// asse y
	ctx.moveTo(0, -canvas.height)
	ctx.lineTo(0, canvas.height)
	// asse x
	ctx.moveTo(-canvas.width, 0)
	ctx.lineTo(canvas.width, 0)
	
	ctx.stroke()
}

function segnaPunti(){
	a = prendiPunto("1")
	b = prendiPunto("2")
	
	disegnaPunto(a[0], a[1])
	disegnaPunto(b[0], b[1])
}

function pulisci(){
	ctx.clearRect(-canvas.width/2, -canvas.height/2, canvas.width, canvas.height)
}

function retta(){
	a = prendiPunto("1")
	b = prendiPunto("2")
	
	
	if (a[0] == b[0]){
		if (a[1] == b[1]){
			alert("una retta deve passare per 2 punti distinti")
			return
		}
		ctx.beginPath()
		ctx.moveTo(a[0], -canvas.height/2)
		ctx.lineTo(a[0], canvas.height/2)
		ctx.stroke()
		return
	}
	
	// coefficente angolare
	coeff = (a[1]-b[1]) / (a[0]-b[0])
	
	// ordinata all'origine
	intercept = a[1] - a[0] * coeff 
	
	xIniziale = -canvas.width/2
	yIniziale = coeff * xIniziale + intercept
	
	xFinale = canvas.width/2
	yFinale = coeff * xFinale + intercept
	
	ctx.beginPath()
	ctx.moveTo(xIniziale, yIniziale)
	ctx.lineTo(xFinale, yFinale)
	ctx.stroke()
}
