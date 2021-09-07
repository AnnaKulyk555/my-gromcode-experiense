export const user = {
  firstName: 'John',
  lastName: 'Doe',
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  },
};

// test
console.log(user.getFullName());
