#include <stdio.h>
#define MAX_ELEMENTS 100
typedef int ElementType;
typedef struct {
    ElementType data[MAX_ELEMENTS];
    int size;
} List;
/*Tao rong danh sach*/
void make_null(List* L) {
    L->size = 0;
}

/* Thêm phan tu vao cuoi danh sách */
void push_back(List* L, ElementType x) {
    L->data[L->size] = x;
    L->size++;
}

/* Lay phan tu tai vi tri i, vi tri tinh tu 1 */
ElementType element_at(List* L, int i) {
    return L->data[i-1];
}

/* Tra ve so phan tu  danh sách */
int count_list(List* L) {
    return L->size;
}
//______________________________________//

typedef struct{
	int A[100][500];
	int n, m;
}Graph;

// khoi tao do thi n  dinh, m cung
void init_graph(Graph *pG, int n, int m){
	int i, j;
	pG->m = m;
	pG->n = n;
	for(i = 1; i <= n; i++)
		for(j = 1; j <= m; j++)
			pG->A[i][j] = 0;
}
// them cung vao do thi
void add_edge(Graph *pG, int e, int x, int y){
	pG->A[x][e] = 1;
	pG->A[y][e] = 1;
}

// danh sach cac dinh ke
List neighbours(Graph *pG, int u){
	List L;
	make_null(&L);
	int e, v;
	for(v = 1; v <= pG->n; v++)
		for(e = 0; e <= pG->m; e++)
			if(pG->A[u][e] && pG->A[v][e] && u != v){
				push_back(&L, v);
				break;
			}
	return L;
}


int main(int argc, char *argv[]) {
	
	return 0;
}
