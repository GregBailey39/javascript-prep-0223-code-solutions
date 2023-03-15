function addTwoNumbers(num1, num2) {
  return (num1 + num2);
}

var addTwoNumbersResult = addTwoNumbers(5, 9);

function convertHoursToMinutes(hours) {
  return (hours * 60);
}

var convertHoursToMinutesResult = convertHoursToMinutes(5);

function getGreeting(name) {
  return 'hello ' + (name);
}

var name = 'Greg';
var getGreetingResult = getGreeting(name);

function addAndMultiplyBy5(num1, num2) {
  return ((num1 + num2) * 5);
}

var addAndMultiplyBy5Result = addAndMultiplyBy5(4, 7);

function multiplyAndDivideBy5(num1, num2) {
  return ((num1 * num2) / 5);
}

var multiplyAndDivideBy5Result = multiplyAndDivideBy5(7, 20);

function subtractTwoNumbers(num1, num2) {
  return (num1 - num2);
}

var subtractTwoNumbersResult = subtractTwoNumbers(12, 8);

function getCircleCircumference(radius) {
  var number = 3.14 * 2 * (radius);
  return (number);
}

var getCircleCircumferenceResult = getCircleCircumference(3);

function getFullName(firstName, lastName) {
  var fullName = firstName + '' + lastName;
  return (fullName);
}

var getFullNameResult = getFullName('Greg', ' Bailey');

function cube(number) {
  return (number * number);
}

var cubeResult = cube(7);

console.log(addTwoNumbersResult);
console.log(convertHoursToMinutesResult);
console.log(getGreetingResult);
console.log(addAndMultiplyBy5Result);
console.log(multiplyAndDivideBy5Result);
console.log(subtractTwoNumbersResult);
console.log(getCircleCircumferenceResult);
console.log(getFullNameResult);
console.log(cubeResult);
