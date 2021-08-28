const getMessagesForBestStudents = (allStudentsList, studentsForRetake) =>
  allStudentsList
    .filter(name => !studentsForRetake.includes(name))
    .map(name => 'Good job, ' + name);

// //example 1:

// //input:
// const allStud = ['a', 'b', 'c', 'd'];
// const retakeStud = ['b', 'd'];

// console.log(getMessagesForBestStudents(allStud, retakeStud));

// //output:
// //['Good job, a', 'Good job, c']

// example 2:

// input:
const allStud = ['Ann', 'Den', 'Peter', 'Helen'];
const retakeStud = ['Den', 'Helen'];

console.log(getMessagesForBestStudents(allStud, retakeStud));

// output:
// ['Good job, a', 'Good job, c']
