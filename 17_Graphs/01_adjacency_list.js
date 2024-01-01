class Graph {
    constructor() {
        this.adjacencyList = {};
    }
    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    }
}

const g = new Graph();

g.addVertex("Tokyo");
console.log(g);

g.addVertex("Chennai");
console.log(g);

g.adjacencyList["Tokyo"].push("JAPAN");
console.log(g);

g.addVertex("Tokyo");
console.log(g);
