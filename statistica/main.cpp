#include <iostream>
#include <fstream> // iF  oF
#include <cstdlib>

using namespace std;

int main()
{
    ifstream miofile;
    int n;
    char rigaletta[10]="         ";
    miofile.open("numeriInteri.txt");

    int nMin = 0, nMax = 0, nTot = 0, nPari = 0, nDispari = 0, somma = 0, numeri[800], n1, n2, n3;
    bool flag = true;
    float media, varianza, mediana;

    while( miofile.getline(rigaletta,10) ){
        n = atoi(rigaletta);
        //cout << n << "\n";

        if(n%2 == 0) nPari++;
        else nDispari++;
        numeri[nTot] = n;
        nTot++;
        somma += n;
        if(n < nMin) nMin = n;
        if(n > nMax) nMax = n;

        if(flag){
            n3 = n2;
            n2 = n1;
            n1 = n;
            if(n3 > n2 && n2 > n1) flag = false;
        }
    }
    miofile.close();

    // media aritmetica
    media = (float)somma / nTot;

    // varianza
    long long unsigned int sommaVarianza = 0;
    for(int i = 0; i < nTot; i++)
        sommaVarianza += (numeri[i]-media)*(numeri[i]-media);
    varianza = (float)sommaVarianza / nTot;

    // bubble sort
    int temp;
    for(int i = 0; i < nTot; i++)
	for(int j = i+1; j < nTot; j++)
	    if(numeri[i] > numeri[j])
	    {
		temp = numeri[i];
		numeri[i] = numeri[j];
		numeri[j] = temp;
	    }

    // mediana
    if(nTot%2 == 0)
        mediana = (float)(numeri[nTot/2]+numeri[nTot/2+1])/2;
    else
        mediana = numeri[(nTot+1)/2];

    // moda
    int frequenza = 0, frequenzaMax = 0, moda;
    for(int i = 0; i < nTot; i++){
        for(int j = 0; j < nTot; j++)
            if(numeri[i]==numeri[j])
                frequenza++;
        if(frequenza > frequenzaMax){
            frequenzaMax = frequenza;
            moda = numeri[i];
        }
        frequenza = 0;
    }


    cout << "DATI:\nNumeri Totali: " << nTot
    << "\nDispari: " << nDispari
    << "\nPari: " << nPari
    << "\nSomma: " << somma
    << "\nMin: " << nMin
    << "\nMax: " << nMax
    << "\nMedia: " << media
    << "\nVarianza: " << varianza
    << "\nModa: " << moda
    << "\nMediana: " << mediana;
    if(flag) return 0;
    cout << "\nPrima serie di numeri in ordine crescente: " << n1 << " " << n2 << " " << n3;

    return 0;
}
