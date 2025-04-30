#include <stdio.h>
#define MAX_N 100

typedef struct
{
  int n, m;
  int A[MAX_N][MAX_N];
} Graph;

void init_graph(Graph *pG, int n)
{
  pG->n = n;
  pG->m = 0;
  for (int i = 1; i <= n; i++)
    for (int j = 1; j <= n; j++) // Sửa lỗi ở đây
      pG->A[i][j] = 0;
}

void add_edge(Graph *pG, int u, int v)
{
  pG->A[u][v]++;
  pG->m++;
}

void read_matrix(Graph *pG)
{
  int n, k;
  scanf("%d", &n);
  init_graph(pG, n);
  for (int i = 1; i <= n; i++)
  {
    for (int j = 1; j <= n; j++)
    {
      scanf("%d", &k);
      while (k--)
        add_edge(pG, i, j);
    }
  }
}

void print_edges(Graph G)
{
  for (int u = 1; u <= G.n; u++)
  {
    for (int v = 1; v <= G.n; v++)
    {
      for (int i = 0; i < G.A[u][v]; i++)
        printf("%d %d\n", u, v);
    }
  }
}

int main()
{
  Graph G;
  read_matrix(&G);
  print_edges(G);
}
