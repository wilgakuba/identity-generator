const fs = require('fs');

const genders = ['M', 'F'];
const maleNames = ['Adam', 'Liam', 'Alexander', 'Jakub', 'Noah', 'Leonardo']
const femaleNames = ['Olivia', 'Emma', 'Isabella', 'Mia', 'Amelia', 'Sophia']
const lastNames = ['Smith', 'Johnson', 'Williams', 'Brown', 'Davis', 'Miller']

const randChoice = function(arr){
  return arr[Math.floor(Math.random() * arr.length)];
}

const people = [];

for (let i = 1; i <= 20; i++) {
  const onePerson = {};

  const personGender = randChoice(genders);
  onePerson.gender = personGender;
   if ( personGender === 'M') {
    onePerson.firstName = randChoice(maleNames)
  } else {
    onePerson.firstName = randChoice(femaleNames);
  }

  onePerson.lastName = randChoice(lastNames);
  onePerson.age = Math.floor(Math.random() * 60) + 18;

  people.push(onePerson);
};  

const json = JSON.stringify(people, null, 2);

fs.writeFile('people.json', json, (err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log('The file has been saved!');
});