# Hash Table

## Key Note

- Bucket: key-value
- Slot: key
- Collision: there are 2 or more than 2 data which hash function calculates the same key
- Overflow: Bucket is overflow

## What is a Hash Table?

- It maps keys to values which operates `lookup`, `insert`, `delete` in a efficient way.

- It is made up of 2 parts:
  - Object: an object with the table **where the data is stored**.
  - Hash function: it **determines the index of the key-value pair**. It should be a one-way function and produce the different hash for each key.

## Usage of hash tables

Constant time O(1)

- Databases indexing
- Caches
- Unique data representation
- Lookup in an unsorted array
- Lookup in sorted array using binary search

## Common Hash Functions

key --> `Hash function` -> index


- 除法(Mod/Division): 相除取餘數來當作雜湊值。
  ex: `4 % 11 = 4`
- 中間平方法(Middle Square): 值平方後，再取適當的中間位數作為雜湊值
  ex: `value: 235` 235*235=55225 => 取中間三位數，`雜湊值為 522`
- 折疊相加法(Folding Addition)
  - Shift(移位)
  ex: 一個大數值 987586265，拆分成 3段相加，987+586+265，雜湊值為1838。
  - Boundary(邊界)
  ex:一個大數值987586265，拆分成3段，可分為基數段反轉或偶數段反轉，偶數段反轉為: 987+685+265，雜湊值為1937。   

## Hash table collisions

- Sometimes a hash function can **generate the same index for more than one key**.        
- The scenario is referred to as hash collision.      
- And **the same key should have as less keys as possible**     

Below are the strategies which could handle most common case.

- `線性探測法(Linear Probing)`: 以線性方式往後尋找直到有空的 Bucket 為止
- `平方探測法(Quadratic Probing)`: 透過 (H(x) ± i²) mod b，b為bucket數，1 ≤ i ≤ (b-1)/2，用此公式去尋找其他有空的Bucket。
  1. 第一次尋找: (H(x) + 1²) mod b
  2. 第二次尋找: (H(x) - 1²) mod b
  3. 第三次尋找: (H(x) + 2²) mod b
  4. 第四次尋找: (H(x) - 2²) mod b…...以此類推。
- `Chaining`: use linked list to solve a key has multiple values
