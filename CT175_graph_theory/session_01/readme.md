
# 📘 Biểu Diễn Đồ Thị Trong Lập Trình C

## 🎯 Mục Tiêu
- Hiểu và áp dụng các phương pháp **biểu diễn đồ thị** trong lập trình.
- Cài đặt cấu trúc dữ liệu đồ thị và các phép toán cơ bản bằng ngôn ngữ C.
- Chuẩn bị cho việc triển khai các thuật toán như BFS, DFS, Dijkstra, Kruskal, v.v.

---

## 🔍 Thông Tin Cơ Bản

Một **đồ thị** `G = (V, E)` bao gồm:
- **V**: Tập đỉnh
- **E**: Tập cạnh (đối với đồ thị vô hướng) hoặc tập cung (đối với đồ thị có hướng)

### 🎨 Phân loại đồ thị
| Loại               | Mô tả                                      |
|--------------------|---------------------------------------------|
| Đồ thị vô hướng     | Cạnh (u, v) ≡ (v, u)                        |
| Đồ thị có hướng     | Cung (u, v): từ u đến v                    |
| Đồ thị đơn          | Không có đa cung hoặc cạnh khuyết          |
| Đồ thị đa cung      | Có thể có nhiều cung giữa cùng 2 đỉnh      |

---

## 📊 Các Phương Pháp Biểu Diễn

### 1. 🔢 Ma Trận Kề (Adjacency Matrix)

#### ✅ Mô tả
- Sử dụng ma trận `A[n+1][n+1]`
- Nếu tồn tại cung từ `u` đến `v` thì `A[u][v] = số lượng cung`

#### ✅ Cấu trúc C

```c
#define MAX_N 100

typedef struct {
    int n, m;
    int A[MAX_N][MAX_N];
} Graph;
```

#### ✅ Ưu điểm
- Truy cập nhanh (O(1)) để kiểm tra cạnh
- Dễ lập trình

#### ❌ Nhược điểm
- Tốn bộ nhớ: O(n²)
- Không tối ưu cho đồ thị thưa

---

### 2. 📋 Danh Sách Cung (Edge List)

#### ✅ Mô tả
- Lưu từng cung dưới dạng cặp `(u, v)` trong mảng

#### ✅ Cấu trúc C

```c
#define MAX_M 500

typedef struct {
    int u, v;
} Edge;

typedef struct {
    int n, m;
    Edge edges[MAX_M];
} Graph;
```

#### ✅ Ưu điểm
- Gọn nhẹ
- Dễ dùng với thuật toán Kruskal

#### ❌ Nhược điểm
- Truy vấn cạnh O(m)
- Không tối ưu khi cần liệt kê các đỉnh kề

---

### 3. 🧾 Danh Sách Kề (Adjacency List)

#### ✅ Mô tả
- Mỗi đỉnh lưu danh sách các đỉnh kề với nó (vector hoặc danh sách liên kết)

#### ✅ Cấu trúc C (giả lập bằng mảng)

```c
#define MAX_N 100

typedef struct {
    int data[MAX_N];
    int size;
} List;

typedef struct {
    int n, m;
    List adj[MAX_N];
} Graph;
```

#### ✅ Ưu điểm
- Tiết kiệm bộ nhớ, đặc biệt cho đồ thị thưa
- Truy vấn nhanh các đỉnh kề của đỉnh `u`

#### ❌ Nhược điểm
- Phải sử dụng các cấu trúc dữ liệu phức tạp như danh sách liên kết hoặc vector

---

## 🔧 Các Phép Toán Cơ Bản Trên Đồ Thị

### 1. Khởi Tạo Đồ Thị (init_graph)
Khởi tạo đồ thị với số đỉnh `n` và số cạnh `m`. Ví dụ với ma trận kề, tất cả các phần tử `A[i][j]` sẽ được gán bằng `0`.

### 2. Kiểm Tra Cạnh (adjacent)
Kiểm tra xem có tồn tại cạnh (u, v) trong đồ thị hay không.

### 3. Thêm Cạnh (add_edge)
Thêm một cạnh từ đỉnh `u` đến đỉnh `v` vào đồ thị.

### 4. Xóa Cạnh (remove_edge)
Xóa một cạnh từ đỉnh `u` đến đỉnh `v` khỏi đồ thị.

### 5. Tìm Đỉnh Kề (neighbors)
Trả về danh sách các đỉnh kề với đỉnh `u`.

### 6. Tính Bậc Của Đỉnh (degree)
Trả về bậc của đỉnh `u` (số lượng các đỉnh kề với đỉnh `u`).

---

## 📚 Ví Dụ Cấu Trúc Đồ Thị Với Ma Trận Kề

```c
#include <stdio.h>

#define MAX_N 100

typedef struct {
    int n, m;
    int A[MAX_N][MAX_N];
} Graph;

void init_graph(Graph *pG, int n) {
    pG->n = n;
    pG->m = 0;
    for (int i = 1; i <= n; i++)
        for (int j = 1; j <= n; j++)
            pG->A[i][j] = 0;
}

void add_edge(Graph *pG, int u, int v) {
    pG->A[u][v]++;
    pG->m++;
}

void print_graph(Graph G) {
    for (int i = 1; i <= G.n; i++) {
        for (int j = 1; j <= G.n; j++) {
            printf("%d ", G.A[i][j]);
        }
        printf("
");
    }
}

int main() {
    Graph G;
    init_graph(&G, 5);  // Khởi tạo đồ thị với 5 đỉnh
    add_edge(&G, 1, 2);
    add_edge(&G, 1, 3);
    add_edge(&G, 3, 4);
    print_graph(G);
}
```

---

## 🔑 Tổng Kết

Việc hiểu và áp dụng các phương pháp biểu diễn đồ thị là rất quan trọng trong việc giải quyết các bài toán về đồ thị. Chọn phương pháp biểu diễn phù hợp giúp tối ưu hóa bộ nhớ và thời gian xử lý cho các thuật toán trên đồ thị.
