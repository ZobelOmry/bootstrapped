class Graph {
    constructor() {
        this.adjacencyList = {};
    }

    addEdge(from, to) {
        if (!this.adjacencyList[from]) throw `Vertex doesn't exist ${from}`;
        this.adjacencyList[from].push(to);
    }

    addVertex(value) {
        if (!this.adjacencyList[value]) {
            this.adjacencyList[value] = [];
            return;
        }
        throw 'Vertex exists';
    }

    BFS(startNode) {
        const visited = new Set();
        const queue = [];
        queue.push(startNode);
        visited.add(startNode);
        while (queue.length > 0) {
            const currentNode = queue.shift();
            console.log(currentNode);
            for (let neighbor of this.adjacencyList[currentNode]) {
                if (!visited.has(neighbor)) {
                    queue.push(neighbor);
                    visited.add(neighbor);
                }
            }
        }
    }

    DFS(node) {
        const visited = new Set();
        const recurseDFS = (node) => {
            console.log(node);
            visited.add(node);
            for (let neighbor of this.adjacencyList[node]) {
                if (!visited.has(neighbor)) {
                    recurseDFS(neighbor);
                }
            }
        }
        recurseDFS(node);
    }
}



const myGraph = new Graph();
myGraph.addVertex(1);
myGraph.addVertex(2);
myGraph.addVertex(3);
myGraph.addVertex(4);
myGraph.addVertex(5);
myGraph.addEdge(1, 2);
myGraph.addEdge(1, 3);
myGraph.addEdge(2, 4);
myGraph.addEdge(4, 5);
console.log(myGraph.BFS(1));
console.log('-------------');
console.log(myGraph.DFS(1));