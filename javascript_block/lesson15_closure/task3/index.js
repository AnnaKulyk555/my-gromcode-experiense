// export function createLogger() {
//   const records = [];

//   return {
//     warn(message) {
//       records.push({ message, dateTime: new Date(), type: 'warn' });
//     },
//     error(message) {
//       records.push({ message, dateTime: new Date(), type: 'error' });
//     },
//     log(message) {
//       records.push({ message, dateTime: new Date(), type: 'log' });
//     },
//     getRecords(messageType) {
//       records.sort((a, b) => b.dateTime - a.dateTime);
//       if (!messageType) {
//         return records;
//       }
//       if (messageType === 'warn') {
//         const res = records.filter(message => message.type === 'warn');
//         return res;
//       }
//       if (messageType === 'error') {
//         const res = records.filter(message => message.type === 'error');
//         return res;
//       }
//       if (messageType === 'log') {
//         const res = records.filter(message => message.type === 'log');
//         return res;
//       }
//     },
//   };
// }

// OPTION 2
// export function createLogger() {
//   const records = [];

//   return {
//     warn(message) {
//       records.push({ message, dateTime: new Date(), type: 'warn' });
//     },
//     error(message) {
//       records.push({ message, dateTime: new Date(), type: 'error' });
//     },
//     log(message) {
//       records.push({ message, dateTime: new Date(), type: 'log' });
//     },
//     getRecords(messageType) {
//       records.sort((a, b) => b.dateTime - a.dateTime);

//       if (!messageType) {
//         return records;
//       }

//       return records.filter(message => message.type === messageType);
//     },
//   };
// }

// Option 3
export function createLogger() {
  const records = [];

  return {
    warn(message) {
      records.push({ message, dateTime: new Date(), type: 'warn' });
    },
    error(message) {
      records.push({ message, dateTime: new Date(), type: 'error' });
    },
    log(message) {
      records.push({ message, dateTime: new Date(), type: 'log' });
    },
    getRecords(messageType) {
      return (messageType ? records.filter(message => message.type === messageType) : records).sort(
        (a, b) => b.dateTime - a.dateTime,
      );
    },
  };
}

// test data
const logger = createLogger();
logger.log('User logged out');
logger.log('User logged in');
logger.warn('User try to restricted page');
logger.error('Unexpected error on the site');
console.log(logger.getRecords());
console.log(logger.getRecords('log'));
console.log(logger.getRecords('error'));
console.log(logger.getRecords('warn'));
console.log(logger.getRecords('warn'));

const logger2 = createLogger();
console.log(logger2.getRecords());
