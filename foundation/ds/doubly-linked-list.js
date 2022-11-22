function DoublyLinkedList() {

    var Node = function(element) {
        this.element = element;
        this.next = null;
        this.prior = null;
    }

    var length = 0;
    var head = null;
    var tail = null;

    // add an element on the end of the list
    this.append = function(element) {
        
        var node = new Node(element);

        if (!head) {
            head = node;
        } else {
            var current = head;
            while (current.next) {
                current = current.next;
            }
            current.next = node;
            node.prior = current;
        }

        tail = node;
        length++;
    }

    // add an element in a specific position
    this.insert = function(position, element) {
        if (position < 0 || position > length) {
            return false;
        }

        var node = new Node(element);
        var current = head;
        var prior = null;
        var index = 0;

        if (position === 0) {
            if (current) {
                node.next = current;
                current.prior = node;
            } else {
                tail = node;
            }
            head = node;
            length++;
            return true;
        }

        while (index < length) {

            prior = current;
            current = current.next;
            index++;

            if (position === index) {
                node.prior = prior;
                node.next = current;
                prior.next = node;
                if (current) {
                    current.prior = node;
                } else {
                    tail = node;
                }

                length++;
                return true;
            }
        }

        return false;
    }

    // remove element from a specific position
    this.removeAt = function(position) {
        
    }

    // remove a element
    this.remove = function(element) {
        var prior = null;
        var current = head;
        
        while (current) {
            var deleteCurrent = false;

            if (current.element === element) {
                if (prior) {
                    prior.next = current.next;
                    deleteCurrent = true;
                } else {
                    head = current.next;
                }

                length--;
            }

            if (!deleteCurrent) {
                prior = current;
            }

            current = current.next;
        }
    }

    // return the element position
    this.indexOf = function(element) {
        var current = head;
        var index = 0;

        while (index < length) {

            if (current.element === element) {
                return index;
            }

            current = current.next;
            index++;
        }

        return -1;
    }

    // return true if the list is empty
    this.isEmpty = function() {
        return length === 0;
    }

    this.getHead = function() {
        return head;
    }

    this.getTail = function() {
        return tail;
    }

    // return the size of list
    this.size = function() {
        return length;
    }

    // convert the list to a string
    this.toString = function() {
        var formattedString = '';
        var current = head;

        while (current) {
            formattedString += current.element + ' ';
            current = current.next;
        }
        
        return formattedString;
    }

    // print on console
    this.print = function() {
        console.log(this.toString());
    }
}

var list = new DoublyLinkedList();

list.insert(0, 'a');
list.insert(1, 'b');
list.insert(2, 'c');

list.append('d');
list.append('e');
list.append('f');

console.log('head: ', list.getHead());
console.log('tail: ', list.getTail());
console.log('list result: ', list.toString());
