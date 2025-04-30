#include <stdio.h>
#define MAX_M 500
typedef struct{
	int u, v;
}Edge;
typedef struct{
	int n, m;
	Edge edges[MAX_M];
}Graph;
/* khoi tao do thi co n dinh, 0 cung*/
void init_graph(Graph *pG, int n){
	pG->n = n;
	pG->m = 0;
}
/* them cung vao do thi co ban*/
void add_edge_1(Graph *pG, int u, int v){
        pG->edges[pG->m].u = u;
        pG->edges[pG->m].v = v;
        pG->m++; 
}
/* them cung vao do thi - kiem tra co cung hop le?*/
void add_edge_2(Graph *pG, int u, int v){
    if(u >= 1 || v >= 1 || u <= pG->n || v <= pG->n){
        pG->edges[pG->m].u = u;
        pG->edges[pG->m].v = v;
        pG->m++;
    }
    
}
/* them cung vao do thi - don do thi co huong*/
void add_edge_3(Graph *pG, int u, int v){
	int i;
	for(i = 0; i < pG->m; i++)
		if(pG->edges[i].u == u && pG->edges[i].v == v)
			return;
	pG->edges[pG->m].u = u;
    pG->edges[pG->m].v = v;
    pG->m++;
    
}
/* them cung vao do thi - don do thi co huong, ko khuyen*/
void add_edge_4(Graph *pG, int u, int v){
	int i;
	if(u == v)
		return ;
	for(i = 0; i < pG->m; i++)
		if((pG->edges[i].u == u && pG->edges[i].v == v) || (pG->edges[i].u == v && pG->edges[i].v == u))
			return;
	pG->edges[pG->m].u = u;
    pG->edges[pG->m].v = v;
    pG->m++;
    
}
/* kiem tra dinh u co ke voi v, do thi vo huong*/
int adjacent_1(Graph *pG, int u, int v){
	int e;
	for(e = 0; e < pG->m; e++){
		if((pG->edges[e].u == u && pG->edges[e].v == v) || (pG->edges[e].u == v && pG->edges[e].v == u))
			return 1;
	}
	return 0;
}
/* kiem tra dinh u co ke voi v, do thi co huong*/
int adjacent_1(Graph *pG, int u, int v){
	int e;
	for(e = 0; e < pG->m; e++){
		if(pG->edges[e].u == u && pG->edges[e].v == v)
			return 1;
	}
	return 0;
}
/* tinh bac cua dinh u */
int degree(Graph *pG, int u){
	int deg_u = 0, i;
	for(i = 0; i < pG->m; i++){
		if(pG->edges[i].u == u)
			deg_u++;
		if(pG->edges[i].v == u)
			deg_u++;
	}
	return deg_u;
}
/* liet ke ca dinh ke trong do thi bat ki */
void neighbours_1(Graph *pG, int u){
	int v;
	for(v = 1; v <= pG->n; v++)
		if(adjacent(pG, u, v) != 0)
			printf("%d ", v);
aa}
/* liet ke cac dinh ke trong do thi co huog */
void neighbours_2(Graph *pG, int u){
	int e;
	for(e = 0; e < pG->m; e++)
		if(pG->edges[e].u == u)
			printf("%d ", pG->edges[e].v);
}

int main(int argc, char *argv[]) {

	
	return 0;
}

