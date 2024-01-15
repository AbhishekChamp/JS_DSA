// Implement remove on the SinglyLinkedList class
// This function should remove a node at a specified index in a SinglyLinkedList. It should return the removed node. if the index is valid, or undefined if the index is invalid.

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

    remove(index) {
        if (index < 0 || index >= this.length) return undefined;
        if (index === 0) return this.shift();
        if (index === this.length - 1) return this.pop();
        const prevNode = this.get(index - 1);
        const removed = prevNode.next;
        prevNode.next = removed.next;
        this.length--;
        return removed;
    }
}

const singlyLinkedList = new SinglyLinkedList();
console.log(singlyLinkedList.push(5).push(10).push(15).push(20));
console.log(singlyLinkedList.remove(2).val); // 15
console.log(singlyLinkedList.remove(100)); // undefined
console.log(singlyLinkedList.length); // 3
console.log(singlyLinkedList.head.val); // 5
console.log(singlyLinkedList.head.next.val); // 10
console.log(singlyLinkedList.head.next.next.val); // 20
