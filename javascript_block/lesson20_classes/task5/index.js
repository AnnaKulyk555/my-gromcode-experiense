/* eslint-disable max-classes-per-file */

export class User {
  constructor(id, name, sessionId) {
    this._id = id;
    this._name = name;
    this._sessionId = sessionId;
  }

  get id() {
    return this._id;
  }

  get name() {
    return this._name;
  }

  get sessionId() {
    return this._sessionId;
  }
}

export class UserRepository {
  constructor(users) {
    this._users = Object.freeze(users);
  }

  get users() {
    return this._users;
  }

  getUserNames() {
    return this._users.map(obj => obj.name);
  }

  getUserIds() {
    return this._users.map(obj => obj.id);
  }

  getUserNameById(id) {
    return this._users.reduce((resName, obj) => {
      if (obj.id === id) {
        resName = obj.name;
      }
      return resName;
    }, '');
  }
}

// examples
const user = new User('1', 'Tom', 'session-id');
const user2 = new User('2', 'Bob', 'session-id');

// получить свойства можем
// console.log(user.id); // ===> '1'
// console.log(user.name); // ===> 'Tom'
// console.log(user.sessionId); // ===> 'session-id'
// console.log(user);

// но изменить эти свойства нельзя
// user.name = 'Bob'; // пытаемся изменить старое значение
// console.log(user.name); // ===> 'Tom' - но изменение проигнорировано, так как setter отсутствует

const userRepository1 = new UserRepository([user, user2]);
console.log(userRepository1.getUserNames());
console.log(userRepository1.getUserIds());
console.log(userRepository1.getUserNameById('2'));
