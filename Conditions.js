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
    case NaN:
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

