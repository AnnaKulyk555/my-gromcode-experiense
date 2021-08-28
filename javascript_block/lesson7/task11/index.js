const filterNames = (arr, text) => arr.filter(elem => elem.length > 5 && elem.includes(text));

// test
const arr = ['John', 'Olivya', 'Vanya', 'Nastya', 'Ben', 'bhdbchvya'];
console.log(filterNames(arr, 'ya'));
