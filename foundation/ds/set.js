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

    this.intersection = function(otherSet) {
        var intersectionSet = new Set();
        var values = this.values();

        for (var i = 0; i < values.length; i++) {
            if (otherSet.has(values[i])) {
                intersectionSet.add(values[i]);
            }
        }

        return intersectionSet;
    }

    this.difference = function(otherSet) {
        var diffSet = new Set();
        var values = this.values();

        for (var i = 0; i < values.length; i++) {
            if (!otherSet.has(values[i])) {
                diffSet.add(values[i]);
            }
        }

        return diffSet;
    }

    this.subset = function(otherSet) {
        if (this.size() > otherSet.size()) {
            return false;
        }

        var values = this.values();

        for (var i = 0; i < values.length; i++) {
            if (!otherSet.has(values[i])) {
                return false;
            }
        }

        return true;
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
setA.add(6);

var setB = new Set();
setB.add(3);
setB.add(4);
setB.add(5);
setB.add(6);

var setAB = setA.union(setB);
var setI = setA.intersection(setB);
var setD = setA.difference(setB);

console.log('union');
console.log(setAB.values());

console.log('intersection');
console.log(setI.values());

console.log('difference');
console.log(setD.values());

console.log('subset');
console.log(setA.subset(setB));