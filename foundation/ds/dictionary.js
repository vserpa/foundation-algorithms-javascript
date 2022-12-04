function Dictionary() {
    
    var items = {};

    this.set = function(key, value) {
        items[key] = value;
    }

    this.delete = function(key) {
        if (this.has(key)) {
            delete items[key];
            return true;
        }

        return false;
    }

    this.has = function(key) {
        return items.hasOwnProperty(key);
    }

    this.get = function(key) {
        return items[key];
    }

    this.clear = function() {
        items = {};
    }

    this.size = function() {
        return Object.keys(items).length;
    }

    this.keys = function() {
        return Object.keys(items);
    }

    this.values = function() {
        return Object.values(items);
    }
}

var dict = new Dictionary();

dict.set('firstName', 'Carlos');
dict.set('lastName', 'Serpa');
dict.set('firstName', 'Vinicius');
dict.set('gender', 'male');

console.log('size: ' + dict.size());
console.log('keys: ' + dict.keys());
console.log('values: ' + dict.values());
console.log('has firstName ' + dict.has('firstName'));
console.log('firstName: ' + dict.get('firstName'));

console.log('deleting a key ...');
dict.delete('firstName');
console.log('size: ' + dict.size());
console.log('keys: ' + dict.keys());
console.log('values: ' + dict.values());
console.log('has firstName ' + dict.has('firstName'));

dict.clear();
console.log('Dict clear');
console.log('size: ' + dict.size());
console.log('keys: ' + dict.keys());
console.log('values: ' + dict.values());