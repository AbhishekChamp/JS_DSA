// Divide and Conquer - sortedFrequency
// Given a sorted array and a number, write a function called sortedFrequency that counts the occurrences of the number in the array
// Time Complexity - O(log n)

function sortedFrequency(arr, number) {
    let count = -1;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === number) {
            if (count === -1) count = 0;
            count += 1;
        } else if (arr[i] > number) {
            return count;
        }
    }
    return count;
}

console.log(sortedFrequency([1, 1, 2, 2, 2, 2, 3], 2)); // 4
console.log(sortedFrequency([1, 1, 2, 2, 2, 2, 3], 3)); // 1
console.log(sortedFrequency([1, 1, 2, 2, 2, 2, 3], 1)); // 2
console.log(sortedFrequency([1, 1, 2, 2, 2, 2, 3], 4)); // -1
