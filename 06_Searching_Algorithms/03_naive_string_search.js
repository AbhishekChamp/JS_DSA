/*
Write a function called naiveSearch which accepts two strings and find the number of occurance of the shorter string in the longest string.
*/

// Example

/*
naiveSearch("lorie loled", "lol") // 1
*/

function naiveSearch(str1, str2) {
    let count = 0;
    let long_str;
    let short_str;
    if (str1.length > str2.length) {
        long_str = str1;
        short_str = str2;
    } else {
        long_str = str2;
        short_str = str1;
    }
    for (let i1 = 0; i1 < long_str.length; i1++) {
        for (let i2 = 0; i2 < short_str.length; i2++) {
            if (short_str[i2] !== long_str[i1 + i2]) break;
            if (i2 === short_str.length - 1) count++;
        }
    }
    return count;
}

console.log(naiveSearch("lorie loled", "lol"));
