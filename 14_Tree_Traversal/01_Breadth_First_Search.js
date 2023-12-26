class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }
    insert(val) {
        const newNode = new Node(val);
        if (!this.root) {
            this.root = newNode;
            return this;
        } else {
            let current = this.root;
            while (true) {
                if (val === current.val) return undefined;
                if (val < current.val) {
                    if (!current.left) {
                        current.left = newNode;
                        return this;
                    }
                    current = current.left;
                } else if (val > current.val) {
                    if (!current.right) {
                        current.right = newNode;
                        return this;
                    }
                    current = current.right;
                }
            }
        }
    }
    find(val) {
        if (!this.root) return undefined;
        if (this.root.val === val) return this.root;
        let temp = this.root;
        while (true) {
            if (temp.val === val) return temp;
            if (temp.val < val) {
                if (!temp.right) return undefined;
                temp = temp.right;
            } else {
                if (!temp.left) return undefined;
                temp = temp.left;
            }
        }
    }
    contains(val) {
        if (!this.root) return false;
        if (this.root.val === val) return true;
        let temp = this.root;
        while (true) {
            if (temp.val === val) return true;
            if (temp.val < val) {
                if (!temp.right) return false;
                temp = temp.right;
            } else {
                if (!temp.left) return false;
                temp = temp.left;
            }
        }
    }
    BFS() {
        let node = this.root;
        const data = [];
        const queue = [];
        queue.push(node);

        while (queue.length) {
            node = queue.shift();
            data.push(node.val);
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
        return data;
    }
}

//         10
//      5       13
//  2     7    11   16

const BST = new BinarySearchTree();
console.log(BST.find(5));
BST.insert(10);
console.log(BST.find(10));
console.log(BST);
BST.insert(5);
console.log(BST);
BST.insert(13);
console.log(BST);
BST.insert(2);
console.log(BST);
BST.insert(7);
console.log(BST);
BST.insert(16);
console.log(BST);
BST.insert(11);
console.log(BST);
BST.insert(6);
console.log(BST);
console.log(BST.find(1));
console.log(BST.find(6));
console.log(BST.find(13));
console.log(BST.contains(1));
console.log(BST.contains(6));
console.log(BST.contains(13));
console.log(BST.BFS());
