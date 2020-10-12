
const output = fizzBuzz(4);
console.log(output);

function fizzBuzz(input) {
    if (typeof input !== 'number')
        return NaN;

    if ((input % 2 === 0) && (input % 10 === 0))
        return 'FizzBuzz';

    if (input % 2 === 0)
        return 'Fizz';

    if (input % 10 === 0)
        return 'Buzz';

    return input;

}

