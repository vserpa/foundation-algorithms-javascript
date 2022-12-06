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
        return length === 0;
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

function HashTable() {
    
    var table = [];

    var ValuePair = function(key, value) {
        this.key = key;
        this.value = value;
        this.toString = function() {
            return '[' + this.key + ' - ' + this.value + ']';
        }
    }

    // this.put = function(key, value) {
    //     var position = loseloseHashCode(key);
    //     console.log(position + ' ' + value);
    //     table[position] = value;
    // }

    this.put = function(key, value) {
        var position = loseloseHashCode(key);
        
        if (table[position] === undefined) {
            table[position] = new LinkedList();
        }

        table[position].append(new ValuePair(key, value));
    }

    // this.remove = function(key) {
    //     table[loseloseHashCode(key)] = undefined;
    // }

    this.remove = function(key) {
        var position = loseloseHashCode(key);

        if (table[position] !== undefined) {
            var current = table[position].getHead();

            while (current.next) {
                if (current.element.key === key) {
                    table[position].remove(current.element);
                    if (table[position].isEmpty()) {
                        table[position] = undefined;
                    }

                    return true;
                }

                current = current.next;
            }

            if (current.element.key === key) {
                table[position].remove(current.element);
                if (table[position].isEmpty()) {
                    table[position] = undefined;
                }
                return true;
            }
        }

        return false;
    }

    // this.get = function(key) {
    //     return table[loseloseHashCode(key)];
    // }

    this.get = function(key) {
        var position = loseloseHashCode(key);

        if (table[position] !== undefined) {
            var current = table[position].getHead();

            while (current.next) {
                if (current.element.key === key) {
                    return current.element.value;
                }

                current = current.next;
            }

            if (current.element.key === key) {
                return current.element.value;
            }
        }

        return undefined;
    }

    this.size = function() {
        return table.length;
    }

    this.print = function() {
        for (var i = 0; i < table.length; i++) {
            if (table[i] !== undefined) {
                console.log(i + ' : ' + table[i]);
            }
        }
    }

    var loseloseHashCode = function(key) {
        var hash = 0;
        for (var i = 0; i < key.length; i++) {
            hash += key.charCodeAt(i); // return an integer value from asc table
        }
        return hash % 37
    }
}


var table = new HashTable();

table.put('Gandalf', 'gandalf@email.com');
table.put('John', 'john@email.com');
table.put('Tyrion', 'tyrion@email.com');
table.put('Aaron', 'aaron@email.com');
table.put('Donnie', 'donnie@email.com');
table.put('Sue', 'sue@email.com');
table.put('Ana', 'ana@email.com');
table.put('Jamie', 'jamie@email.com');
table.put('Nathan', 'nathan@email.com');

// console.log('Get Gandalf: ' + table.get('Gandalf'));
// console.log('Get Jose: ' + table.get('Jose'));

// table.remove('Gandalf');
// console.log('Get Gandalf after remove: ' + table.get('Gandalf'));

console.log('...');
table.print();