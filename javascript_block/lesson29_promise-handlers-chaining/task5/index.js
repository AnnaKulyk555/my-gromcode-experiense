export const delay = time => {
  const promise = new Promise(resolve => {
    setTimeout(() => {
      resolve();
    }, time);
  });

  return promise;
};

// test
// delay(1000).then(() => console.log('Done'));
