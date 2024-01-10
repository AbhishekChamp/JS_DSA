// Implement insert on the SinglyLinkedList class
// This should insert a node at a specified index in a SinglyLinkedList. It should return true if the index is valid, and false if the index is invalid (less than 0 or greater than the length of the list).

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

    get(index) {
        if (index < 0 || index >= this.length) return null;
        let counter = 0;
        let current = this.head;
        while (counter !== index) {
            current = current.next;
            counter++;
        }
        return current;
    }

    insert(index, val) {
        // YOUR CODE GOES HERE
        if (index < 0 || index > this.length) return false;
        if (index === 0) return !!this.push(val);
        const currentNode = this.get(index);
        const prevNode = this.get(index - 1);
        const newNode = new Node(val);
        prevNode.next = newNode;
        newNode.next = currentNode;
        this.length++;
        if (index + 1 === this.length) {
            this.tail = newNode;
        }
        return true;
    }
}

const singlyLinkedList = new SinglyLinkedList();
console.log(singlyLinkedList.push(5).push(10).push(15).push(20));
console.log(singlyLinkedList.insert(2, 12)); // true
console.log(singlyLinkedList.insert(100, 12)); // false
console.log(singlyLinkedList.length); // 5
console.log(singlyLinkedList.head.val); // 5
console.log(singlyLinkedList.head.next.val); // 10
console.log(singlyLinkedList.head.next.next.val); // 12
console.log(singlyLinkedList.head.next.next.next.val); // 15
console.log(singlyLinkedList.head.next.next.next.next.val); // 20

console.log(singlyLinkedList.insert(5, 25)); // true
console.log(singlyLinkedList.head.next.next.next.next.next.val); //25
console.log(singlyLinkedList.tail.val); // 25
