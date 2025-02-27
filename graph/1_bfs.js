function bfs(network, start, end){
    let queue = [[start]]
    let visited = new Set()
    visited.add(start);

    while(queue.length > 0){
        let path = queue.shift();
        let node = path[path.length-1];

        if (node===end) {
            return path;
        }

        for(let neighbour of network[node]){
            if(!visited.has(neighbour)){
                visited.add(neighbour);
                queue.push([...path, neighbour]);
            }
        }
    }
    return null;
}

const network = {
    "A": ["B", "C"],
    "B":["A", "D", "E"],
    "C":["A", "F"],
    "D":["B"],
    "E":["B", "F"],
    "F":["C", "E"]
}

console.log(bfs(network, "A", "F")) // ["A", "C", "F"]