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

    this.union = function(otherSet) {
        var unionSet = new Set();
        var values = this.values();

        for (var i = 0; i < values.length; i++) {
            unionSet.add(values[i]);
        }

        values = otherSet.values();

        for (var i = 0; i < values.length; i++) {
            unionSet.add(values[i]);
        }

        return unionSet;
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

var setA = new Set();
setA.add(1);
setA.add(2);
setA.add(3);

var setB = new Set();
setB.add(3);
setB.add(4);
setB.add(5);
setB.add(6);

var setAB = setA.union(setB);

console.log('union');
console.log(setAB.values());