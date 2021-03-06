#include <iostream>
#include <iomanip>

using namespace std;

int main()
{
    const int MAX = 50;
    int A[MAX][MAX] { {5, -2, 4}, {0, -1, 8},  {3, 6, -7} },
    B[MAX][MAX] {{-1, 12},  {4, -5}, {10, 3} },
    C[MAX][MAX],
    r1=3, c1=3, r2=3, c2=2, tmp = 0;

    /*cout << "PRIMA MATRICE\n\n";
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
*/
    // terza matrice c1xr2

    for(int r=0;r<r1; r++)
        for(int c=0; c<c2; c++)
        {
            tmp=0;
            for(int i=0; i<c1; i++)
                tmp += A[r][i]*B[i][c];

            C[r][c] = tmp;
            cout << setw(3) << tmp;
        }

    return 0;
}

