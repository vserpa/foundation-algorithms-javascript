// http://conversordemedidas.info/sistema-binario.php

function dec2Bin(decNumber) {
    var restStack = []; // this array is used as a stack
    var rest;
    var binaryString = '';

    while (decNumber > 0) {
        rest = Math.floor(decNumber % 2);
        restStack.push(rest);
        decNumber = Math.floor(decNumber / 2);
    }

    while (restStack.length > 0) {
        binaryString += restStack.pop().toString();
    }

    return binaryString;
}

console.log(dec2Bin(25));