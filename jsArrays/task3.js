const numbers = [10, 20, 30, 40, 50];

const sum = numbers.reduce((accum, value) => {
    return accum + value;
});

console.log(sum);