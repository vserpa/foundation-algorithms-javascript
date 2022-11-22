function Set() {

    var items = {};

    this.add = function(value) {
        if (this.has(value)) {
            return false;
        }

        items[value] = value;
        return true;
    }

    this.delete = function(value) {
        if (!this.has(value)) {
            return false;
        }

        delete items[value];
        return true;
    }

    this.has = function(value) {
        return items.hasOwnProperty(value);
    }

    this.clear = function() {
        items = {};
    }

    this.size = function() {
        return Object.keys(items).length;
    }

    this.values = function() {
        var values = [];
        var keys = Object.keys(items);
        for (var i = 0; i < keys.length; i++) {
            values.push(items[keys[i]]);
        }
        return values;
    }
}

var set = new Set();

set.add(1);
set.add(2);
set.add(3);
set.add(4);
set.add(4);
set.add(4);

// set.clear();
set.delete(2);

console.log(set.has(3))
console.log(set.size());
console.log(set.values());
