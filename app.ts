type Combinable = number | string;
type ConversionDescriptor = 'as-number' | 'as-text';

function combine(
    input1: Combinable,
    input2: Combinable,
    resultConversion: ConversionDescriptor
    ) {
    let result;
    if (
        typeof input1 === 'number'
        && typeof input2 === 'number'
        || resultConversion === 'as-number'
    ) {
        result = +input1 + +input2;
    } else {
        result = input1.toString() + input2.toString();
    }
    if (resultConversion === 'as-number') {
        return +result;
    } else {
        return result.toString();
    }
}

console.log('numbers', combine(30, 26, 'as-number'));
console.log('strings', combine('Max', 'Anna', 'as-text'));
console.log('combined strings', combine('36', '34', 'as-number'));