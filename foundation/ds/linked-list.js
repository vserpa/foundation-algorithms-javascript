function LinkedList() {

    var Node = function(element) {
        this.element = element;
        this.next = null;
    }

    var length = 0;
    var head = null;

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
        }

        length++;
    }

    // add an element in a specific position
    this.insert = function(position, element) {
        if (position >= 0 && position <= length) {
            var node = new Node(element);

            var current = head;
            var prior = null;
            var index = 0;

            if (position === 0) {
                node.next = current;
                head = node;
            } else {
                while (index++ < position) {
                    prior = current;
                    current = current.next;
                }
                node.next = current;
                prior.next = node;
            }

            length++;
            return true;
        } else {
            return false;
        }
    }

    // remove element from a specific position
    this.removeAt = function(position) {
        if (position >= 0 && position < length) {
            var current = head;
            var prior = null;
            var index = 0;

            if (position === 0) {
                head = current.next;
            } else {
                while (index++ < position) {
                    prior = current;
                    current = current.next;
                }

                prior.next = current.next;
            }

            length--;
            return current.element;
        }

        return null;
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
        if (length > 0) {
            return false;
        }

        return true;
    }

    this.getHead = function() {
        return head;
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

console.log('Linked List');

var list = new LinkedList();

console.log('Está vazio: ' + list.isEmpty());

list.append('a');
list.append('b');
list.append('b');
list.append('b');
list.append('c');
// list.remove('b');
// list.removeAt(1);
list.insert(5, 'z');
list.print();

console.log('Índice: ' + list.indexOf('c'))
console.log('Está vazio: ' + list.isEmpty());
console.log('O tamanho final é ' + list.size());