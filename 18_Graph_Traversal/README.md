### Graph Traversal

**Visiting** / **Updating** / **Checking** each vertex in a graph

### Graph Traversal Uses

-   Peer to peer networking
-   Web crawlers
-   Finding "closest" matches
-   Finding recommendations
-   Shortest path problems
    -   GPS Navigation
    -   Solving mazes
    -   AI (shortest path to win the game)

### DFS Recursive

-   The function should accept a starting node
-   Create a list to store the end result, to be returned at the very end
-   Create an object to store visited vertices
-   Create a helper function which accepts a vertex
    -   The helper function should return early if the vertex is empty
    -   The helper function should place the vertex it accepts into the visited object and push that vertex into the result array
    -   Loop over all of the values in the adjacencyList for that vertex
    -   If any of those values have not been visited, recursively invoke the helper function with that vertex
-   Invoke the helper function with the starting vertex
-   Return the result array

```
DFS-recursive(vertex):
    if vertex is empty
        return (this is base case)
    add vertex to results list
    mark vertex as visted
    for each neighbor in vertex's neighbors:
        if neighbor is not visited:
            recursively call DFS on neighbor
```

### DFS Iterative

-   The function should accept a starting node
-   Create a stack to help use keep of vertices (use a list / array)
-   Create a list to store the end result, to be returned at the very end
-   Create an object to store visited vertices
-   Add the starting vertex to the stack, and mark it visited
-   While the stack has something in it:
    -   Pop the next vertex from the stack
    -   If that vertex hasn't been visited yet:
        -   Mark it as visited
        -   Add it to the result list
        -   Push all of its neighbors into the stack
    -   Return the result array

```
DFS-iterative(start):
    let S be a stack
    S.push(start)
    while S is not empty
        vertex = S.pop()
        if vertex is not labeled as discovered:
            visit vertex (add to result list)
            label vertex as discovered
            for each of vertex's neighbors, N do
                S.push(N)
```

### Breadth First Traversal

-   This function should accept a starting vertex
-   Create a queue (you can use an array) and place the starting vertex in it
-   Create an array to store the nodes visited
-   Create an object to store nodes visited
-   Mark the starting vertex as visited
-   Loop as long as there is anything in the queue
-   Remove the first vertex from the queue and push it into the array that stores nodes visited
-   Loop over each vertex in the adjacency list for the vertex you are visiting
-   If it is not inside the object that stores nodes visited, mark it as visited and enqueue that vertex
-   Once you have finished looping, return the array of visited nodes
