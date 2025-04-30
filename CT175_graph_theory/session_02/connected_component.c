#include <stdio.h>
#include <stdlib.h>
#define MAX_N 100
struct Node{
	int data;
	struct Node* Next;
};
/*CTDL QUEUE*/
typedef struct{
	struct Node *Front, *Rear;
}Queue;
/*Khoi tao hang doi rong*/
void make_null_queueu(Queue *pQ){
	struct Node* Header = (struct Node*)malloc(sizeof(struct Node));
	Header->Next = NULL;
	pQ->Front = Header;
	pQ->Rear = Header;
}
/*Them phan tu vao hang doi*/
void enqueue(Queue *pQ, int x){
	pQ->Rear->Next = (struct Node*)malloc(sizeof(struct Node));
	pQ->Rear = pQ->Rear->Next;
	pQ->Rear->data = x;
	pQ->Rear->Next = NULL;
}
/*xoa va tra ve phan tu dau hang doi*/
int dequeue(Queue *pQ){
	struct Node* tmp;
	tmp = pQ->Front;
	pQ->Front = pQ->Front->Next;
	free(tmp);
	return pQ->Front->data;
}

/*CTDL GRAPH*/
typedef struct{
	int n, m;
	int A[MAX_N][MAX_N];
}Graph;
/*Khoi tao do thi*/
void init_graph(Graph *pG, int n){
	int i, j;
	pG->n = n;
	pG->m = 0;
	for(i = 1; i <= n; i++)
		for(j = 1; j <= n; j++)
			pG->A[i][j] = 0;
}

/*them cung vao do thi*/
void add_edge(Graph *pG, int u, int v){
	pG->A[u][v] = 1;
	pG->A[v][u] = 1;
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
/*Khoi tao lai mang mark*/
void init_mark(int n){
	int i;
	for(i = 1; i <= n; i++)
		mark[i] = 0;
}
/*Duyet do thi theo chieu rong*/
int bfs(Graph *pG, int s){
	Queue Q;
	make_null_queueu(&Q);
	enqueue(&Q, s);
	int count_u = 0;
	while(Q.Front != Q.Rear){
		int u = dequeue(&Q);
		if(!mark[u]){
			mark[u] = 1;
			count_u++;
			int v;
			for(v = 1; v <= pG->n; v++)
				if(pG->A[u][v] && !mark[v])
					enqueue(&Q, v);
		}
	}
	return count_u;
}


int main(int argc, char *argv[]) {
	Graph G;
	read_graph(&G);
	int i;
	/*1. Dem so bo phan lien thong*/
	init_mark(G.n);
	int count = 0;
	for(i = 1; i <= G.n; i++){
		if(!mark[i]){
			bfs(&G, i);
			count++;
		}
	}
	printf("%d\n", count);
	/*2. Dem so dinh cua bo phan lien thong cua dinh 1*/
	init_mark(G.n);
	printf("%d\n", bfs(&G, 1));
	/*3. Dem so bo phan lien thong cua dinh s */
	init_mark(G.n);
	int s;
	scanf("%d", &s);
	printf("%d\n", bfs(&G, s));
	/*4. Bo phan lien thong co nhieu dinh nhat */
	init_mark(G.n);
	int max = 0;
	for(i = 1; i <= G.n; i++){
		int t = bfs(&G, i);
		if(t > max)
			max = t;
	}
	printf("%d\n", max);
	return 0;
}
