const getPeople = obj =>
  Object.values(obj)
    .flat()
    .map(elem => elem.name);
