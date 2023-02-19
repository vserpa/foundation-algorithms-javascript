function binary_search(orderedArray, target) {
  let prior = 0;
  let last = orderedArray.length - 1;

  while (prior <= last) {
    let mid = Math.floor((prior + last) / 2);

    if (target === orderedArray[mid]) {
      return mid;
    }

    if (target < orderedArray[mid]) {
      last = mid - 1;
    } else {
      prior = mid + 1;
    }
  }

  return null;
}

let orderedArray = [1, 2, 5, 9, 10, 12, 15, 16, 19, 20];
console.log("### Binary Search ###");
console.log(binary_search(orderedArray, 12));
