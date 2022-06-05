# AVL Tree

## 平衡因子 BF (Balanced Factor)

- 在 AVL-Tree 中，每一節點的平衡因子為 ` 1、0 或 -1`。   
- 帶有平衡因子 `-2 或 2 的節點被認為是不平衡的`，需要重新平衡。

## 節點高度: 

> max(左子節點高, 右子節點高) + 1

若子節點為 null 時，則`高度視為 -1`，以下是節點範例
```
        A
     B     C
   D   E
 F 
``` 

- F Height: max(-1, -1) + 1 = 0
- D Height: max(0, -1) + 1 = 1
- E Height: max(-1, -1) + 1 = 0
- B Height: max(1, 0) + 1 = 2
- C Height: max(-1, -1) + 1 = 0
- A Height: max(2, 0) + 1 = 3

## 平衡因子計算

> 節點的平衡因子 = 左子樹的高度 - 右子樹的高度

```
        A
     B     C
   D   E
 F 
``` 

- F、E、C 沒有左、右子樹，所以左、右子樹高度為 -1
  ```
  BF = -1 - (-1) = 0
  ```
- D 左樹高度為 0、沒有右樹
  ```
  BF = 0 - (-1) = 1
  ```
- B 左樹高度為 1、右樹高度為 0 
  ```
  BF = 1 - 0 = 1
  ```
- A 左樹高度為 2、右樹高度為 0 
  ```
  BF = 2 - 0 = 2
  ```  
## 平衡操作

### 策略

`新增` / `刪除` 操作的平衡操作共有 2 種策略:
- 預判是否影響樹的平衡，先調整樹在執行新增 / 刪除。
- 執行新增 / 刪除後，在判斷樹是否需要執行平衡操作

### 調整方式

若是以策略第二點來新增節點為例，會有以下四種調整方式:

- LL 型
- RR 型
- LR 型
- RL 型

#### LL 型 與 RR 型

這兩種方式都是鏡像的，所以處理思路是一致的:

- `LL 型`: 當新增的節點在不平衡的節點的左側的左側
  - 對不平衡節點執行 **右旋轉**

- `RR 型`: 當新增的節點在不平衡的節點的右側的右側
  - 對不平衡節點執行 **左旋轉**

##### 不平衡 - 情況 1

```
    50
  40
 30   
```

向右旋轉達到平衡

```
    40
  30  50
```

##### 不平衡 - 情況 2

50 因為新增 20 導致 BF 變成 2，兒 20 位於 50 的左側的左側

```
            50
          /    \
        40     60 
       /  \   
     30    45 
    /
  20     
```

50 向右旋轉達到平衡

```
             40
          /      \
        30        50 
       /  \      /  \
     20         45   60       
```

#### LR 型 與 RL 型

這兩種方式都是鏡像的，所以處理思路是一致的:

- `LR 型`: 當新增的節點在不平衡的節點的左側的右側
  1. 先對不平衡節點的左子節點執行 **左旋轉**
  2. 再對不平衡節執行 **右旋轉**

- `RL 型`: 當新增的節點在不平衡的節點的右側的左側
  1. 先對不平衡節點的右子節點執行 **右旋轉**
  2. 再對不平衡節執行 **左旋轉**

##### LR 型的範例

###### 確認不平衡

50 因為新增 45 而導致 BF 變成 2，因此需要調整，而 30 位於 50 左側的右側

- 50 BF: 1 - (-1) = 2 (`unbalanced`)
- 40 BF: -1 - 0 = -1
- 45 BF: -1 - (-1) = 0
```
      50 (BF:2)
    /    \
  40 (BF:-1)
 /   \ 
      45(BF: 0)
```

###### 對不平衡節點的左子節點執行`左旋轉`

不平衡節點的左子節點為 45 向左旋轉，會變成 `LL 型`

```
     50
    /  \
   45
  /  \ 
40  
```

###### 再對不平衡節執行`右旋轉`

```
  45
 /  \
40  50 
```

## 參考網址

https://chupai.github.io/posts/2007/ds_avl-tree/