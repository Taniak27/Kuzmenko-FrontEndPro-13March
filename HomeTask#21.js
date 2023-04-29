/*
1. Створити сутність "Людина".
Властивості:
імʼя;
вік.
Методи:
конструктор, який приймає два параметри: імʼя та вік;
метод, який виводить у консоль інформацію про людину.
2. Створити сутність "Автомобіль".
Властивості:
марка, модель, рік виписку, номерний знак (або на Ваш розсуд);
власник.
Методи:
конструктор, який приймає чотитри параметри (тобто, всі окрім власника): марка, модель, рік виписку, номерний знак 
присвоїти власника - метод повинен приймати екземпляр класу Людина, та зберігати екземпляр класу Людина у відповідному полі, якщо вік більше 18, інакше виводити у консоль відповідне повідомлення
метод, який виводить у консоль інформацію про автомобіль та викликає метод виводу інформації класу Людина для виведення інформації про власника

В якості демонстраціїї створити:
декілька екземплярів класу Людина;
декілька екземплярів класу Автомобіль;
присвоїти власників автомобілям.
*/


//1
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  showInfo() {
    console.log(`My name is ${this.name} and I am ${this.age} years old.`);
  }
}



//2 
class Car {
  constructor(brand, model, year, color, owner) {
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.color = color;
    if (owner.age > 18) {
      this.owner = owner;
    } else {
      console.log('You must be 18 years or older.')
    }
  }

  showCarInfo() {
    console.log(`Brand: ${this.brand}, Model: ${this.model}, Year: ${this.year}, Color: ${this.color}`);
    console.log("Owner:");
    this.owner.showInfo();
  }
}

let person1 = new Person('Tania', 27);
person1.showInfo();
let person2 = new Person('Nina', 29);
person2.showInfo();


const car1 = new Car("Mercedes-Benz", "G-Class", 2022, "Black", person1);
car1.showCarInfo();

const car2 = new Car("Tesla", "S", 2022, "White", person2);
car2.showCarInfo();
