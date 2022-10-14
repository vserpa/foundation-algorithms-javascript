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

function hotPotato(nameList, num) {
    var queue = new Queue();

    for (var i = 0; i < nameList.length; i++) {
        queue.enqueue(nameList[i]);
    }

    var eliminated = '';

    while (queue.size() > 1) {
        for (var i = 0; i < num; i++) {
            queue.enqueue(queue.dequeue());
        }
        eliminated = queue.dequeue();
        console.log(eliminated + ' was eliminated from the Hot Potato game!');
    }

    return queue.dequeue();
}

var nameList = ['Paula', 'Solange', 'Fabiana', 'Vanessa', 'Gabi', 'Simone'];
var result = hotPotato(nameList, 3);
console.log('The winner is ' + result);