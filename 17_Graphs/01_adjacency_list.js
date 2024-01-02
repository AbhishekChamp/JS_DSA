class Graph {
    constructor() {
        this.adjacencyList = {};
    }
    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    }
    addEdge(vertex1, vertex2) {
        this.adjacencyList[vertex1].push(vertex2);
        this.adjacencyList[vertex2].push(vertex1);
    }
    removeEdge(vertex1, vertex2) {
        this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
            (val) => val !== vertex2,
        );
        this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
            (val) => val !== vertex1,
        );
    }
    removeVertex(vertex) {
        while (this.adjacencyList[vertex].length) {
            const adjacencyVertex = this.adjacencyList[vertex].pop();
            console.log(adjacencyVertex);
            this.removeEdge(vertex, adjacencyVertex);
        }
        delete this.adjacencyList[vertex];
    }
}

const g = new Graph();

g.addVertex("Tokyo");
g;

g.addVertex("Chennai");
g;

g.addVertex("USA");
g.adjacencyList["Tokyo"].push("USA");
g;

g.addVertex("Tokyo");
g;

g.addEdge("Chennai", "Tokyo");
g;

g.removeEdge("Chennai", "Tokyo");
g;

g.addEdge("Chennai", "Tokyo");
g;

g.removeVertex("Tokyo");
g;
