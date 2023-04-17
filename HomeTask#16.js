/*
1. Дан масив [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47] Знайти суму та кількість позитивних елементів.
2. Знайти мінімальний елемент масиву та його порядковий номер.
3. Знайти максимальний елемент масиву та його порядковий номер.
4. Визначити кількість негативних елементів.
5. Знайти кількість непарних позитивних елементів.
6. Знайти кількість парних позитивних елементів.
7. Знайти суму парних позитивних елементів.
8. Знайти суму непарних позитивних елементів.
9. Знайти добуток позитивних елементів.
10. Знайти найбільший серед елементів масиву, ост альні обнулити.
*/


let arr = [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];

//1
let sum = 0;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] > 0) {
    sum +=arr[i];
  }
}
console.log(sum);



//2
let min = (values) => values.reduce((x, y) => Math.min(x, y));
let minElement = min(arr);
console.log(minElement);
console.log(arr.indexOf(minElement));



//3
let max = (values) => values.reduce((x, y) => Math.max(x, y));
let maxElement = max(arr);
console.log(maxElement);
console.log(arr.indexOf(maxElement));



//4
let negativeCount = 0;

arr.forEach((item) => {
  if (item < 0) {
    negativeCount++
  }
})
console.log(negativeCount.length);



//5
let oddsPositive = arr.filter(elem => (elem > 0) && (elem % 2 === 1));
console.log(oddsPositive.length);



//6
let evenPositive = arr.filter(elem => (elem > 0) && (elem % 2 === 0))
console.log(evenPositive.length);



//7
let sum = 0;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] > 0 && arr[i] % 2 === 0) {
    sum +=arr[i];
  }
}
console.log(sum);



//8
let sum = 0;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] > 0 && arr[i] % 2 === 1) {
    sum +=arr[i];
  }
}
console.log(sum);



//9
let mult = 1;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] > 0 ) {
    mult *=arr[i];
  }
}
console.log(mult);



//10
let max = arr[0];
let maxi = 0;
for (let i = 1; i < arr.length; i++) {
  if (arr[i] > max) {
    max = arr[i];
    arr[maxi] = 0;
    maxi = i;
  } else {
    arr[i] = 0;
  }
}
console.log(arr);
