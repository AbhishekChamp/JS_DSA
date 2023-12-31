// Question
/*
Given two strings, write a function to determine if the second string is an anagram of the first.
An anagram is a word, phase or name formed by rearranging the letters of another,
such as cinema, formed from iceman
*/

// Sample Output
/*
validAnagram('','') // true
validAnagram('aaz', 'zza') // false
validAnagram('anagram', 'nagaram') // true
validAnagram('rat, 'car') // false
validAnagram('awesome', 'awesom') // false
validAnagram('qwerty', 'qeywrt') // true
validAnagram('texttwisttime', 'timetwisttext') // true
*/

function validAnagram(str1, str2) {
    if (str1.length !== str2.length) {
        return false;
    }

    const lookup = {};

    for (let i = 0; i < str1.length; i++) {
        let letter = str1[i];
        lookup[letter] ? (lookup[letter] += 1) : (lookup[letter] = 1);
    }

    for (let i = 0; i < str2.length; i++) {
        let letter = str2[i];
        if (!lookup[letter]) {
            return false;
        } else {
            lookup[letter] -= 1;
        }
    }

    return false;
}

console.log(validAnagram("", ""));
console.log(validAnagram("aaz", "zza"));
console.log(validAnagram("anagram", "nagaram"));
console.log(validAnagram("rat", "car"));
console.log(validAnagram("awesome", "awesom"));
console.log(validAnagram("qwerty", "qeywrt"));
console.log(validAnagram("texttwisttime", "timetwisttext"));
