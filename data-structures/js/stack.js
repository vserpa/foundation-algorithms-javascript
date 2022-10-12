// LIFO - Last in, first out

function Stack() {
    
    var items = [];

    // add a new item to the stack
    this.push = function(element) {
        items.push(element);
    }

    // remove an item from the stack
    this.pop = function() {
        return items.pop();
    }

    // return an element from the stack
    this.peek = function() {
        return items[items.length - 1];
    }

    // return true if the stack is empty
    this.isEmpty = function() {
        return items.length === 0;
    }

    // clear the stack
    this.clear = function() {
        items = [];
    }

    // return the size of stack
    this.size = function() {
        return items.length;
    }

    // print the stack on console
    this.print = function() {
        console.log(items.toString());
    }
}


console.log('stack');

var stack = new Stack();

console.log('empty: ' + stack.isEmpty());
console.log('size: ' + stack.size());

stack.push(1);
stack.push(2);
stack.push(3);
console.log('peek: ' + stack.peek());

stack.pop();
console.log('peek: ' + stack.peek());
console.log('empty: ' + stack.isEmpty());
console.log('size: ' + stack.size());

stack.print();

console.log('clear');
stack.clear();
console.log('empty: ' + stack.isEmpty());
console.log('size: ' + stack.size());

stack.print();