// Implement set on the SinglyLinkedList class
// This function should accept an index and a value and update the value of the node in the SinglyLinkedList at the index with the new value. It should return true if the node is updated successfully, or false if an invalid index is passed in.

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
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
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
    set(index, val) {
        if (index >= 0 && index <= this.length) {
            let counter = 0;

            let current = this.head;

            while (counter < index) {
                current = current.next;

                counter++;
            }

            current.val = val;

            return true;
        } else {
            return false;
        }
    }
}

const singlyLinkedList = new SinglyLinkedList();

singlyLinkedList.set(0, 10); // true
singlyLinkedList.set(1, 2); // true
singlyLinkedList.length; // 2
singlyLinkedList.head.val; // 10

singlyLinkedList.set(10, 10); // false

singlyLinkedList.set(3, 100); // true
singlyLinkedList.head.next.next.next.val; // 10
