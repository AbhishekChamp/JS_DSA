### What is a Stack?

-   A **LIFO** data structure!
-   The last element added to the stack will be the first element removed from the stack
-   Stacks are used to handle function invocations (the call stack), for operations like undo / redo, and for routing (remember pages you have visted and go back / forward) and much more
-   They are not a built in data structure in JavaScript, but are relatively simple to implement

### Where Stacks are used

-   Managing function
-   Undo / Redo
-   Routing (the history object) is treated like a stack!

### Array Implementation

-   We can use shift and unshift method or push and pop method.

### Pushing

Add a value to the top of the stack

### Pushing Pseudocode

-   The function should accept a value
-   Create a new node with that value
-   If there are no nodes in the stack, set the first and last property to be the newly created node
-   If there is at least one node, create a variable that stores the current first property on the stack
-   Reset the first property to be the newly created node
-   Set the next property on the node to be the previously created variable
-   Increment the size of the stack by 1

### Popping

Remove a value from the top of the stack

### Popping Pseudocode

-   If there are no nodes in the stack, return null
-   Create a temporary variable to store the first property on the stack
-   If there is only 1 node, set the first and last property to be null
-   If there is more than one node, set the first property to be the next property on the current first
-   Decrement the size by 1
-   Return the value of the node removed

### Big O of Stacks

-   Insertion - O(1)
-   Removal - O(1)
-   Searching - O(N)
-   Access - O(N)
