const fs = require('fs');

const genders = ['M', 'F'];
const maleNames = ['John', 'Richard', 'Frank', 'Michael', 'Gary', 'Eric', 'Robert', 'Frank', 'Tom'];
const femaleNames = ['Camila', 'Margaret', 'Paula', 'Joanna', 'Elizabeth', 'Marta', 'Consuela', 'Nina', 'Bianca', 'Erica'];
const lastNames = ['Doe', 'Sinatra', 'Back', 'Newton', 'Callister', 'Khan', 'Beckham', 'Anistone'];

const people = [];

const randChoice = arr => {
  const random = arr[Math.floor(Math.random() * arr.length)];
  return random
};

for (let i = 0; i <= 20; i++) {
  const gender = randChoice(genders);
  const name = gender === 'M' ? randChoice(maleNames) : randChoice(femaleNames);
  const lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
  const age = Math.floor((Math.random() * (78 - 18 + 1) + 18));
  const email = `${name}.${lastName}@gmail.com`.toLowerCase();

  const obj = {
    gender: gender,
    name: name,
    lastName: lastName,
    age: age,
    email: email
  };

  people.push(obj);
};

const peopleJSON = JSON.stringify(people);

fs.writeFile('people.json', peopleJSON, (err) => {
  if (err) throw err;
  console.log('The file has been saved!');
});