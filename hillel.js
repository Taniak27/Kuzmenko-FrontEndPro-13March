//HOME_WORK_2
/*
let role = 'The student - ';
let surname = 'Tatiana Kuzmenko ';
let location = 'is from Odesa.';

console.log(role + surname + location);

let firstNumber = '5';
let secondNumber = '9';
let thirdNumber = '1';
let fourthNumber = '2';
let fifthNumber = '0';

console.log(firstNumber + ' ' + secondNumber + ' ' + thirdNumber + ' ' + fourthNumber + ' ' + fifthNumber);
*/

//HOME_WORK_3

const firstNumber = parseInt(prompt('Enter the first number'));
const secondNumber = parseInt(prompt('Enter the second number'));
let adding = firstNumber + secondNumber;
let subctraction = firstNumber - secondNumber;
let multiplying = firstNumber * secondNumber;
let division = firstNumber / secondNumber;

alert(adding);
alert(subctraction);
alert(multiplying);
alert(division); 

// HOME_WORK_4

const hours = parseInt(prompt('Enter the number of hours'));
const secondsInOneHour = 3600;
let getSecondsInHours = hours * secondsInOneHour;

alert(getSecondsInHours);

// HOME_WORK_5

const numberOne = parseInt(prompt('Enter the first number'));
const numberTwo = parseInt(prompt('Enter the second number'));
const numberThree = parseInt(prompt('Enter the first number'));
let total = numberOne + numberTwo + numberThree;
let arithmeticMean = total / 3;

alert(arithmeticMean);
