### Dijkstra Algorithm

-   One of the most famous and widely used algorithms around!
-   Finds the shortest path between two vertices on a graph.
-   Exampls : What's the fastest way to get from point A to point B?

### Why Is It Useful

-   GPS -finding fastest route
-   Network Routing - finds open shortest path for data
-   Biology - used to model the spread of viruses among humans
-   Airline tickets - finding cheapest route to your destination
-   Biology - used to model the spread of viruses among humans
-   Many other uses!

### The Approach

-   Every time we look to visit a new node, we pick the node with the smallest known distance to visit first.
-   Once we've moved to the node we're going to visit, we look at each of its neighbors.
-   For each neighboring node, we calculate the distance by summing the total edges that lead to the node we're checking from the starting node
-   If the new total distance to a node is less than the previous total, we store the new short distance for that node.

### Dijkstra's Pseudocode

-   This function should accept a starting and ending vertex
-   Create an function (we'll call it distances) and set each key to be every vertex in the adjacency list with a value of infinity, except for the starting vertex which should have a value of 0
-   After setting a value in the distances object, add each vertex with a priority of infinity to the priority queue, except the starting vertex, which should have a priority of 0 because that's where we begin
-   Create another object called previous and set each key to be every vertex in the adjacency list with a value of null
-   Start looping as long as there is anything in the priority queue
    -   dequeue a vertex from the priority queue
    -   If that vertex is the same as the ending vertex - we are done!
    -   Otherwise loop through each value in the adjacency list at that vertex
        -   Calculate the distance to that vertex from the starting vertex
        -   If the distance is less than what is currently stored in our distance object
            -   Update the distance object with new lower distance
            -   Update the previous object to contain that vertex
            -   Enqueue the vertex with the total distance from the start node
