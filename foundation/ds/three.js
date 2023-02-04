function BinarySearchThree() {
  var Node = function (key) {
    this.key = key;
    this.left = null;
    this.right = null;
  };

  var root = null;

  // insert a key
  this.insert = function (key) {
    var newNode = new Node(key);

    if (!this.root) {
      this.root = newNode;
      return newNode;
    }

    var currentNode = this.root;

    while (currentNode) {
      if (newNode.key < currentNode.key) {
        if (!currentNode.left) {
          currentNode.left = newNode;
          return newNode;
        }
        currentNode = currentNode.left;
      } else {
        if (!currentNode.right) {
          currentNode.right = newNode;
          return newNode;
        }
        currentNode = currentNode.right;
      }
    }
  };

  this.insertRecursive = function (key) {
    var newNode = new Node(key);
    if (root === null) {
      root = newNode;
    } else {
      insertNodeRecursive(root, newNode);
    }
  };

  var insertNodeRecursive = function (node, newNode) {
    if (newNode.key < node.key) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        insertNodeRecursive(node.left, newNode);
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        insertNodeRecursive(node.right, newNode);
      }
    }
  };

  // search a key
  this.search = function (key) {
    return searchNode(root, key);
  };

  var serchNode = function (node, key) {
    if (node === null) {
      return false;
    }

    if (key < node.key) {
      return searchNode(node.left, key);
    } else if (key > node.key) {
      return searchNode(node.right, key);
    } else {
      return true;
    }
  };

  // remove a key
  this.remove = function (key) {};

  // return the min key
  this.min = function (key) {};

  // return the max key
  this.max = function (key) {};

  // visit all elements in traverse order
  this.inOrderTraverse = function () {};

  // visit all elements in traverse pre order
  this.preOrderTraverse = function () {};

  // visit all elements in traverse post order
  this.postOrderTraverse = function () {};
}

console.log("running three data structure");

var three = new BinarySearchThree();

three.insert(10);
three.insert(9);
three.insert(15);
three.insert(5);
