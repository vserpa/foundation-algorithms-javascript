// FIFO - First in, first out

function Queue() {

    var items = [];

    // add element to queue
    this.enqueue = function(element) {
        items.push(element);
    }

    // remove element from queue
    this.dequeue = function() {
        return items.shift();
    }

    // return the first element of queue
    this.front = function() {
        return items[0];
    }

    // return true if queue is empty
    this.isEmpty = function() {
        return items.length === 0;
    }

    // return the queue length
    this.size = function() {
        return items.length;
    }
    
    // print the queue
    this.print = function() {
        console.log(items.toString());
    }

}

var queue = new Queue();

console.log('size: ' + queue.size());
console.log('empty: ' + queue.isEmpty());

console.log('add elements on queue');
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);

console.log('size: ' + queue.size());
console.log('empty: ' + queue.isEmpty());
console.log('the first element is: ' + queue.front());

console.log('remove an element');
queue.dequeue();

console.log('size: ' + queue.size());
console.log('empty: ' + queue.isEmpty());
console.log('the first element is: ' + queue.front());

queue.print();