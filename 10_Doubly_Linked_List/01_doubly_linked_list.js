class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val) {
        const newNode = new Node(val);
        if (this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    pop() {
        if (!this.head) return undefined;
        const poppedNode = this.tail;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = poppedNode.prev;
            this.tail.next = null;
            poppedNode.prev = null;
        }
        this.length--;
        return poppedNode;
    }

    shift() {
        if (this.length === 0) return undefined;
        const oldHead = this.head;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = oldHead.next;
            this.head.prev = null;
            oldHead.next = null;
        }
        this.length--;
        return oldHead;
    }

    unshift(val) {
        const newNode = new Node(val);
        if (this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }

    get(index) {
        if (index < 0 || index >= this.length) return null;
        let count, current;
        if (index <= this.length / 2) {
            count = 0;
            current = this.head;
            while (count !== index) {
                current = current.next;
                count++;
            }
        } else {
            count = this.length - 1;
            current = this.tail;
            while (count !== index) {
                current = current.prev;
                count--;
            }
        }
        return current;
    }

    set(index, val) {
        const currentNode = this.get(index);
        if (!currentNode) return false;
        currentNode.val = val;
        return true;
    }

    insert(index, val) {
        if (index < 0 || index > this.length) return false;
        if (index === 0) return !!this.unshift(val);
        if (index === this.length) return !!this.push(val);

        const prevNode = this.get(index - 1);
        const nextNode = prevNode.next;
        const newNode = new Node(val);

        prevNode.next = newNode;
        newNode.prev = prevNode;

        newNode.next = nextNode;
        nextNode.prev = newNode;
        this.length++;
        return true;
    }

    remove(index) {
        if (index < 0 || index >= this.length) return undefined;
        if (index === 0) return this.shift();
        if (index === this.length - 1) return this.pop();

        const removeNode = this.get(index);
        const prevNode = removeNode.prev;
        const nextNode = removeNode.next;

        prevNode.next = nextNode;
        nextNode.prev = prevNode;
        removeNode.next = null;
        removeNode.prev = null;

        this.length--;
        return removeNode;
    }

    print() {
        const arr = [];
        let current = this.head;
        while (current) {
            arr.push(current.val);
            current = current.next;
        }
        return arr;
    }
}

const DDL = new DoublyLinkedList();

console.log(DDL.print());

DDL.push(10);
console.log(DDL.print());
DDL.push(5);
DDL.push(20);
DDL.push(25);
console.log(DDL.print());
DDL.pop();
console.log(DDL.print());
DDL.shift();
console.log(DDL.print());
DDL.unshift(1);
console.log(DDL.print());
DDL.push(30);
DDL.push(40);
console.log(DDL.print());
console.log(DDL.get(-1));
console.log(DDL.get(10));
console.log(DDL.get(2));
console.log(DDL.get(4));
DDL.set(1, 10);
DDL.set(-1, 100);
console.log(DDL.print());
DDL.insert(0, 0);
console.log(DDL.print());
DDL.insert(6, 50);
console.log(DDL.print());
DDL.insert(2, 5);
console.log(DDL.print());
DDL.remove(0);
console.log(DDL.print());
DDL.remove(6);
console.log(DDL.print());
DDL.remove(1);
console.log(DDL.print());
