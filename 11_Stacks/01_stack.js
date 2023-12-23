class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    push(val) {
        const newNode = new Node(val);
        if (!this.size) {
            this.first = newNode;
            this.last = newNode;
        } else {
            let temp = this.first;
            this.first = newNode;
            this.first.next = temp;
        }
        return ++this.size;
    }

    pop() {
        if (!this.size) return null;
        const temp = this.first;
        if (this.first === this.last) {
            this.last = null;
        } else {
            this.first = temp.next;
            temp.next = null;
        }
        this.size--;
        return temp.val;
    }
}

const stack = new Stack();
console.log(stack.push(8));
console.log(stack.push(9));
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
