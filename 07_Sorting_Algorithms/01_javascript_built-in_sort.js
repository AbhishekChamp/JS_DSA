/*
1. The built-in sort methods accepts an optional comparator function
2. You can use this comparator function to tell javascript how you want it to sort
3. The comparator looks at pairs of elements (a and b), determines their sort order based on return value
    1. If it returns a negative number, a should come before b
    2. If it returns a positive number, a should come after b
    3. If it returns 0, a and b are the same as far as the sort is concerned
*/

function decendingSort(num1, num2) {
    return num2 - num1;
}

function asscendingSort(num1, num2) {
    return num1 - num2;
}

arr = [6, 4, 15, 10];
console.log(arr.sort(decendingSort));
console.log(arr.sort(asscendingSort));
