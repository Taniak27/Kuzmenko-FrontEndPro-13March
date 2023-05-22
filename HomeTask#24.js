//HOMETASK_24
/*
Мережа фастфудів пропонує кілька видів гамбургерів:
маленький (50 тугриків, 20 калорій);
великий (100 тугриків, 40 калорій).

Гамбургер може бути з одним із декількох видів начинок:
сиром (+ 10 тугриків, + 20 калорій);
салатом (+ 20 тугриків, + 5 калорій);
картоплею (+ 15 тугриків, + 10 калорій).

Можна додати добавки:
посипати приправою (+15 тугриків, 0 калорій) - полити майонезом (+ 20 тугриків, +5 калорій).

Напишіть програму, яка розраховує вартість та калорійність гамбургера. Використовуйте ООП підхід.
(підказка: потрібен клас Гамбургер, константи, методи для вибору опцій та розрахунку потрібних величин)
*/

class Hamburger {
  constructor(size, filling, additives) {
    this.size = size;
    this.filling = filling;
    this.additives = additives;
  }

  calculateCost() {
    let cost = this.size.price + this.filling.price;
    this.additives.forEach(additive => {
      cost += additive.price;
    });
    return cost;
  }

  calculateCalories() {
    let calories = this.size.calories + this.filling.calories;
    this.additives.forEach(additive => {
      calories += additive.calories;
    });
    return calories;
  }
}

const SIZE_SMALL = {
  price: 50,
  calories: 20
};

const SIZE_LARGE = {
  price: 100,
  calories: 40
};

const FILLING_CHEESE = {
  price: 10,
  calories: 20
};

const FILLING_SALAD = {
  price: 20,
  calories: 5
};

const FILLING_POTATOES = {
  price: 15,
  calories: 10
};

const ADDITIVE_SEASONING = {
  price: 15,
  calories: 0
};

const ADDITIVE_MAYONNAISE = {
  price: 20,
  calories: 5
};


const myHamburger = new Hamburger(SIZE_LARGE, FILLING_CHEESE, [ADDITIVE_SEASONING, ADDITIVE_MAYONNAISE]);
const cost = myHamburger.calculateCost();
const calories = myHamburger.calculateCalories();

console.log("Ціна: " + cost + " тугриків");
console.log("Калорій: " + ккал);
