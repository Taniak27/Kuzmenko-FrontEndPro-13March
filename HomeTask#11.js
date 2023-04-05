
//Task_1
let arr = [6, 4, 'boy', 3]; 

function average() {
  let sum = 0;
  let count = 0;

  for(let i = 0; i < arr.length; i++){
      if (!isNaN(arr[i])) {
          count += 1;
          sum += arr[i];
      }
      console.log(count);
  }
  return sum / count;
}

let result = average();
console.log(result);


//Task_2
function doMath(x, znak, y) {
  x = +prompt("Введите первое число");
  y = +prompt("Введите второе число");
  znak = prompt("Введите операцию +, -, *, /, %, ^ ");
  let result;

  switch (znak) {
      case "+":
          result = x + y;
          break;
      case "-":
          result = x - y;
          break;
      case "*":
          result = x * y;
          break;
      case "/":
          result = x / y;
          break;  
      case "%":
          result = x % y;
          break;
      case "^":
          result = Math.pow(x,y);
          break;    
  }
  return result;
}

let mathResult = doMath();
alert(mathResult);


//Task_3
function arrAdd() {

let m = +prompt("Ведіть довжину основного масиву");
let n = +prompt("Ведіть довжину вкладених масивів"); 

let arr = [];

for (let i = 0; i < m; i++) {
    arr[i] = [];
    for (let j = 0; j < n; j++){
        arr[i][j] = 0;
}}
return(arr);
}

let functionResult = arrAdd();
alert(functionResult);



//Task_4
function deleteSymbol() {
  let text = prompt("Ведіть текст");
  let symbol = prompt("Ведіть символи");

  let textArr = text.split("");
  let symbolArr = symbol.split("");

  for(let i = 0; i < textArr.length; i++) {
      for(let j = 0; j < symbolArr.length; j++) {
          if (textArr[i] === symbolArr[j]) {
              textArr.splice(i, 1);
              i--;
          }
      }
  }

  console.log(textArr);
  console.log(symbolArr);
  return textArr.join("");
}

let functionResult = deleteSymbol();
alert(functionResult);
