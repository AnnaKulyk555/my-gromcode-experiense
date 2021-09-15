export function getDiff(startDate, endDate) {
  const diff = Math.abs(endDate - startDate);
  const diffDate = new Date(diff);
  const seconds = diffDate.getSeconds();
  const minutes = diffDate.getMinutes();
  const hours = diffDate.getUTCHours();

  const days = Math.floor(diffDate / (1000 * 3600 * 24));

  return `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

// test data
const date1 = new Date(2021, 4, 29, 12, 30, 50);
const date2 = new Date(2021, 4, 29, 12, 30, 25);
const date3 = new Date(2021, 3, 2, 18, 30, 10);
const date4 = new Date(2021, 4, 3, 6, 30, 10);
console.log(getDiff(date1, date2));
console.log(getDiff(date3, date4));

/**
 * export function getDiff(startDate, endDate) {
  let diff = Math.abs(endDate - startDate);

  let seconds = 0;
  let minutes = 0;
  let hours = 0;
  let days = 0;

  //console.log(diff);
  diff = (diff - (diff % 1000)) / 1000;
  //console.log(diff);
  diff = (diff - (seconds = diff % 60)) / 60;
  //console.log(diff);
  diff = (diff - (minutes = diff % 60)) / 60;
  //console.log(diff);
  days = (diff - (hours = diff % 24)) / 24;

  return `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

 */
