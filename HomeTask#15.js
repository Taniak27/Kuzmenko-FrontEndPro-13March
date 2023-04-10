//HOMETASK_15
//Створити масив, довжину та елементи якого задає користувач.
//Відсортувати масив за зростанням.
//Видалити елементи з масиву з 2 по 4 (включно!).


let arr = [];
let N = +prompt('Enter the lenght of an array');

for (let i = 1; i <= N; i++) {
  arr.push(i);
}
alert(arr.sort());
alert(arr.slice(2, 5));
