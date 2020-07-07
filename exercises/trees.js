class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class Tree {
    constructor(root) {
        this.root = root;
    }
}

function inOrder(root) {
    if (root !== null) {
        inOrder(root.left);
        console.log(root.value);
        inOrder(root.right);
    }
}

function preOrder(root) {
    if (root !== null) {
        console.log(root.value);
        inOrder(root.left);
        inOrder(root.right);
    }
}

function postOrder(root) {
    if (root !== null) {
        inOrder(root.left);
        inOrder(root.right);
        console.log(root.value);
    }
}

const myTree = new Tree(new TreeNode(5));
myTree.root.left = new TreeNode(3);
myTree.root.right = new TreeNode(7);
myTree.root.right.left = new TreeNode(9);
myTree.root.right.right = new TreeNode(19);
myTree.root.left.right = new TreeNode(13);

console.log('---', inOrder(myTree.root));
console.log('---', postOrder(myTree.root));
console.log('---', postOrder(myTree.root));


