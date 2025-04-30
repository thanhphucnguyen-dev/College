#include <stdio.h>
#include <stdlib.h>
#define MAX_N 100
typedef struct{
	int key, parent;
}ElementType;
struct Node{
	ElementType data;
	struct Node* Next;
};

/*CTDL STACK*/
typedef struct Node* Stack;
/*Khoi tao ngan xep rong*/
void make_null_stack(Stack *pS){
	(*pS) = (struct Node*)malloc(sizeof(struct Node));
	(*pS)->Next = NULL;
}
/*Them phan tu vao ngan xep*/
void push(Stack *pS, int x){
	
}
int main(int argc, char *argv[]) {
	return 0;
}
