#include <iostream>
#include <cmath>

using namespace std;

/*
|a, b|
|c, d|
determinante = a*d - b*c
segno = -1^(Nriga+Ncolonna)

|(1,1), (1,2), (1,3)|
|(2,1), (2,2), (2,3)|
|(3,1), (3,2), (3,3)|
*/
const int MAX = 10;
int determinante(int[MAX][MAX], int);
int stampaMatrice(int[MAX][MAX], int);

int main()
{
    int ordine = 4;
    int M[MAX][MAX] {
    {10, 5, 3, 2},
    {-3, 4, 7, 7},
    {4, 6, 2, -9},
    {8, 0, 7, 1}};/*{
    {1, -2, 4, 6},
    {2, -9, -9, 0},
    {0, 0, -3, 6},
    {-3, -8, 0, -7}};*/
    stampaMatrice(M, ordine);
    cout << determinante(M, ordine);
    return 0;
}

int determinante(int A[MAX][MAX], int ordine){
    stampaMatrice(A, ordine);
    if(ordine == 1) return A[0][0];
    else if(ordine == 2) return A[0][0] * A[1][1] - A[0][1] * A[1][0];

    int r, tot = 0, SM[MAX][MAX];

    for(int riga = 0; riga < ordine; riga++){

        // riempimento SM
        for(int rSM = 0; rSM < ordine-1; rSM++)
            for(int cSM = 0; cSM < ordine-1; cSM++){

            if ( rSM < riga ) r = rSM;
            else r = rSM+1;

            SM[rSM][cSM] = A[r][cSM+1];
        }
        tot += A[r][0] * pow(-1, r) * determinante(SM, ordine-1);

    }
    return tot;
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
    if(len == 2) cout << A[0][0] * A[1][1] - A[0][1] * A[1][0];
    cout << "\n\n";

}
