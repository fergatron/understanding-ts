function combine(input1: number | string, input2: number | string) {
    if (typeof input1 === 'number' && typeof input2 === 'number') {
        return input1 + input2;
    }
    return input1.toString() + input2.toString();
}

console.log('numbers', combine(30, 26));
console.log('strings', combine('Max', 'Anna'));