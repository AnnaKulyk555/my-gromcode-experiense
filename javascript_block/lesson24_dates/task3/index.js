export function getDiff(startDate, endDate) {
  let dateDiff;
  if (startDate > endDate) {
    dateDiff = startDate - endDate;
  } else {
    dateDiff = endDate - startDate;
  }

  const daysDiff = Math.floor(dateDiff / (24 * 3600 * 1000));
  const hoursDiff = Math.floor(dateDiff / (3600 * 1000));
  const minsDiff = Math.floor(dateDiff / (60 * 1000));
  const secDiff = Math.floor(dateDiff / 1000);
  return `${daysDiff}d ${hoursDiff}h ${minsDiff}m ${secDiff}s`;
}

// test data
// const date1 = new Date(2021, 4, 29, 12, 30, 56);
// const date2 = new Date(2021, 4, 15, 12, 10, 14);
// console.log(date1);
// console.log(date2);
// const date3 = new Date(2021, 4, 2, 3, 20, 6);
// const date4 = new Date(2021, 5, 2, 7, 6, 56);
// console.log(date3);
// console.log(date4);
// console.log(getDiff(date1, date2));
// console.log(getDiff(date3, date4));
