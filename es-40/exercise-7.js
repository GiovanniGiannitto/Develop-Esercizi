class Person {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
  get firstname() {
    return this.firstName;
  }
  set firstname(name) {
    this.firstName = name;
  }
  get lastname() {
    return this.lastName;
  }
  set lastname(name) {
    this.lastName = name;
  }
  get ages() {
    return this.age;
  }
  set ages(ages) {
    this.age = ages;
  }
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

const person = new Person('Mario', 'Rossi', 25);
console.log(person.fullName);

person.firstname = 'Maria';
person.lastname = 'Verdi';
person.ages = 25;
console.log(person.fullName);
console.log(person.ages);