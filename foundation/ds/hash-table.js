function HashTable() {
    
    var table = [];

    this.put = function(key, value) {
        var position = loseloseHashCode(key);
        console.log(position + ' ' + value);
        table[position] = value;
    }

    this.remove = function(key) {
        table[loseloseHashCode(key)] = undefined;
    }

    this.get = function(key) {
        return table[loseloseHashCode(key)];
    }

    this.size = function() {
        return table.length;
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

console.log(table.get('Gandalf'));
console.log(table.get('Jose'));

table.remove('Gandalf');
console.log(table.get('Gandalf'));