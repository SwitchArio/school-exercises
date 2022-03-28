#include <iostream>
#include <math.h>

using namespace std;

const int MAX = 10;

int matriceInversa(int[][MAX], int);
int matriceTrasposta(int[][MAX], int);
int stampaMatrice(int[][MAX], int);
int determinante(int[][MAX], int);

int main()
{
    int ordine = 3;
    int M[MAX][MAX]{
    {1, 2, 3},
    {4, 5, 6},
    {7, 8, 9}};
    int N = matriceInversa(M, ordine);
    stampaMatrice(M, ordine);
    return 0;
}

int matriceInversa(int A[MAX][MAX], int ordine){
    int B[MAX][MAX], SM[MAX][MAX];



    // scorro la riga e colonna da togliere
    for(int rTolta = 0; rTolta < ordine; rTolta++)
        for(int cTolta = 0; cTolta < ordine; cTolta++)
        {
            int rSM = 0, cSM = 0;
            // prendo la matrice togliendo la riga e colonna corrente
            for(int r = 0; r < ordine; r++)
                for(int c = 0; c < ordine; c++)
                {
                    if(r != rTolta && c != cTolta){
                        SM[rSM][cSM] = A[r][c];
                        if(cSM == 0) cSM++;
                        else if(cSM == 1) {rSM++;cSM = 0;}
                        if(cSM == 1 && rSM == 2) {B[rTolta][cTolta] = determinante(SM, ordine-1);}
                    }
                }
/*
|-, -, -|
|4, -, 6|
|7, -, 9|

|, |
|, |
*/
        }
    int matriceFinale = matriceTrasposta(B, ordine);
    stampaMatrice(B, ordine);
    return matriceFinale;
}

int matriceTrasposta(int A[MAX][MAX], int ordine){
    int B[MAX][MAX];

    for(int r = 0; r < ordine; r++)
        for(int c = 0; c < ordine; c++)
            B[r][c] = A[c][r];
    stampaMatrice(B, ordine);
    return B;
}

int stampaMatrice(int A[MAX][MAX], int len){
    for(int r = 0; r < len; r++){
        cout << "| ";
        for(int c = 0; c < len; c++)
        {
            if(A[r][c] >= 0) cout << " ";

            cout << A[r][c];

            if(c!=len-1) cout << ", ";
        }
        cout << " |\n";
    }
}

int determinante(int A[MAX][MAX], int ordine){

    if(ordine == 1) return A[0][0];
    else if(ordine == 2) return A[0][0] * A[1][1] - A[0][1] * A[1][0];

    int tot = 0, SM[MAX][MAX];

    for(int riga = 0; riga < ordine; riga++){

        // riempimento SM
        for(int rSM = 0; rSM < ordine-1; rSM++)
            for(int cSM = 0; cSM < ordine-1; cSM++){

            int r = rSM < riga ? r = rSM : rSM+1;
            SM[rSM][cSM] = A[r][cSM+1];

        }

        tot += A[riga][0] * pow(-1, riga) * determinante(SM, ordine-1);
    }
    return tot;
}
