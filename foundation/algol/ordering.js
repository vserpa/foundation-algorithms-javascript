function ArrayList() {
  var array = [];

  this.insert = function (item) {
    array.push(item);
  };

  this.toString = function () {
    return array.join();
  };

  // simple to implement, poor performance
  this.bubbleSort = function () {
    for (var i = 0; i < array.length - 1; i++) {
      for (var j = 0; j < array.length - 1; j++) {
        if (array[j] > array[j + 1]) {
          swap(array, j, j + 1);
        }
      }
    }
  };

  this.bubbleSortInverse = function () {
    for (var i = 0; i < array.length - 1; i++) {
      for (var j = 0; j < array.length - 1; j++) {
        if (array[j] < array[j + 1]) {
          swap(array, j, j + 1);
        }
      }
    }
  };

  var swap = function (array, index1, index2) {
    var aux = array[index1];
    array[index1] = array[index2];
    array[index2] = aux;
  };
}

var al = new ArrayList();

al.insert(9);
al.insert(7);
al.insert(4);
al.insert(3);
al.insert(6);
al.insert(8);
al.insert(1);
al.insert(5);
al.insert(2);

console.log(al.toString());
al.bubbleSort();
console.log(al.toString());
al.bubbleSortInverse();
console.log(al.toString());
