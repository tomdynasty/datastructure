## BFS (Breadth First Search)

使用 Queue，保證一層一層取得節點資訊

```
    B --- D 
  / |    /| \
A   |   / |  F
  \ | /   |
    C --- E
```

1. A -> queue[B, C]
2. B -> queue[C, D]
3. C -> queue[D, E]
4. D -> queue[E, F]
5. E 有的節點都已經找過了，所以直接 shift
6. E -> queue [F]
7. F -> queue []
8. Done

A -> B -> C -> D -> E -> F

## DFS (Depth First Search)

使用 Stack

```
    B --- D 
  / |    /| \
A   |   / |  F
  \ | /   |
    C --- E
```

1. 把 A 放到 stack("A")
2. pop 最上的資料，也就是 A，取得他所有的連結點
3. 把 A 所有的連結點放到 stack("C", "B")
4. pop 最上的資料，也就是 B，取得他所有的連結點，且不包含在 stack 裡面的
5. 把 B 所有的連結點放到 stack ("C", "D")
6. pop D -> stack ("C")
7. push E, F -> stack ("C,"E",F")
8. pop F -> stack ("C", "E")，但 F 沒有任何連結點，繼續 pop stack 裡的資料
9. pop E -> stack ("C")
10. pop C -> stack()
11. stack 的長度為空，結束迴圈

A -> B -> D -> F -> E -> C
