function withdraw(clients, balances, client, amount) {
  let balance;
  for (let index = 0; index < clients.length; index += 1) {
    if (clients[index] === client) {
      if (balances[index] < amount) {
        balance = -1;
      } else {
        balances[index] -= amount;
        balance = balances[index];
      }
    }
  }
  return balance;
}

// test

// const clients = ['Ann', 'Peter', 'Max'];
// const balances = [500, 2, -6];
// console.log(withdraw(clients, balances, 'Ann', 100));
// console.log(balances);
// console.log(withdraw(clients, balances, 'Peter', 100));
// console.log(balances);
// console.log(withdraw(clients, balances, 'Max', 100));
// console.log(balances);
