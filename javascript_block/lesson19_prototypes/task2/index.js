/* eslint-disable no-restricted-syntax */
/* eslint-disable prefer-const */
/* eslint-disable no-prototype-builtins */
export function getOwnProps(obj) {
  const props = [];
  for (let prop in obj) {
    if (typeof obj[prop] !== 'function' && obj.hasOwnProperty(prop)) {
      props.push(prop);
    }
  }

  return props;
}

// test
// const vehicle = {
//   age: 155,
//   move() {
//     console.log(`${this.name} is moving`);
//   },
//   stop() {
//     console.log(`${this.name} stopped`);
//   },
// };

// const ship = {
//   name: 'Argo',
//   startMachine() {
//     console.log(`${this.name} lifting anchor up`);
//     this.move();
//   },
//   stopMachine() {
//     this.stop();
//     console.log(`${this.name} lifting anchor down`);
//   },
// };

// Object.setPrototypeOf(ship, vehicle);

// console.log(getOwnProps(ship));
