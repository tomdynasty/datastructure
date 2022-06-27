import PriorityQueue from '../priority_queue/PriorityQueue.js';

const graph = {
    "A": {"B": 5, "C": 1},
    "B": {"A": 5, "C": 2, "D": 1},
    "C": {"A": 1, "B": 2, "D": 4, "E": 8},
    "D": {"B": 1,"C": 4,"E": 3,"F": 6},
    "E": {"C": 8, "D": 3},
    "F": {"D": 6},
};

const initShortest = (graph, start) => {
    const shortest = new Map();
    shortest.set(start, 0);
    for (let vertex in graph) {
        if (vertex !== start) {
            shortest.set(vertex, Number.MAX_SAFE_INTEGER)
        }
    }
    return shortest;
}

const dijkstra = (graph, start) => {
    const heapQueue = new PriorityQueue();
    heapQueue.enqueue(start, 0)
    const seen = [];
    // parent: use node's parent to find the smallest path
    // ex: F's parent is D, D'parent is A, A'parent is null
    // F->A smallest path: F -> D -> A
    const parent = new Map();
    parent.set(start, null);
    // 每一個節點到 start 的最短距離
    // ex: [A => 0]: A->A的最短距離是 0
    // ex: [B => 3]: B->A的最短距離是 3
    const shortest = initShortest(graph, start);

    while (heapQueue.items.length > 0) {
        let {element: vertex, priority: dist} = heapQueue.dequeue();
        seen.push(vertex);

        let nodes = Object.keys(graph[vertex])
        nodes.forEach((node) => {
            // 若沒被看過，則需放置到 priority queue
            if (!seen.includes(node)) {
                let addedDistance = dist + graph[vertex][node];
                let shortestDistance = shortest.get(node)
                if (addedDistance < shortestDistance) {
                    heapQueue.enqueue(node, addedDistance);
                    parent.set(node, vertex);
                    shortest.set(node, addedDistance);
                }
            }
        })

    }
    return [parent, shortest];
}

let [parent, shortest] = dijkstra(graph, "A");
console.log(parent);
console.log(shortest);