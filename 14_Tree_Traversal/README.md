### Traversing A Tree

There are two ways:

-   Breadth-First Search
-   Depth-First Search
    -   PreOrder
    -   PostOrder
    -   InOrder

### Breadth-First Search

##### Steps - Iteratively

-   Create a queue (this can be an array) and a variable to store the values of nodes visited
-   Place the root node in the queue
-   Loop as long as there is anything in the queue
    -   Dequeue a node from the queue and push the value of the node into the variable that stores the nodes
    -   If there is a left property on the node dequeued - add it to the queue
    -   If there is a right property on the node dequeued - add it to the queue

### Depth-First Search [PreOrder]

##### Steps - Recursively

-   Create a variable to store the values of nodes visited
-   Store the root of the BST in a variable called current
-   Write a helper function which accepts a node
    -   Push the value of the node to the variable that stores the values
    -   If the node has a left property, call the helper function with left property on the node
    -   If the node has a right property, call the helper function with right property on the node
-   Invoke the helper function with the current variable
-   Return the array of values

### Depth-First Search [PostOrder]

##### Steps - Recursively

-   Create a variable to store the values of nodes visited
-   Store the root of the BST in a variable called current
-   Write a helper function which accepts a node
    -   If the node has a left property, call the helper function with the left property on the node
    -   If the node has a right property, call the helper function with the right property on the node
    -   Push the value of the node to the variable that stores the values
    -   Invoke the helper function with the current variable
-   Return the array of values

### Depth-First Search [InOrder]

##### Steps - Recursively

-   Create a variable to store the values of nodes visited
-   Store the root of the BST in a variable called current
-   Write a helper function which accepts a node
    -   If the node has a left property, call the helper function with the left property on the node
    -   Push the value of the node to the variable that stores the values
    -   If the node has a right property, call the helper function with the right property on the node
-   Invoke the helper function with the current variable
-   Return the array of values
