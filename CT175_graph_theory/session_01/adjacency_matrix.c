#include <stdio.h>
#define MAX_N 100
typedef struct{
	int n, m;
	int A[MAX_N][MAX_N];
}Graph;
/* khoi tao do thi */
void init_graph(Graph *pG, int n){
	int i, j;
	pG->n = n;
	pG->m = 0;
	for(i = 1; i <= n; i++)
		for(j = 1; j <= n; j++)
			pG->A[i][j] = 0;
}
/*them cung */
void add_edge_1(Graph *pG, int u, int v){
	pG->A[u][v] = 1;
	pG->A[v][u] = 1;
	pG->m++;
}
// vo huong, co khuyen
void add_edge_2(Graph *pG, int u, int v){
	pG->A[u][v] += 1;
	if(u != v)
		pG->A[v][u] += 1;
	pG->m++;
}
// co huong, co khuyen
void add_edge_3(Graph *pG, int u, int v){
	pG->A[u][v]++;
	pG->m++;
}

void read_graph(Graph *pG){
    int n, m, e;
    scanf("%d%d", &n, &m);
    init_graph(pG, n);
    for(e = 0; e < m; e++){
        int u, v;
        scanf("%d%d", &u, &v);
        add_edge_2(pG, u, v);
    }
}

void print_graph(Graph G){
    int u, v;
    for(u = 1; u <= G.n; u++){
        for(v = 1; v <= G.n; v++)
            printf("%d ", G.A[u][v]);
        printf("\n");
    }
}
// degree_undirected
int degree_1(Graph *pG, int u){
	int deg_u = 0, i;
	for(i = 1; i <= pG->n; i++){
		if(pG->A[u][i])
			deg_u += pG->A[u][i];
	}
	return deg_u + pG->A[u][u];
}
// degree_directed
int degree(Graph *pG, int u){
	int deg_u = 0, i;
	for(i = 1; i <= pG->n; i++){
		deg_u += (pG->A[u][i] + pG->A[i][u]);
	}
	return deg_u;
}
//indegree
int indegree(Graph *pG, int u){
	int i, indeg_u = 0;
	for(i = 1; i <= pG->n; i++)
		if(pG->A[i][u])
			indeg_u += pG->A[i][u];
	return indeg_u;
}
//outdegree
int outdegree(Graph *pG, int u){
	int outdeg_u = 0, i;
	for(i = 1; i <= pG->n; i++)
		if(pG->A[u][i])
			outdeg_u += pG->A[u][i];
	return outdeg_u;
}

// neighbours_undirected
void neighbors_1(Graph *pG, int u){
	int i;
	for(i = 1; i <= pG->n; i++)
		if(pG->A[u][i] || pG->A[i][u])
			printf("%d ", i);
}

// neighbours_directed
void neighbors_2(Graph *pG, int u){
	int i;
	for(i = 1; i <= pG->n; i++)
		if(pG->A[u][i])
			printf("%d ", i);
}

int deg(Graph *pG, int x){
	int deg = 0;
	int v;
	for(v = 1; v <= pG->n; v++)
		deg += pG->A[x][v];
	return deg;
}

int main() {
    Graph G;
		init_graph(&G, 5);
		add_edge_1(&G, 1, 2);
		add_edge_1(&G, 1, 3);
		add_edge_1(&G, 2, 4);
		add_edge_1(&G, 3, 4);
		add_edge_1(&G, 3, 5);
    int i;
    for(i = 1; i <= G.n; i++){
        printf("neighbors(%d) = ", i);
        neighbors_1(&G, i);
        printf("\n");
    }
    return 0;
}
