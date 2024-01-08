// Implement pop on the SinglyLinkedList class
// This function should remove a node at the end of the SinglyLinkedList. It should return the node removed.

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val) {
        const newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            const tempNode = this.tail;
            tempNode.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    pop() {
        // YOUR CODE GOES HERE
        if (!this.length) return undefined;
        let prev = null;
        let current = this.head;
        while (current.next !== null) {
            prev = current;
            current = current.next;
        }
        this.tail = prev;
        this.length--;
        this.length === 0 ? (this.head = null) : (prev.next = null);
        return current;
    }
}

const singlyLinkedList = new SinglyLinkedList();

console.log(singlyLinkedList.push(5)); // console.log(singlyLinkedList
console.log(singlyLinkedList.length); // 1
console.log(singlyLinkedList.head.val); // 5
console.log(singlyLinkedList.tail.val); // 5

console.log(singlyLinkedList.push(10)); // console.log(singlyLinkedList
console.log(singlyLinkedList.length); // 2
console.log(singlyLinkedList.head.val); // 5
console.log(singlyLinkedList.head.next.val); // 10
console.log(singlyLinkedList.tail.val); // 10

console.log(singlyLinkedList.push(15)); // console.log(singlyLinkedList
console.log(singlyLinkedList.length); // 3
console.log(singlyLinkedList.head.val); // 5
console.log(singlyLinkedList.head.next.val); // 10
console.log(singlyLinkedList.head.next.next.val); // 15
console.log(singlyLinkedList.tail.val); // 15

console.log(singlyLinkedList.pop().val); // 15
console.log(singlyLinkedList.tail.val); // 10
console.log(singlyLinkedList.length); // 2
console.log(singlyLinkedList.pop().val); // 10
console.log(singlyLinkedList.length); // 1
console.log(singlyLinkedList.pop().val); // 5
console.log(singlyLinkedList.length); // 0
console.log(singlyLinkedList.pop()); // undefined
console.log(singlyLinkedList.length); // 0
