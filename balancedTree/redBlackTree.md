# Red-Black Tree (紅黑樹)

也是平衡樹的一種，都可以在 `O(log n)` 時間內完成尋找、新增和刪除的動作。     
但紅黑樹相對於 `ALV-TREE`，**犧牲了部分平衡性**以換取新增、刪除的動作時少量的旋轉操作，
整理來說效能優於 `ALV-TREE`。

## 特性

- 任何一個節點非紅即黑
- 樹的根節點 (root) 為黑色
- 葉子 (leaf) 的節點 (NIL) 為黑色
- 每個紅色節點必須有兩個黑色的子節點 (不能有兩個連續的紅色節點)
- 從任一節點到每個 NIL 的所有簡單路徑，都包含相同數目的黑色節點

> 在紅黑樹定義中，葉子節點並不是沒有子節點的節點，而是最後的空值 (NULL) 節點，稱作 `NIL`

## 流程

1. 若沒有 root 節點
   - 新增節點
   - flip color to be black
2. 若有 root 節點，則找到葉子節點
   - 新增節點，並放到葉子節點的左方或者右方
   - 把葉子節點的左方或者右方的 parent，指向當前的 Z
   - Fixup (葉子節點的左方或者右方)

## Fixup / balance 策略

1. 插入 child Node，使其顏色變成 `RED`
2. Recolor & rotate nodes to fix violation
  - Z = root        -------> color black
  - Z.uncle = red   -------> recolor (grandparent, parent, uncle)
  - Z.uncle = black (triangle) -------> rotate Z.parent
  - Z.uncle = black (line) -------> rotate z.grandparent & recolor

## Fixup / balance code 細節

> Z as currentNode

1. (While) 判斷 `Z 的 parent is Red`，則代表踩到`不能有兩個連續的紅色節點的規則`，繼續 fix
  - Z 的 parent 在 Z 的 Grandparent 左側
    - 若 Uncle 為 RED，則 Flip color (G -> RED / P -> Black / U -> Black)
    - 若 Uncle 為 Black 且 Z 為 parent 的右邊，則需將 parent right rotation 再將    Grandparent left rotation
    - 若 Uncle 為 Black 且 Z 為 parent 的左邊，則需將 grandparent left rotation
  - Z 的 parent 在 Z 的 Grandparent 右側
    - (同上方相對應的架構) 
2. 把 `Z 指向 GrandParent`，讓 while 進入下一輪判斷
3. while loop 結束後，需調整 `root color to be Black`

## 參考影片
https://www.youtube.com/watch?v=qvZGUFHWChY&list=PL9xmBV_5YoZNqDI8qfOZgzbqahCUmUEin
