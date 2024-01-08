### What Is Dynamic Programming

A method for solving a complex problem by breaking it down into a collection of simpler subproblems, solving each of those subproblems just once, and storing their solutions.

### Overlapping Subproblems

A problem is said to have **overlapping subproblems** if it can be broken down into subproblems which are reused several times

### Fibonacci Sequence

Every number after the first two is the sum of the two preceding ones. It is an example for **_overlapping subproblems_**

### Optimal Substructure

A problem is said to have **_optimal substructure_** if an optimal solution can be constructed from optimal solutions of its subproblems

### Memoization

Storing the results of expensive function calls and returning the cached result when the same inputs occur again

### Tabulation

-   Storing the result of a previous result in a table (usually an array)
-   Usually done using **iteration**
-   Better **space complexity** can be achieved using tabulation
