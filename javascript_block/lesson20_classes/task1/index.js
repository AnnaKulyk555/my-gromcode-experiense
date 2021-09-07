export class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayHi() {
    console.log(`Hi, I am ${this.name}`);
  }

  requestNewPhoto() {
    console.log(`New photo request was sent for ${this.name}`);
  }

  setAge(newAge) {
    if (newAge < 0) {
      return false;
    }
    this.age = newAge;
    if (newAge >= 25) {
      this.requestNewPhoto();
    }
    return newAge;
  }

  static createEmpty() {
    const user = {
      name: '',
      age: null,
    };

    return user;
  }
}

// test
const user1 = new User('Tom', 17);
console.log(user1);
user1.sayHi();
user1.requestNewPhoto();
console.log(user1.setAge(15));
console.log(user1.setAge(-15));
console.log(user1.setAge(45));
console.log(user1.createEmpty);
console.log(User.createEmpty());

const user2 = new User('Bob', 27);
console.log(user2);
user2.sayHi();
console.log(user2.setAge(30));
console.log(user2.setAge(-30));
