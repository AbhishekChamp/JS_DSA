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
