function getKeys(obj) {
  let allKeys = [];
  for(let key in obj) {
    if(key) {
      allKeys.push(key);
    }
  }
  return allKeys;
}

const person = {
  firstName: 'John',
  lastName: 'Doe',
  age: 32,
  city: 'Rome',
  job: 'Developer',
};

const keys = getKeys(person);
console.log(keys);