// Divide and Conquer - countZeroes
// Given an array of 1s and 0s which has all 1s first followed by all 0s, write a function called countZeroes, which returns the number of zeroes in the array.

// Time Complexity - O(log n)

function countZeroes(arr) {
    const len = arr.length;
    let temp = 0;
    while (true) {
        if (arr[temp] === 0) return len - temp;
        if (temp > arr.length) return 0;
        temp += 1;
    }
}

console.log(countZeroes([1, 1, 1, 1, 0, 0])); // 2
console.log(countZeroes([1, 0, 0, 0, 0])); // 4
console.log(countZeroes([0, 0, 0])); // 3
console.log(countZeroes([1, 1, 1, 1])); // 0
