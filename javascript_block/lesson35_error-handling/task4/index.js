export const parseUser = json => {
  try {
    const user = JSON.parse(json);
    return user;
  } catch (err) {
    return null;
  }
};

// test
// console.log(parseUser('{ "age": 25 '));
// console.log(parseUser('{ "age": 25} '));
