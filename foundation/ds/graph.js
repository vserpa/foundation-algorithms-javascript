function Dictionary() {
  var items = {};

  this.set = function (key, value) {
    items[key] = value;
  };

  this.delete = function (key) {
    if (this.has(key)) {
      delete items[key];
      return true;
    }

    return false;
  };

  this.has = function (key) {
    return items.hasOwnProperty(key);
  };

  this.get = function (key) {
    return items[key];
  };

  this.clear = function () {
    items = {};
  };

  this.size = function () {
    return Object.keys(items).length;
  };

  this.keys = function () {
    return Object.keys(items);
  };

  this.values = function () {
    return Object.values(items);
  };
}

function Queue() {
  var items = [];

  // add element to queue
  this.enqueue = function (element) {
    items.push(element);
  };

  // remove element from queue
  this.dequeue = function () {
    return items.shift();
  };

  // return the first element of queue
  this.front = function () {
    return items[0];
  };

  // return true if queue is empty
  this.isEmpty = function () {
    return items.length === 0;
  };

  // return the queue length
  this.size = function () {
    return items.length;
  };

  // print the queue
  this.print = function () {
    console.log(items.toString());
  };
}

function Graph() {
  var vertex = [];
  var adjList = new Dictionary();

  this.addVertex = function (v) {
    vertex.push(v);
    adjList.set(v, []);
  };

  this.addEdge = function (v, w) {
    adjList.get(v).push(w);
    adjList.get(w).push(v);
  };

  this.toString = function () {
    var s = "";
    for (const v of vertex) {
      s += v + " -> ";
      var neighbors = adjList.get(v);
      for (const n of neighbors) {
        s += n + " ";
      }
      s += "\n";
    }
    return s;
  };

  var initializeColor = function () {
    var color = [];
    for (const v of vertex) {
      color[v] = "white";
    }
    return color;
  };

  // white = exists, gray = discovered, black = eliminated
  this.bfs = function (v, callback) {
    var color = initializeColor();
    var queue = new Queue();
    queue.enqueue(v);

    while (!queue.isEmpty()) {
      var discoveredVertex = queue.dequeue();
      var neighbors = adjList.get(discoveredVertex);
      color[discoveredVertex] = "gray";

      // check all connected vertex to enqueue new vertex
      for (const neighbor of neighbors) {
        // accept only neighbors that not was discovered
        if (color[neighbor] === "white") {
          color[neighbor] = "gray";
          queue.enqueue(neighbor);
        }
      }

      // eliminates current vertex
      color[discoveredVertex] = "black";
      callback(discoveredVertex);
    }
  };
}

function printNode(value) {
  console.log("Visited vertex: " + value);
}

console.log("graph");

var graph = new Graph();
var myVertex = ["A", "B", "C", "D", "E", "F", "G", "H", "I"];
for (const e of myVertex) {
  graph.addVertex(e);
}

graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("A", "D");
graph.addEdge("C", "D");
graph.addEdge("C", "G");
graph.addEdge("D", "G");
graph.addEdge("D", "H");
graph.addEdge("B", "E");
graph.addEdge("B", "F");
graph.addEdge("E", "I");

console.log(graph.toString());

graph.bfs(myVertex[0], printNode);
