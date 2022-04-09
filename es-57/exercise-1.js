const persons = [
  {
    id: 1,
    firstName: "Mario",
    lastName: "Rossi",
    age: 25,
  },
  {
    id: 2,
    firstName: "Maria",
    lastName: "Verdi",
    age: 32,
  },
  {
    id: 3,
    firstName: "Giovanni",
    lastName: "Rossi",
    age: 35,
  },
];

function fetchPersonById(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() =>
      resolve(
        persons.find((item) => {
          return item.id === id;
        }),
        1000
      )
    );
  });
}

fetchPersonById(1).then((persons) => console.log(persons));
fetchPersonById(2).then((persons) => console.log(persons));
fetchPersonById(3).then((persons) => console.log(persons)); 

