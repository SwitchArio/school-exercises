function trasforma() {
    var decimale = eval(document.getElementById("decimale").value);

    var quoziente = decimale;
    var resto;
    
    var risultato = "";

    var base = 2; // Sistema binario: base 2

    do {
        resto = quoziente % base;
        quoziente = (quoziente - resto) / base;
        risultato = resto + risultato;
    } while (quoziente != 0);

    document.getElementById("binario").value = risultato;
}
