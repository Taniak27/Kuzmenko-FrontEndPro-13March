//HOMEWORK_6_(User's portfolio)

//Age
let yearOfBirth = Number(prompt('What is the year of your birth?'));

const now = new Date();
let year = now.getFullYear();
let sub = year - yearOfBirth;
//City
let a = prompt('What city are you from?');
let b = a.charAt(0).toUpperCase();
let c = a.slice(1, a.length).toLowerCase();
let placeOfLiving = b + c;

let d = prompt('What is your favourite sport?');
let e = d.charAt(0).toUpperCase();
let f = d.slice(1, d.length).toLowerCase();
let favouriteSport = e + f;


if (yearOfBirth > 0 && placeOfLiving === 'Kiev' && favouriteSport === 'Football') {
  alert(`You are ${sub} years old and you live in the capital of Ukraine. Cool! Do you want to be Lionel Messi?`);
} else if (yearOfBirth > 0 && placeOfLiving === 'Kiev' && favouriteSport === 'Tennis') {
  alert(`You are ${sub} years old and you live in the capital of Ukraine. Cool! Do you want to be Andrew Murray?`);
} else if (yearOfBirth > 0 && placeOfLiving === 'Kiev' && favouriteSport === 'Hockey') {
  alert(`You are ${sub} years old and you live in the capital of Ukraine. Cool! Do you want to be Patrick LaFontaine?`);
} else if (yearOfBirth > 0 && placeOfLiving === 'Kiev' && favouriteSport) {
  alert(`You are ${sub} years old and you live in the capital of Ukraine.`);
} else if (yearOfBirth > 0 && placeOfLiving === 'Washington' && favouriteSport === 'Football') {
  alert(`You are ${sub} years old and you live in the capital of the USA. Cool! Do you want to be Lionel Messi?`);
} else if (yearOfBirth > 0 && placeOfLiving === 'Washington' && favouriteSport === 'Tennis') {
  alert(`You are ${sub} years old and you live in the capital of the USA. Cool! Do you want to be Andrew Murray?`);
} else if (yearOfBirth > 0 && placeOfLiving === 'Washington' && favouriteSport === 'Hockey') {
  alert(`You are ${sub} years old and you live in the capital of the USA. Cool! Do you want to be Patrick LaFontaine?`);
} else if (yearOfBirth > 0 && placeOfLiving === 'Washington' && favouriteSport) {
  alert(`You are ${sub} years old and you live in the capital of the USA.`);
} else if (yearOfBirth > 0 && placeOfLiving === 'London' && favouriteSport === 'Football') {
  alert(`You are ${sub} years old and you live in the capital of England. Cool! Do you want to be Lionel Messi?`);
} else if (yearOfBirth > 0 && placeOfLiving === 'London' && favouriteSport === 'Tennis') {
  alert(`You are ${sub} years old and you live in the capital of England. Cool! Do you want to be Andrew Murray?`);
} else if (yearOfBirth > 0 && placeOfLiving === 'London' && favouriteSport === 'Hockey') {
  alert(`You are ${sub} years old and you live in the capital of England. Cool! Do you want to be Patrick LaFontaine?`);1998
} else if (yearOfBirth > 0 && placeOfLiving === 'London' && favouriteSport) {
  alert(`You are ${sub} years old and you live in the capital of England.`);
} else if (yearOfBirth > 0 && placeOfLiving && favouriteSport === 'Football') {
  alert(`You are ${sub} years old and you live in ${placeOfLiving}. Cool! Do you want to be Lionel Messi?`);
} else if (yearOfBirth > 0 && placeOfLiving && favouriteSport === 'Tennis') {
  alert(`You are ${sub} years old and you live in ${placeOfLiving}. Cool! Do you want to be Andrew Murray?`);
} else if (yearOfBirth > 0 && placeOfLiving && favouriteSport === 'Hockey') {
  alert(`You are ${sub} years old and you live in ${placeOfLiving}. Cool! Do you want to bePatrick LaFontaine?`);
} else if (yearOfBirth > 0 && placeOfLiving && favouriteSport) {
  alert(`You are ${sub} years old and you live in ${placeOfLiving}.`);
} else if (yearOfBirth !== true && placeOfLiving && favouriteSport) {
  alert(`You haven't entered your year of birth, but you live in ${placeOfLiving}.`);
} else if (yearOfBirth && placeOfLiving !== true && favouriteSport) {
  alert(`You haven't entered your place of living, but you are ${sub} years old.`);
} else if (yearOfBirth && placeOfLiving && favouriteSport !== true) {
  alert(`You haven't entered your favourite sport, but you are ${sub} years old and you live in ${placeOfLiving}.`);
} else (yearOfBirth && placeOfLiving && favouriteSport !== true);


//HOMEWORK_7_(SWITCH...CASE)

let numOrStr = prompt('input number or string');
alert(numOrStr)

switch (numOrStr) {
    case null:
        alert('ви скасували')
        break;
    case '':
        alert('Empty String')
        break;
    case isNaN(+numOrStr):
        alert('number is Ba_NaN')
        break;
    default:
        alert('OK!')
}

//HOMEWORK_8_(CALCULATOR)

let choosingOfAcrion = prompt('What mathematical action would you like to do: add, multiply, subtract, divide?');

let firstNumber = Number(prompt('Enter the first number'))
let secondNumber = Number(prompt('Enter the second number'))
let sum = firstNumber + secondNumber;
let mult = firstNumber * secondNumber;
let sub = firstNumber - secondNumber;
let div = firstNumber / secondNumber;


if (choosingOfAcrion === 'add') {
  alert(`${firstNumber} + ${secondNumber} = ${sum}`)  
} else if (choosingOfAcrion === 'subtract') {
  alert(`${firstNumber} - ${secondNumber} = ${sub}`)
} else if (choosingOfAcrion === 'multiply') {
  alert(`${firstNumber} * ${secondNumber} = ${mult}`)
} else if (choosingOfAcrion === 'divide') {
  alert(`${firstNumber} / ${secondNumber} = ${div}`)
} else {
  alert("You haven't entered the number or action")
}

