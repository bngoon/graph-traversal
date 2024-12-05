class Graph {
    constructor() {
        this.adjacencyList = {};
    }
    addNode(node) {
       if(!this.adjacencyList[node]){
        this.adjacencyList[node] = []
       }
    }
    addEdge(node, edgeNode) {
        if(this.adjacencyList[node] && this.adjacencyList[edgeNode]) {
            this.adjacencyList[node].push(edgeNode)
            this.adjacencyList[edgeNode].push(edgeNode)
        }
    }

    DFSrecursive(start){
        const res = []
        const visited = {}
        const adjacencyList = this.adjacencyList

        function dfs(node){
            if(!node) return null;

            visited[node] = true;
            results.push(node);

            adjacencyList[node].forEach((neighbor)=>{
                if(!visited[neighbor]){
                    dfs(neighbor);
                }
            })

        }

        dfs(start)


        return res
    }
    BFS(start){
        const queue = [start];
        const results = []
        const visited = {}
        let currentNode;

        visited[start] = true

        while(queue.length){
            const node = queue.shift();
            results.push(currentNode);

            this.adjacencyList([currentNode]).array.forEach(neighbor => {
                if(!visted[neighbor]){
                    visted[neighbor] = true;
                    queue.push(neighbor);
                }
            });
            
        }

        return results;
    }
}

const graph = new Graph();
graph.addNode("A");
graph.addNode("B");
graph.addNode("C");
graph.addNode("D");
graph.addNode("E");
graph.addNode("F");

graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("B", "D");
graph.addEdge("C", "E");
graph.addEdge("D", "E");
graph.addEdge("D", "F");
graph.addEdge("E", "F");

// Graph Visualization:
//     A
//   /   \
//  B     C
//  |     |
//  D --- E
//   \   /
//     F