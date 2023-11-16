// Question

/*
Write a function called isSubsequence which takes in two strings and checks whether the characters in the first string form a subsequence of the characters in the second string. In other words, the function should check whether the characters in the first string appear somewhere in the second string, without their order changing.
*/

// Example

/*
isSubsequence('hello', 'hello world'); // true
isSubsequence('sing', 'sting'); // true
isSubsequence('abc', 'abracadabra'); // true
isSubsequence('abc', 'acb'); // false (order matters)
*/

function isSubsequence(string1, string2) {
    if (string1.length > string2.length) return false;
    if (!string1) return true;

    let i = 0;

    for (let j = 0; j < string2.length; j++) {
        if (string1[i] === string2[j]) {
            i++;
        }
        if (i === string1.length) return true;
    }
    return false;
}

console.log(isSubsequence("hello", "hello world"));
console.log(isSubsequence("sing", "sting"));
console.log(isSubsequence("abc", "abracadabra"));
console.log(isSubsequence("abc", "acb"));

// Time Complexity : O(N + M)
// Space Complexity : O(1)
