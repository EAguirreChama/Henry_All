// Solucion 1
function SolveGraph (graph, start, end, visited = []) {
  // Your code here:
  if(visited.includes(start)) return;
  visited.push(start)

  for(const node of graph[start]){
  if(node === end) return true;
  if(SolveGraph(graph, start, end, visited)) return true;
  }
  return false;
}

module.exports = SolveGraph

// Solucion 2
function SolveGraph2 (graph, start, end, visited = {}) {
  // Your code here:
  if(visited[start]) return;
  visited[start] = true;

  for(const node of graph[start]){
  if(node === end) return true;
  if(SolveGraph(graph, start, end, visited)) return true;
  }
  return false;
}

module.exports = SolveGraph2