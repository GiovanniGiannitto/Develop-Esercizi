const person = {
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25
}
Object.keys(person).forEach((keys) => console.log(`${keys}: ${person[keys]}`));
}
// Print values of person using Object.keys
