const person = {
  firstName: 'Greg',
  lastName: ' Bailey',
  hobby: 'skiing'
};
const fullName = person.firstName + person.lastName;
person.job = 'realtor';
person['previousJob'] = 'appraiser';
console.log(person);
console.log(fullName);
console.log(person.job);
console.log(person['previousJob']);
console.log(person);
