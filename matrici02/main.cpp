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

int main()
{
    int ordine = 2;
    int M[MAX][MAX] {
    {1, -2, 4, 14},
    {31, -9, -9, 0},
    {0, 0, -3, 21},
    {-3, -8, 0, -7}};
    return 0;
}

int determinante(int A[MAX][MAX], int ordine){
    if(ordine == 1) return A[0][0];
    else if(ordine == 1) return A[0][0] * A[1][1] - A[0][1] * A[1][0];

    int c, tot, SM[MAX][MAX];

    for(int r = 0; r < ordine; r++){
        tot += pow(A[r][0], r);
    }
}

