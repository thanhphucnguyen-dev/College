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
void make_null_queue(Queue *pQ){
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
/*Them cung vao do thi*/
void add_edge(Graph *pG, int u, int v){
	pG->A[u][v] = 1;
	pG->A[v][u] = 1;
	pG->m++;
}

/*Nhap do thi*/
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
/*Duyet do thi theo chieu rong*/
void bfs(Graph *pG, int s){
 	Queue Q;
 	make_null_queue(&Q);
 	enqueue(&Q, s);
 	while(Q.Front != Q.Rear){
 		int u = dequeue(&Q);
 		if(!mark[u]){
 			mark[u] = 1;
 			int v;
 			for(v = 1; v <= pG->n; v++)
 				if(pG->A[u][v] && !mark[v])
 					enqueue(&Q, v);
		}
	 }
 }
 
int connected(Graph *pG){
	int i;
	for(i = 1; i <= pG->n; i++){
		mark[i] = 0;
	}
	bfs(pG, 1);
	for(i = 1; i <= pG->n; i++)
		if(mark[i] == 0)
			return 0;
	return 1;
}
int main(){
	Graph G;
	read_graph(&G);
	printf(connected(&G) ? "CONNECTED" : "DISCONNECTED");
	return 0;
}
