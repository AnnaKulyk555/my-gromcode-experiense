export const user = {
  firstName: '',
  lastName: '',
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  },
  setFullName(fullName) {
    [this.firstName, this.lastName] = fullName.split(' ');
  },
};

// test data
// user.setFullName('John Doe');
// console.log(user);
// console.log(user.getFullName());
