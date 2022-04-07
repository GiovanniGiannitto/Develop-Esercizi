let numberStore = [0, 1, 2];
let newNumber = 3;

let merged = [].concat(numberStore, newNumber);
// or let merged = numberStore.concat(newNumber);
console.log(merged);

// numberStore.push(newNumber);
// console.log(numberStore);
