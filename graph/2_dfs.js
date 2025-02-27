function dfs(graph, start_node){
    let stack = [start_node]
    let visited = new Set();

    while(stack.length > 0){
        let node = stack.pop();

        if(!visited.has(node)){
            console.log(node)
            visited.add(node)

            for(let neighbour of graph[node].reverse()){
                stack.push(neighbour)
            }
        }
    }
}

const graph = {
    "A": ["B", "C"],
    "B": ["A", "D", "E"],
    "C": ["A", "F"],
    "D": ["B"],
    "E": ["B", "F"],
    "F": ["C", "E"]
};


dfs(graph, "A")