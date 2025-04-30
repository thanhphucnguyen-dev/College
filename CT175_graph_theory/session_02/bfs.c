#include <stdio.h>
#include <stdlib.h>
#define MAX_N 100
/*CTDL QUEUE*/
struct Node{
	int data;
	struct Node* Next;
};
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
/*Xoa va tra ve phan tu dau hang doi*/
int dequeue(Queue *pQ){
	struct Node* temp;
	temp = pQ->Front;
	pQ->Front = pQ->Front->Next;
	free(temp);
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
	pG->A[u][v] += 1;
	if(u != v)
		pG->A[v][u] += 1;
	pG->m++;
}
/*NHap du lieu vao do thi*/
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
/*CTDL LIST*/
typedef struct{
	int data[MAX_N];
	int size;
}List;

void makeNullList(List *pL){
	pL->size = 0;
}

void push_back(List *pL, int x){
	pL->data[pL->size] = x;
	pL->size++;
}

int element_at(List *pL, int i){
	return pL->data[i-1];
}

List neighbors(Graph *pG, int x){
	List L;
	makeNullList(&L);
	int i;
	for(i = 1; i <= pG->n; i++){
		if(pG->A[i][x] == 1){
			push_back(&L, i);
		}
	}
	return L;
}


int mark[MAX_N];
/*Khoi tao mang mark*/
void init_mark(int n){
	int i;
	for(i = 1; i <= n; i++)	
		mark[i] = 0;
}
/*Duyet do thi theo chieu rong*/
List breath_first_search(Graph *pG, int s){
	Queue Q;
	make_null_queue(&Q);
	int i;
	List l_bfs;
	makeNullList(&l_bfs);
	enqueue(&Q, s);
	while(Q.Front != Q.Rear){
		int u = dequeue(&Q);
		if(!mark[u]){
			push_back(&l_bfs, u);
			mark[u] = 1;
			List L = neighbors(pG, u);
			for(i = 1; i <= L.size; i++){
				int v = element_at(&L, i);
				if(!mark[v]){
					enqueue(&Q, v);
				}
			}	
		}
		
	}
	return l_bfs;
}


int main(int argc, char *argv[]) {
	Graph G;
	read_graph(&G);
	List L;
	makeNullList(&L);
	init_mark(G.n);
	int u;
	for(u = 1; u <= G.n; u++)
		if(!mark[u]){
			printf("Duyet:\n");
			L = breath_first_search(&G, u);
			int i, v;
			for(i = 1; i <= L.size; i++){
				int v = element_at(&L, i);
				printf("%d\n", v);
				mark[v] = 1;
			}
				
		}
			
	return 0;
}
