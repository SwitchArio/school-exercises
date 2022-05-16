#include <iostream>
#include <fstream> // iF  oF
#include <cstdlib>

using namespace std;

// n. min, n. max, quanti numeri, quanti pari, quanti dispari, media aritmetica e varianza

int main()
{
    ifstream miofile;
    int n;
    char rigaletta[10]="         ";
    miofile.open("numeriInteri.txt");

    int nMin = 0, nMax = 0, nTot = 0, nPari = 0, nDispari = 0, somma = 0, numeri[800], sommaVarianza = 0, temp, n1 = 0, n2 = 0, n3 = 0;
    bool flag = true;
    float media, varianza, mediana, moda;

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

    media = (float)somma / nTot;

    for(int i = 0; i < nTot; i++)
        sommaVarianza += (numeri[i]-media)*(numeri[i]-media);
    varianza = (float)sommaVarianza / nTot;

    for(int i = 0; i < nTot; i++)
		for(int j = i+1; j < nTot; j++)
			if(numeri[i] > numeri[j])
			{
				temp = numeri[i];
				numeri[i] = numeri[j];
				numeri[j] = temp;
			}
    if(nTot%2 == 0)
        mediana = (float)(numeri[nTot/2]+numeri[nTot/2+1])/2;
    else 
        mediana = numeri[(nTot+1)/2];


    cout << "DATI:\nNumeri Totali: " << nTot
    << "\nDispari: " << nDispari
    << "\nPari: " << nPari
    << "\nSomma: " << somma
    << "\nMin: " << nMin
    << "\nMax: " << nMax
    << "\nMedia: " << media
    << "\nVarianza: " << varianza
    << "\nMediana: " << mediana;
    if(!flag)
        cout << "\nPrima serie di numeri in ordine crescente: " << n3 << " " << n2 << " " << n1;


    return 0;
}
