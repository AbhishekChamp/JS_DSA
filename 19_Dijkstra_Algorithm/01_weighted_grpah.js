class WeightedGraph {
    constructor() {
        this.adjacencyList = {};
    }
    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    }
    addEdge(vertex1, vertex2, weight) {
        this.adjacencyList[vertex1].push({ node: vertex2, weight });
        this.adjacencyList[vertex2].push({ node: vertex1, weight });
    }
}

const wg = new WeightedGraph();

wg.addVertex("A");
wg.addVertex("B");
wg.addVertex("C");
wg;

wg.addEdge("A", "B", 9);
console.log(wg.adjacencyList);

wg.addEdge("A", "C", 5);
console.log(wg.adjacencyList);

wg.addEdge("B", "C", 7);
console.log(wg.adjacencyList);
