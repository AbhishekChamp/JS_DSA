class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    enqueue(val) {
        const newNode = new Node(val);
        if (!this.size) {
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last.next = newNode;
            this.last = newNode;
        }
        return ++this.size;
    }

    dequeue() {
        if (!this.size) return null;
        const dequeueNode = this.first;
        if (this.size === 1) {
            this.last = null;
        } else {
            this.first = this.first.next;
        }
        this.size--;
        return dequeueNode.val;
    }
}

const queue = new Queue();
console.log(queue.enqueue(4));
console.log(queue.enqueue(8));
console.log(queue.dequeue());
console.log(queue.dequeue());
