#include <stdio.h>
#define MAX_ELEMENTS 100
typedef int ElementType;
typedef struct
{
	ElementType data[MAX_ELEMENTS];
	int size;
} List;

/*Tạo rỗng danh sách*/
void make_null(List *L)
{
	L->size = 0;
}

/* Thêm phan tu vao cuoi danh sách */
void push_back(List *L, ElementType x)
{
	L->data[L->size] = x;
	L->size++;
}

/* Lay phan tu tai vi tri i, vi tri tinh tu 1 */
ElementType element_at(List *L, int i)
{
	return L->data[i - 1];
}

/* Tra ve so phan tu  danh s�ch */
int count_list(List *L)
{
	return L->size;
}
//______________________________________//

typedef struct
{
	int A[100][500];
	int n, m;
} Graph;

// khoi tao do thi n  dinh, m cung
void init_graph(Graph *pG, int n, int m)
{
	int i, j;
	pG->m = m;
	pG->n = n;
	for (i = 1; i <= n; i++)
		for (j = 1; j <= m; j++)
			pG->A[i][j] = 0;
}
// them cung vao do thi
void add_edge(Graph *pG, int e, int x, int y)
{
	pG->A[x][e] = 1;
	pG->A[y][e] = 1;
}

// danh sach cac dinh ke
List neighbors(Graph *pG, int u)
{
	List L;
	make_null(&L);
	int e, v;
	for (v = 1; v <= pG->n; v++)
		for (e = 0; e <= pG->m; e++)
			if (pG->A[u][e] && pG->A[v][e] && u != v)
			{
				push_back(&L, v);
				break;
			}
	return L;
}

int main(int argc, char *argv[])
{
	Graph G;
	int n = 4, m = 3; // 4 đỉnh, 3 cạnh
	init_graph(&G, n, m);
	// giả sử có cạnh như sau:
	// e1: 1 - 2
	// e2: 1 - 3
	// e3: 3 - 4
	add_edge(&G, 1, 1, 2);
	add_edge(&G, 2, 1, 3);
	add_edge(&G, 3, 3, 4);

	// In các đỉnh kề của từng đỉnh
	for (int u = 1; u <= n; u++)
	{
		printf("Cac dinh ke cua %d: ", u);
		List L = neighbors(&G, u);
		for (int i = 1; i <= count_list(&L); i++)
		{
			printf("%d ", element_at(&L, i));
		}
		printf("\n");
	}
	return 0;
}
