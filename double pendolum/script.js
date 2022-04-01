const canvas = document.getElementById("myCanvas")
const ctx = canvas.getContext('2d')
const statsDisplay = document.getElementById("stats")
const btn = document.getElementById("btn")
let play = true;

const ANGOLO_INIZIALE = 45;

async function draw() {
    let content
    let lunghezza = document.getElementById("len").value
    let velocitaAngolo, angolo, accelerazione, forza, x1, y1;
    let velocitaAngolo2, angolo2, accelerazione2, forza2, x2, y2;
    let massa, accelerazioneGrav, angoloBeta, angoloBeta2;

    angolo = ANGOLO_INIZIALE
    angolo2 = ANGOLO_INIZIALE
    velocitaAngolo = velocitaAngolo2 = 0
    accelerazioneGrav = 0.01
    massa = 1

    play = !play
    while(play) {
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        angoloBeta = ( 90 - angolo ) / 180 * Math.PI
        angoloBeta2 = ( 90 - angolo2 ) / 180 * Math.PI

        x1 = lunghezza * Math.sin(angolo/180*Math.PI)
        y1 = lunghezza * Math.cos(angolo/180*Math.PI)

        x2 = lunghezza * (Math.sin(angolo/180*Math.PI) + 0.5 * Math.sin(angolo2/180*Math.PI))
        y2 = lunghezza * (Math.cos(angolo/180*Math.PI) + 0.5 * Math.cos(angolo2/180*Math.PI))

        forza = -Math.sin(angolo/180*Math.PI) * massa * accelerazioneGrav
        forza2 = - massa * accelerazioneGrav* Math.sqrt(Math.pow(Math.sin(angoloBeta) + Math.sin(angoloBeta2), 2) + Math.pow(Math.cos(angoloBeta)+Math.cos(angoloBeta2), 2))

        accelerazione = forza
        velocitaAngolo += accelerazione
        angolo += velocitaAngolo

        accelerazione2 = forza2
        velocitaAngolo2 += accelerazione2
        angolo2 += velocitaAngolo2

        content  = `x:${Math.round(x1)} y:${Math.round(y1)} speed:${Math.round(velocitaAngolo*100)/100}`
        content += ` -------- `
        content += `x2:${Math.round(x2)} y2:${Math.round(y2)} speed2:${Math.round(velocitaAngolo2*100)/100}`

        statsDisplay.textContent = content
        disegnaPunto(0, 0, x1, y1)
        disegnaPunto(x1, y1, x2, y2)
        await sleep(5)
    }
}

function disegnaPunto(xB, yB, x, y) {
    ctx.beginPath()
    ctx.moveTo(offset + xB, yB)
    ctx.lineTo(x+offset, y)
    ctx.lineWidth = 3
    ctx.stroke()
    ctx.lineWidth = 1

    ctx.beginPath()
    ctx.arc(x+offset, y, 10, 0, 2*Math.PI)
    ctx.fillStyle = "blue"
    ctx.fill()
    ctx.stroke()
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

btn.onclick = async () => await draw()


const offset = canvas.width/2
