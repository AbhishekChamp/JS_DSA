### What is sorting

Sorting is the process of rearranging the items in a collection (eg: an array) so that the items are in some kind of order.

Examples:

-   Sorting numbers from smallest to largest
-   Sorting names alphabetically
-   Sorting movies based on release year
-   Sorting movies based on revenue

### Why do we need to learn this?

-   Sorting is an incredibly common task, so it's good to know how it works
-   There are many different ways to sort things, and different techniques have their own advantages and disadvantages

**_In javascript, the default sort order is according to string Unicode code points_**

### Telling Javascript how to sort

-   The built-in sort methods accepts an optional comparator function
-   You can use this comparator function to tell javascript how you want it to sort
-   The comparator looks at pairs of elements (a and b), determines their sort order based on return value
    -   If it returns a negative number, a should come before b
    -   If it returns a positive number, a should come after b
    -   If it returns 0, a and b are the same as far as the sort is concerned

### Bubble Sort

A sorting algorithm where the largest values bubble up to the top

### Bubble Sort Pseudocode

-   Start looping from with a variable called i the end of the array towards the beginning
-   Start an inner loop with a variable called j from the beginning until i - 1
-   If arr[j] is greater then arr[j+1], swap those two values
-   Return the sorted array
