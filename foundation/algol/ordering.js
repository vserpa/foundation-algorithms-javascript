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

  this.selectionSort = function () {
    var indexMin;
    for (var i = 0; i < array.length - 1; i++) {
      indexMin = i;

      for (var j = i; j < array.length; j++) {
        if (array[indexMin] > array[j]) {
          indexMin = j;
        }
      }

      if (i !== indexMin) {
        swap(array, i, indexMin);
      }
    }
  };

  this.insertionSort = function () {
    var j, temp;
    for (var i = 1; i < array.length; i++) {
      j = i;
      temp = array[i];
      while (j > 0 && array[j - 1] > temp) {
        array[j] = array[j - 1];
        j--;
      }
      array[j] = temp;
    }
  };

  // Divide and conquer
  this.mergeSort = function () {
    array = mergeSortRecursive(array);
  };

  var mergeSortRecursive = function (array) {
    var len = array.length;

    if (len === 1) {
      return array;
    }

    var mid = Math.floor(len / 2);
    var left = array.slice(0, mid);
    var right = array.slice(mid, len);

    return merge(mergeSortRecursive(left), mergeSortRecursive(right));
  };

  var merge = function (left, right) {
    var result = [];
    var il = 0;
    var ir = 0;

    while (il < left.length && ir < right.length) {
      if (left[il] < right[ir]) {
        result.push(left[il++]);
      } else {
        result.push(right[ir++]);
      }
    }

    while (il < left.length) {
      result.push(left[il++]);
    }

    while (ir < right.length) {
      result.push(right[ir++]);
    }

    return result;
  };

  this.quickSort = function () {
    quick(array, 0, array.length - 1);
  };

  var quick = function (array, left, right) {
    var index;

    if (array.length > 1) {
      index = partition(array, left, right);
      if (left < index - 1) {
        quick(array, left, index - 1);
      }
      if (index < right) {
        quick(array, index, right);
      }
    }
  };

  var partition = function (array, left, right) {
    var pivot = array[Math.floor((right + left) / 2)];

    var i = left;
    var j = right;

    while (i <= j) {
      while (array[i] < pivot) {
        i++;
      }
      while (array[j] > pivot) {
        j--;
      }
      if (i <= j) {
        swap(array, i, j);
        i++;
        j--;
      }
    }

    return i;
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

// al.insert(8);
// al.insert(7);
// al.insert(6);
// al.insert(5);
// al.insert(4);
// al.insert(3);
// al.insert(2);
// al.insert(1);

console.log(al.toString());

// al.bubbleSort();
// al.bubbleSortInverse();
// al.selectionSort();
// al.insertionSort();
// al.mergeSort();
al.quickSort();

console.log(al.toString());
