#include <stdio.h>
#include <stdlib.h>
#define MAX_N 100

struct Node{
	int data;
	struct Node* Next;
};
/*Cau truc ngan xep*/
typedef struct Node* Stack;
/*Tao ngan xep rong*/
void make_null_stack(Stack *pS){
	(*pS) = (struct Node*)malloc(sizeof(struct Node));
	(*pS)->Next = NULL;
}
/*Them phan tu vao ngan xep*/
void push(Stack *pS, int x){
	struct Node* newNode = (struct Node*)malloc(sizeof(struct Node));
	newNode->data = x;
	newNode->Next = (*pS)->Next;
	(*pS)->Next = newNode;
}
/*Xoa va tra ve phan tu cua ngan xep*/
int pop(Stack *pS){
	struct Node* temp = (*pS);
	(*pS) = (*pS)->Next;
	free(temp);
	return (*pS)->data;
}
/*CTDL GRAPH*/
typedef struct{
	int n, m;
	int A[MAX_N][MAX_N];
}Graph;
/*khoi tao do thi*/
void init_graph(Graph *pG, int n){
	int i, j;
	pG->n = n;
	pG->m = 0;
	for(i = 1; i <= n; i++)
		for(j = 1; j <= n; j++)
			pG->A[i][j] = 0;
}
/*Them cung vao do thi*/
void add_edge(Graph *pG, int u, int v){
	pG->A[u][v] += 1;
	if(u != v)
		pG->A[v][u] += 1;
	pG->m++;
}
/*Nhap du lieu vao do thi*/
void read_graph(Graph *pG){
	int e, n, m;
	freopen("dt.txt", "r", stdin);
	scanf("%d%d", &n, &m);
	init_graph(pG, n);
	for(e = 0; e < m; e++){
		int u, v;
		scanf("%d%d", &u, &v);
		add_edge(pG, u, v);
	}
}
int mark[MAX_N];
/*Khoi tao mang mark*/
void init_mark(int n){
	int i;
	for(i = 1; i <= n; i++)
		mark[i] = 0;
}
/*Duyet do thi theo chieu sau*/
void dfs(Graph *pG, int s){
	Stack S;
	make_null_stack(&S);
	push(&S, s);
	while(S->Next != NULL){
		int u = pop(&S);
		if(!mark[u]){
			mark[u] = 1;
			printf("%d\n", u);
			int v;
			for(v = pG->n; v >= 1; v--)
				if(pG->A[u][v] && !mark[v])
					push(&S, v);
		}
	}
}
int main(int argc, char *argv[]) {
	Graph G;
	read_graph(&G);
	/*1. Duyet tu dinh 1*/
	printf("Duyet tu dinh 1:\n");
	init_mark(G.n);
	dfs(&G, 1);
	
	/*2. Duyet tu dnh s bat ki*/
	init_mark(G.n);
	int s;
	scanf("%d", &s);
	printf("Duyet tu dinh %d:\n", s);
	dfs(&G, s);
	
	/*3. Duyet toan bo do thi*/
	printf("Duyet toan bo do thi:\n");
	init_mark(G.n);
	int u;
	for(u = 1; u <= G.n; u++)
		if(!mark[u])
			dfs(&G, u);
	
	return 0;
}
