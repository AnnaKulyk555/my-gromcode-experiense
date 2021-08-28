const withdraw = (clients, balances, client, amount) => {
  const clientIndex = clients.indexOf(client);

  return balances[clientIndex] > amount ? (balances[clientIndex] -= amount) : -1;
};

//example 1:

//input
const names = ['Ann', 'John', 'User'];
const balances = [1400, 87, -6];
console.log(withdraw(names, balances, 'Ann', 50));
console.log(balances);

// console.log(withdraw(names, balances, 'User', 50));
// console.log(balances);
