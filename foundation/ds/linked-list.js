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

    }

    // return true if the list is empty
    this.isEmpty = function() {
        if (length > 0) {
            return false;
        }

        return true;
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
list.print();

console.log('Está vazio: ' + list.isEmpty());
console.log('O tamanho final é ' + list.size());