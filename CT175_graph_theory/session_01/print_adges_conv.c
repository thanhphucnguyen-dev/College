#include <stdio.h>
#define MAX_M 100

typedef struct
{
  int n, m;
  int A[MAX_M][MAX_M];
} Graph;

void init_graph(Graph *pG, int n)
{
  int i, j;
  pG->n = n;
  pG->m = 0;
  // Khởi tạo ma trận kề với tất cả các giá trị bằng 0
  for (i = 0; i < n; i++)
    for (j = 0; j < n; j++)
      pG->A[i][j] = 0;
}

void add_edge(Graph *pG, int u, int v)
{
  // Tăng số lượng cung giữa u và v (do đồ thị vô hướng, A[u][v] == A[v][u])
  pG->A[u][v]++;
  // pG->A[v][u]++;
  pG->m++;
}

void read_matrix(Graph *pG)
{
  int n, k;
  scanf("%d", &n);
  init_graph(pG, n);

  // Đọc ma trận kề
  for (int i = 0; i < n; i++)
  {
    for (int j = 0; j < n; j++)
    {
      scanf("%d", &k);
      // Lặp k lần để thêm các cung vào ma trận kề
      while (k--)
        add_edge(pG, i, j);
    }
  }
}

void print_graph(Graph G)
{
  // Duyệt qua phần tam giác trên của ma trận kề để in các cung
  for (int i = 0; i < G.n; i++)
  {
    for (int j = i + 1; j < G.n; j++)
    {
      while (G.A[i][j]--)
        printf("%d %d\n", i + 1, j + 1);  // In các cung theo chỉ số từ 1
    }
  }
}

int main(int argc, char *argv[])
{
  Graph G;
  read_matrix(&G);  // Đọc ma trận kề và xây dựng đồ thị
  print_graph(G);   // In các cung của đồ thị
  return 0;
}
