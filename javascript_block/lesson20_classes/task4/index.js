/**
 * @field {string} id
 * @field {number} price
 * @field {date} dateCreated
 * @field {boolean} isConfirmed
 * @field {date} dateConfirmed
 * @field {string} city
 * @field {string} type
 */
export class Order {
  id = Math.floor(Math.random() * 100).toString();

  dateCreated = new Date();

  isConfirmed = false;

  dateConfirmed = new Date();

  constructor(price, city, type) {
    this.price = price;
    this.city = city;
    this.type = type;
  }

  checkPrice() {
    return this.price > 1000;
  }

  confirmOrder() {
    if (!this.isConfirmed) {
      this.isConfirmed = true;
      this.dateConfirmed = new Date();
    }
  }

  isValidType() {
    return this.type === 'Buy' || this.type === 'Sell';
  }
}

// test

const order1 = new Order(2000, 'Kuiv', 'Sell');
console.log(order1);
console.log(order1.checkPrice());
order1.confirmOrder();
console.log(order1.isValidType());

const order2 = new Order(200, 'Lviv', 'Sel');
console.log(order2);
console.log(order2.checkPrice());
console.log(order2.isValidType());
