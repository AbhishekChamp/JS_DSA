// Implement rotate on the SinglyLinkedList class
// This function should rotate all the nodes in the list by some number passed in. For instance, if your list looks like 1 -> 2 -> 3 -> 4 -> 5 and you rotate by 2, the list should be modified to 3 -> 4 -> 5 -> 1 -> 2. The number passed in to rotate can be any integer.
// Time Complexity: O(N), where N is the length of the list.
// Space Complexity: O(1)

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

    rotate(num) {
        num = num % this.length;
        if (num < 0) {
            num = num + this.length;
        }

        while (num > 0) {
            let current = this.head;
            this.head = this.head.next;
            this.tail.next = current;
            this.tail = current;
            current.next = null;
            num--;
        }
        return this;
    }
}

const singlyLinkedList_1 = new SinglyLinkedList();
singlyLinkedList_1.push(5).push(10).push(15).push(20).push(25);
singlyLinkedList_1.head.val; // 5
singlyLinkedList_1.tail.val; // 25;

singlyLinkedList_1.rotate(3);
singlyLinkedList_1.head.val; // 20
singlyLinkedList_1.head.next.val; // 25
singlyLinkedList_1.head.next.next.val; // 5
singlyLinkedList_1.head.next.next.next.val; // 10
singlyLinkedList_1.head.next.next.next.next.val; // 15
singlyLinkedList_1.tail.val; // 15
singlyLinkedList_1.tail.next; // null

const singlyLinkedList_2 = new SinglyLinkedList();
singlyLinkedList_2.push(5).push(10).push(15).push(20).push(25);
singlyLinkedList_2.head.val; // 5
singlyLinkedList_2.tail.val; // 25;

singlyLinkedList_2.rotate(-1);
singlyLinkedList_2.head.val; // 25
singlyLinkedList_2.head.next.val; // 5
singlyLinkedList_2.head.next.next.val; // 10
singlyLinkedList_2.head.next.next.next.val; // 15
singlyLinkedList_2.head.next.next.next.next.val; // 20
singlyLinkedList_2.tail.val; // 20
singlyLinkedList_2.tail.next; // null

const singlyLinkedList_3 = new SinglyLinkedList();
singlyLinkedList_3.push(5).push(10).push(15).push(20).push(25);
singlyLinkedList_3.head.val; // 5
singlyLinkedList_3.tail.val; // 25;

singlyLinkedList_3.rotate(1000);
singlyLinkedList_3.head.val; // 5
singlyLinkedList_3.head.next.val; // 10
singlyLinkedList_3.head.next.next.val; // 15
singlyLinkedList_3.head.next.next.next.val; // 20
singlyLinkedList_3.head.next.next.next.next.val; // 25
singlyLinkedList_3.tail.val; // 25
singlyLinkedList_3.tail.next; // null
