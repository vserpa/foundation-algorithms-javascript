// https://www.calculadoraonline.com.br/conversao-bases

function dec2Base(decNumber, base) {
    var restStack = []; // this array is used as a stack
    var rest;
    var baseString = '';
    var digits = '0123456789ABCDEF';

    while (decNumber > 0) {
        rest = Math.floor(decNumber % base);
        restStack.push(rest);
        decNumber = Math.floor(decNumber / base);
    }

    while (restStack.length > 0) {
        baseString += digits[restStack.pop()];
    }

    return baseString;
}

// base hexadecimal = 16
// base octal = 8
// base binária = 2
console.log(dec2Base(123, 16));