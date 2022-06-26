import graph from './graphData.js';

const BFS = (graph, start) => {
    const queue = [];
    const seen = [];
    queue.push(start);
    seen.push(start);
    const parent = new Map();
    parent.set(start, null);
    while (queue.length > 0) {
        let vertex = queue.shift();
        // 找到所有連結點
        let nodes = graph[vertex];
        // 若節點還沒有走過，則放入 queue 與 seen
        for (let i = 0; i < nodes.length; i++) {
            if (!seen.includes(nodes[i])) {
                queue.push(nodes[i]);
                seen.push(nodes[i]);
                parent.set(nodes[i], vertex);
            }
        }
    }
    return [seen, parent];
}

const findSmallestPath = (parents, v) => {
    const res = [];
    while (v !== null) {
        res.push(v);
        v = parents.get(v);
    }
    return res;
}

let [res, parent] = BFS(graph, "A");
// A B C D E F
console.log(res);
console.table(parent);
const s = findSmallestPath(parent, "D");
// D 到 A 的最短距離 
// D -> B -> A
console.log(s);

[res, ] = BFS(graph, "E");
// E C D A B F
console.log(res);