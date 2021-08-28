// input: array, boolean (isAsc)
// output: array

// algo
// check if array is !Array return null
//  isAsc default value = true;

function sortContacts(contacts, isAsc = true) {
  if (!Array.isArray(contacts)) {
    return null;
  }
  let result;
  if (!isAsc) {
    result = contacts.sort((first, second) => second.name.localeCompare(first.name));
  } else {
    result = contacts.sort((first, second) => first.name.localeCompare(second.name));
  }

  return result;
}

// test
const contacts = [
  { name: 'Suzy', phoneNumber: '111-11-11' },
  { name: 'Ann', phoneNumber: '155-11-11' },
  { name: 'Adel', phoneNumber: '155-61-11' },
  { name: 'Tom', phoneNumber: '156-61-11' },
  { name: 'Bob', phoneNumber: '116-61-11' },
  { name: 'Peter', phoneNumber: '216-61-11' },
];

// console.log(sortContacts(contacts, true));
// console.log(sortContacts(contacts, false));
console.log(sortContacts(contacts));
console.log(sortContacts('hello'));
