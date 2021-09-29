const fetchUser = userId =>
  fetch(`https://api.github.com/users/${userId}`).then(response => response.json());

export const getUsersBlogs = usersId => {
  try {
    const usersBlogs = usersId.map(async userId => {
      const userData = await fetchUser(userId);
      return userData.blog;
    });

    return Promise.all(usersBlogs);
  } catch {
    throw new Error('some error');
  }
};

// export const getUsersBlogs = usersId => {
//   const usersBlogs = usersId.map(async userId => {
//     const userData = await fetchUser(userId);
//     return userData.blog;
//   });

//   return Promise.all(usersBlogs);
// };

// test
// getUsersBlogs(['google', 'facebook', 'gaearon'])
//   .then(linksList => console.log(linksList))
//   .catch(error => alert(error));
// // ["https://opensource.google/", "https://opensource.fb.com", "http://twitter.com/dan_abramov"]
