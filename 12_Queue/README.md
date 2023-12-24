### What is a Queue?

-   A **FIFO** data structure
-   The first element inserted in the queue will be the first element taken out

### How do we use them in programming

-   Background tasks
-   Uploading resources
-   Printing / Task processing

### Array Implementation

-   We can use push and shift or unshift and pop

### Enqueue

Add an element to the starting of the list

### Enqueue Pseudocode

-   This function accepts some value
-   Create a new node using that value passed to the function
-   If there are no nodes in the queue, set this node to be the first and last property of the queue
-   Otherwise, set the next property on the current last to be that node, and set the last property of the queue to be that node

### Dequeue

Remove an element from the end of the list

### Dequeue Pseudocode

-   If there is no first property, just return null
-   Store the first property in a variable
-   See if the first is the same as the last (check if there is only 1 node). If so, set the first and last to be null
-   If there is more than 1 node, set the first property to be the next property of first
-   Decrement the size by 1
-   Return the value of the node dequeued

### Big O of Queues

-   Insertion - O(1)
-   Removal - O(1)
-   Searching - O(N)
-   Access - O(N)
