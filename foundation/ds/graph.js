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
