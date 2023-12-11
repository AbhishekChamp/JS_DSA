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
    pop() {
        if (!this.head) return undefined;
        let current = this.head;
        let newTail = current;
        while (current.next) {
            newTail = current;
            current = current.next;
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return this;
    }
    shift() {
        if (!this.head) return undefined;
        const currentHead = this.head;
        this.head = currentHead.next;
        this.length--;
        return this;
    }
}

const list = new SinglyLinkedList();
console.log(list);
console.log(list.pop());
console.log(list.push("Hi"));
console.log(list.push("Hello"));
console.log(list.pop());
console.log(list.pop());
console.log(list.shift());
console.log(list.push("Hi"));
console.log(list.push("Hello"));
console.log(list.shift());
