const persons = [
  {
    id: 1,
    firstName: 'Mario',
    lastName: 'Rossi',
    age: 25
  },
  {
    id: 2,
    firstName: 'Maria',
    lastName: 'Verdi',
    age: 32
  },
  {
    id: 3,
    firstName: 'Giovanni',
    lastName: 'Rossi',
    age: 35
  }
];

const jobs = [
  {
    id: 1,
    jobTitle: 'CEO'
  },
  {
    id: 2,
    jobTitle: 'Project Manager'
  },
  {
    id: 3,
    jobTitle: 'Developer'
  }
];

function fetchPersonById(id) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(persons.filter(item => item.id === id)), 1000);
  });
};

function fetchJobById(id) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(jobs.filter(item => item.id === id)), 500);
  });
};

Promise.any([fetchPersonById(1), fetchJobById(1)]).then((value) => console.log(value)); 