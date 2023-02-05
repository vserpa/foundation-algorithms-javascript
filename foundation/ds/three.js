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
  this.remove = function (key) {
    root = removeNode(root, key);
  };

  var removeNode = function (node, key) {
    if (node === null) {
      return null;
    }

    if (key < node.key) {
      node.left = removeNode(node.left, key);
      return node;
    } else if (key > node.key) {
      node.right = removeNode(node.right, key);
      return node;
    } else {
      if (node.left === null && node.right === null) {
        node = null;
        return node;
      }

      if (node.left === null) {
        node = node.right;
        return node;
      } else if (node.right === null) {
        node = node.left;
        return node;
      }

      var aux = findMinNode(node.right);
      node.key = aux.key;
      node.right = removeNode(node.right, aux.key);
      return node;
    }
  };

  // return the min key
  this.min = function (key) {
    return minNode(root);
  };

  var minNode = function (node) {
    if (node) {
      while (node && node.left !== null) {
        node = node.left;
      }

      return node.key;
    }

    return null;
  };

  var findMinNode = function (node) {
    while (node && node.left !== null) {
      node = node.left;
    }

    return node;
  };

  // return the max key
  this.max = function (key) {
    return maxNode(root);
  };

  var maxNode = function (node) {
    if (node) {
      while (node && node.right !== null) {
        node = node.right;
      }

      return node.key;
    }

    return null;
  };

  // visit all elements in traverse order
  this.inOrderTraverse = function (callback) {
    inOrderTraverseNode(root, callback);
  };

  var inOrderTraverseNode = function (node, callback) {
    if (node !== null) {
      inOrderTraverseNode(node.left, callback);
      callback(node);
      inOrderTraverseNode(node.right, callback);
    }
  };

  // visit all elements in traverse pre order
  this.preOrderTraverse = function (callback) {
    preOrderTraverseNode(root, callback);
  };

  var preOrderTraverseNode = function (node, callback) {
    if (node !== null) {
      callback(node);
      preOrderTraverseNode(node.left, callback);
      preOrderTraverseNode(node.right, callback);
    }
  };

  // visit all elements in traverse post order
  this.postOrderTraverse = function (callback) {
    postOrderTraverseNode(root, callback);
  };

  var postOrderTraverseNode = function (node, callback) {
    if (node !== null) {
      postOrderTraverseNode(node.left, callback);
      postOrderTraverseNode(node.right, callback);
      callback(node);
    }
  };
}

console.log("running three data structure");

var three = new BinarySearchThree();

three.insert(10);
three.insert(9);
three.insert(15);
three.insert(5);
