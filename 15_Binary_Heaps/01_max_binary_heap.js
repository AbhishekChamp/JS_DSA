class MaxBinaryHeap {
    constructor() {
        this.values = [];
    }
    insert(element) {
        this.values.push(element);
        this.bubbleUp();
        return this.values;
    }
    bubbleUp() {
        let idx = this.values.length - 1;
        const element = this.values[idx];
        while (idx > 0) {
            let parentIdx = Math.floor((idx - 1) / 2);
            let parent = this.values[parentIdx];
            if (element <= parent) break;
            this.values[parentIdx] = element;
            this.values[idx] = parent;
            idx = parentIdx;
        }
    }
}

const heap = new MaxBinaryHeap();
console.log(heap.insert(44));
console.log(heap.insert(39));
console.log(heap.insert(12));
console.log(heap.insert(55));
console.log(heap.insert(14));
console.log(heap.insert(48));
console.log(heap.insert(40));
console.log(heap.insert(34));
console.log(heap.insert(46));
