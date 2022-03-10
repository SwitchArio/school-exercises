#include <iostream>

using namespace std;

int main()
{
    const int MAX = 50;
    int A[MAX][MAX], B[MAX][MAX], C[MAX][MAX], r1, c1, r2, c2;

    cout << "PRIMA MATRICE\n\n";
    do{
        cout << "quante righe? (max 50) ";
        cin >> r1;
    }while(r1 > MAX);
    do{
        cout << "quante colonne? (max 50) ";
        cin >> c1;
    }while(c1 > MAX);


    cout << "\nINSERISCI VALORI PRIMA MATRICE\n";
    for(int r = 0; r < r1; r++)
        for(int c = 0; c < c1; c++)
        {
            cout << "inserisci il valore nella cella " << r+1 << ":" << c+1 << "\n>";
            cin >> A[r][c];
        }


    cout << "\n\n\nSECONDA MATRICE\n\n";

    cout << "le righe della seconda matrice sono le stesse colonne della prima --> " << c1 << " righe\n";
    r2 = c1;

    do{
        cout << "quante colonne? (max 50) ";
        cin >> c2;
    }while(c2 > MAX);

    cout << "\nINSERISCI VALORI SECONDA MATRICE\n";
    for(int r = 0; r < r2; r++)
        for(int c = 0; c < c2; c++)
        {
            cout << "inserisci il valore nella cella " << r+1 << ":" << c+1 << "\n>";
            cin >> B[r][c];
        }

    // terza matrice r1xc2

    for(int c = 0; i < c2; c++)
        for(int r = 0; i < r1, r++){
            C[c][r] = 
        }
    return 0;
}
