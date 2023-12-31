### What Is A Hash Table?

-   Hash tables are used to store **_key-value_** pairs.
-   They are like arrays, but the keys are not ordered.
-   Unlike arrays, hash tables are fast for all of the following operations : finding values, adding new values, and removing values!

### Hash Tables In The Wild

-   Python has **Dictionaries**
-   JS has **Objects** and **Maps**
-   Java, Go and Scala have **Maps**
-   Ruby has **Hashes**

### The Hash Part

-   To implement a hash table, we'll be using an array
-   In order to look up values by key, we need a way to **_convert keys into valid array indices_**
-   A function that performs this task is called a **_hash function_**

### Prime Numbers In Hash

-   The prime number in the hash is helpful in spreading out the keys more uniformly.
-   It's also helpful if the array that you're putting values into has a prime length.

### Dealing with Collisions

-   Even with a large array and a great hash functions, collisions are inevitable
-   Some of the strategies are:
    -   Separate Chaining
    -   Linear Probing

### Separate Chaining

With **_separate chaining,_** at each index in our array we store values using a more sophisticated data structure (e.g. an array or a linked list)

### Linear Probing

-   With **_linear probing,_** when we find a collision, we search through the array to find the next empty slot.
-   Unlike with separate chaining, this allows us to store a single key-value at each index.

### Set / Get

##### Set

-   Accepts a key and a value
-   Hashes the key
-   Stores the key-value pair in the hash table array via a separate chaining

##### Get

-   Accepts a key
-   Hashes the key
-   Retrieves the key-value pair in the hash table
-   If the key isn't found, returns undefined

### Keys / Values

##### Keys

Loops through the hash table array and returns an array of keys in the table

##### Values

Loops through the hash table array and returns an array of values in the table

### Big O Of Hash Tables

-   Insertion - O(1)
-   Deletion - O(1)
-   Access - O(1)
