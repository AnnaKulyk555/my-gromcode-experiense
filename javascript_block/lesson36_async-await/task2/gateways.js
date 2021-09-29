export const fetchUserData = async userName => {
  const response = await fetch(`https://api.github.com/users/${userName}`);

  if (response.ok) {
    const responseBody = await response.json();
    return responseBody;
  }

  throw new Error('Failed to load data');
};

export const fetchRepositories = async url => {
  const response = await fetch(url);

  if (response.ok) {
    const responseBody = await response.json();
    return responseBody;
  }

  throw new Error('Failed to load data');
};
