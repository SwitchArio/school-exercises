var baseScelta = 2;

function trasforma() {
    var decimale = eval(document.getElementById("decimale").value);
    if (isNaN(decimale)) {
        alert(decimale + " non è un numero valido");
        return;
    }
    var quoziente = decimale;
    var resto;
    var risultato = "";

    var lista = {
        10: "A",
        11: "B",
        12: "C",
        13: "D",
        14: "E",
        15: "F"
    };

    do {
        resto = quoziente % baseScelta;
        quoziente = (quoziente - resto) / baseScelta;

        if (resto > 9)
            resto = lista[resto];

        risultato = resto + risultato;
    } while (quoziente != 0);

    document.getElementById("risultato").value = risultato;
}

function getBase(k) {
    if (k >= 2 && k <= 16) {
        document.getElementById("al").textContent = "N. in base " + k;
        document.getElementById("al2").textContent = "Risultato in base " + k;
        document.getElementById("btn").textContent = "Converti in base " + k;
    } else
        alert(k + " non è un numero valido")

    baseScelta = k;
}
