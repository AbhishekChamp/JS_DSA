### Linear Search Pseudocode

1. Function accepts an array and a value
2. Loop through the array and check if the current array element is equal to the value
3. If it is, return the index at which the element is found.
4. If the value is never found, return -1

### Binary Search

1. Binary search is a much faster form of search
2. Rather than eliminating, one element at a time, you can eliminate half of the remaining elements at a time
3. Binary search only works on sorted arrays

### Binary Search Pseudocode

1. This function accepts a sorted array and a value
2. Create a left pointer at the start of the array, and a right pointer at the end of the array
3. While the left pointer comes before the right pointer:
    1. Create a pointer in the middle
    2. If you find the value you want, return the index
    3. If the value is too small, move the left pointer up
    4. If the value is too large, move the right pointer down
4. If you never find the value, return -1
