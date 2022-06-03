# Sorting

## Summary of Internal Sorting (主記憶體裡)

No one method is the best under all circumstances.

### Insertion Sort

It is quite good when the list is already partially ordered.
And it is the best for small n.

### Merge Sort

It has the best worst-case behavior but it needs more storage than heap sort.

### Quick Sort

It has the best average behavior, but its worst-case behavior is O($n^2$).

The behavior of radix sort depends on the size of the keys and the choice of r.

## Complexity Comparison of Sort methods

Method        | Worst | Average |
--------------|:-----:|-----:|
Insertion Sort   | $n^2$ |  $n^2$ |
Heap Sort   | n log n | n log n |
Merge Sort   | n log n | n log n |
Quick Sort  | $n^2$ | n log n |
Radix Sort  | (n+r)log) | $(n+r)log{_rk}$ |

k: input data 之最大數
r: 以 r 為基數 (radix)

## Summary of External Sorting

The lists to be sorted are too large to be contained totally in the internal memory.
Thus, internal sorting is impossible.

- on a disk
- Block: unit of data read from or written to a disk at one time.
         A block generally consists of several records.
- read / write time of disks:      
  - seek time 搜尋時間: 把讀寫頭移到正確磁軌 (track, cylinder)
  - latency time 延遲時間: 把正確的磁區 (sector) 轉到讀寫頭下
  - transmission time 傳輸時間: 把資料區塊傳入 / 讀書磁碟
