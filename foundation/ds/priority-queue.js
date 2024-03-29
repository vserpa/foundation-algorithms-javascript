function PriorityQueue() {
    var items = [];

    function QueueElement(element, priority) {
        this.element = element;
        this.priority = priority;
    }

    this.enqueue = function(element, priority) {
        var queueElement = new QueueElement(element, priority);
        var added = false;

        for (var i = 0; i < items.length; i++) {
            if (queueElement.priority < items[i].priority) {
                items.splice(i, 0, queueElement);
                added = true;
                break;
            }
        }

        if (!added) {
            items.push(queueElement);
        }
    }

    this.dequeue = function() {
        return items.shift();
    }

    this.print = function() {
        for (var i = 0; i < items.length; i++) {
            console.log(items[i].element + ' ' + items[i].priority);
        }
    }
}

var pqueue = new PriorityQueue();

pqueue.enqueue('Eduardo', 2);
pqueue.enqueue('Ana', 1);
pqueue.enqueue('Luciano', 1);
pqueue.enqueue('Marinho', 3);

pqueue.print();