const sum = arr => (Array.isArray(arr) ? arr.reduce((acc, elem) => acc + elem) : null);

console.log(sum([1, 2, 3, 1]));
console.log(sum(3));
