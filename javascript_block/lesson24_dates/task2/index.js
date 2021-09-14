const formatter = new Intl.DateTimeFormat('en', {
  timeZone: 'UTC',
  hour: '2-digit',
  minute: '2-digit',
  hour12: false,
});

export const getGreenWichTime = date => formatter.format(date);

// test data
// console.log(getGreenWichTime(new Date()));
