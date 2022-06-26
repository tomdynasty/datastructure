import graph from './graphData.js';

const DFS = (graph, start) => {
    const stack = [];
    const seen = [];
    const res = [];
    stack.push(start);
    seen.push(start);
    while (stack.length > 0) {
        let vertex = stack.pop();
        // 找到所有連結點
        let nodes = graph[vertex];
        // 若節點還沒有走過，則放入 stack 與 seen
        for (let i = 0; i < nodes.length; i++) {
            if (!seen.includes(nodes[i])) {
                stack.push(nodes[i]);
                seen.push(nodes[i]);
            }
        }
        res.push(vertex)
    }
    return res;
}

let res = DFS(graph, "A");
//  A C E D F B
console.log(res);

res = DFS(graph, "E");
// E D F B A C
console.log(res);