### What Are Graphs

-   A **graph data structure** consists of a finite (and possibly mutable) set of vertices or nodes or points, together with a set of unordered pairs of these vertices for an undirected **graph** or a set of ordered pairs for a directed **graph**
-   Graphs have **node** + **connections**

### Some Uses For Graphs

-   Social Networks
-   Location / Mapping
-   Routing Algorithms
-   Visual Hierarchy
-   File System Optimizations

### Essential Graph Terms

-   **Vertex -** a node
-   **Edge -** connection between nodes
-   **Weighted/Unweighted -** values assigned to distances between vertices
-   **Directed/Undirected -** directions assigned to distanced between vetrices

### Types Of Graphs

-   Unweighted Undirected Graph
-   Weighted Undirected Graph
-   Weighted Directed Graph
-   Unweighted Directed Graph

### Adjacency Matrix

| **-** | **A** | **B** | **C** | **D** | **E** | **F** |
| ----- | ----- | ----- | ----- | ----- | ----- | ----- |
| **A** | 0     | **1** | 0     | 0     | 0     | **1** |
| **B** | **1** | 0     | **1** | 0     | 0     | 0     |
| **C** | 0     | **1** | 0     | **1** | 0     | 0     |
| **D** | 0     | 0     | **1** | 0     | **1** | 0     |
| **E** | 0     | 0     | 0     | **1** | 0     | **1** |
| **F** | **1** | 0     | 0     | 0     | **1** | 0     |

### Adjacency List

```json
{
    "A": ["B", "F"],
    "B": ["A", "C"],
    "C": ["B", "D"],
    "D": ["C", "E"],
    "E": ["D", "F"],
    "F": ["E", "A"]
}
```

### Differences AND BIG O

**|V|** - number of vertices
**|E|** - number of edges

| **OPERATION** | **ADJACENCY LIST** | **ADJANCY MATRIX** |
| ------------- | ------------------ | ------------------ |
| Add Vertex    | O(1)               | O(\|V^2\|)         |
| Add Edge      | O(1)               | O(1)               |
| Remove Vertex | O(\|V\| + \|E\|)   | O(\|V^2\|)         |
| Remove Edge   | O(\|E\|)           | O(1)               |
| Query         | O(\|V\| + \|E\|)   | O(1)               |
| Storage       | O(\|V\| + \|E\|)   | O(\|V^2\|)         |

| **Adjacency List**                         | **Adjacency Matrix**                  |
| ------------------------------------------ | ------------------------------------- |
| Can take up less space (in sparese graphs) | Takes up more space (in sparse space) |
| Faster to iterate over all edges           | Slower to iterate over all edges      |
| Can be slower to lookup specific edge      | Faster to lookup specific edge        |

### Adjacency List Graph Class

```js
class Graph {
    constructor() {
        this.adjacencyList = {};
    }
}
```

**_We are building an undirected graph_**

### Adding a Vertex

-   Write a method called addVertex, which accepts a name of a vertex
-   It should add a key to the adjacency list with the name of the vertex and set its value to be an empty array

```js
g.addVertex("Tokyo")
/* The above code snippet will result in */
{
    "Tokyo": []
}
```

### Adding An Edge

-   This function should accept two vertices, we can call them vertex1 and vertex2
-   The function should find in the adjacency list the key of vertex1 and push vertex2 to the array
-   The function should find in the adjacency list the key of vertex2 and push vertex1 to the array
-   Don't worry about handling errors / invalid vertices

```js
{
    "Tokyo": [],
    "Dallas": [],
    "Aspen": []
}

q.addEdge("Tokyo", "Dallas")

{
    "Tokyo": ["Dallas"],
    "Dallas": ["Tokyo"],
    "Aspen": []
}

q.addEdge("Dallas", "Aspen")

{
    "Tokyo": ["Dallas"],
    "Dallas": ["Tokyo", "Aspen"],
    "Aspen": []
}
```

### Removing An Edge

-   This function should accept two vertices, we'll call them vertex1 and vertex2
-   The function should reassign the key of vertex1 to be an array that does not contain vertex2
-   The function should reassign the key of vertex2 to be an array that does not contain vertex1
-   Don't worry about handling errors / invalid vertices

```js
{
    "Tokyo": ["Dallas"],
    "Dallas": ["Tokyo", "Aspen"],
    "Aspen": ["Dallas"]
}

q.removeEdge("Tokyo", "Dallas")

{
    "Tokyo": [],
    "Dallas": ["Aspen"],
    "Aspen": ["Dallas"]
}
```

### Removing A Vertex

-   The function should accept a vertex to remove
-   The function should loop as long as there are any other vertices in the adjancy list for that vertex
-   Inside of the loop, call our **removeEdge** function with the vertex we are removing and any values in the adjacency list for that vertex
-   Delete the key in the adjacency list for that vertex

```js
{
    "Tokyo": ["Dallas"],
    "Dallas": ["Tokyo", "Aspen"],
    "Aspen": ["Dallas"]
}

q.removeVertex("Tokyo")

{
    "Dallas": ["Aspen"],
    "Aspen": ["Dallas"]
}
```
