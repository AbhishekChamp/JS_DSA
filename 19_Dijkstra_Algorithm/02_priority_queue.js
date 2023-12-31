class PriorityQueue {
    constructor() {
        this.values = [];
    }
    enqueue(val, priority) {
        this.values.push({ val, priority });
        this.sort();
    }
    dequeue() {
        return this.values.shift();
    }
    sort() {
        this.values.sort((a, b) => a.priority - b.priority);
    }
}

const pq = new PriorityQueue();

pq.enqueue("B", 3);
pq.enqueue("C", 5);
pq.enqueue("D", 2);
pq.enqueue("Q", 20);

console.log(pq.values);
