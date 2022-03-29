// ANDREA ARIELLI - CALCOLO MATRICE INVERSA
#include <iostream>
#include <math.h>

using namespace std;

const int MAX = 10;

void matriceInversa(int[MAX][MAX], int);
void stampaMatrice(int[MAX][MAX], int);
int determinante(int[MAX][MAX], int);

int main()
{
    int ordine = 3;
    int M[MAX][MAX]{ // matrice con determinante 0
    {1, 2, 3},
    {4, 5, 6},
    {7, 8, 9}};

    int M2[MAX][MAX]{ // matrice con determinante 0
    {1, 2, 3, 4},
    {5, 6, 7, 8},
    {9, 10, 11, 12},
    {13, 14, 15, 16}};

    /*if (determinante(M, ordine) == 0){
        cout << "il determinante e' 0, la matrice non si puo' invertire";
        return 0;
    }*/

    stampaMatrice(M, ordine);
    matriceInversa(M, ordine);

    return 0;
}

void matriceInversa(int A[MAX][MAX], int ordine){
    int B[MAX][MAX], SM[MAX][MAX];
    int ordineSM = ordine-1;

    // scorro la riga e colonna da togliere
    for(int rTolta = 0; rTolta < ordine; rTolta++)
        for(int cTolta = 0; cTolta < ordine; cTolta++)
        {
            int rSM = 0, cSM = 0;

            // per ogni cella della matrice
            // calcolo il determinante della sottomatrice
            for(int r = 0; r < ordine; r++)
                for(int c = 0; c < ordine; c++)
                    if(r != rTolta && c != cTolta) // se la cella corrente non è una di quelle tolte
                    {
                        SM[rSM][cSM] = A[r][c];

                        if(cSM != ordineSM-1) cSM++;
                        else if(cSM == ordineSM-1) { rSM++; cSM = 0; }
                        if(rSM == ordineSM)
                            B[rTolta][cTolta] = determinante(SM, ordine-1) * pow(-1, rTolta+cTolta);
                    }
        }

    // faccio la trasposta della matrice
    int matriceFinale[MAX][MAX];
    for(int r = 0; r < ordine; r++)
        for(int c = 0; c < ordine; c++)
            matriceFinale[r][c] = B[c][r];

    stampaMatrice(matriceFinale, ordine);

}

void stampaMatrice(int A[MAX][MAX], int len){
    for(int r = 0; r < len; r++){
        cout << "| ";
        for(int c = 0; c < len; c++)
        {
            if(A[r][c] >= 0) cout << " ";

            cout << A[r][c];

            if(c!=len-1) cout << ", ";
            if(abs(A[r][c]) < 10) cout << " ";
        }
        cout << " |\n";
    }
    cout << "\n";
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
