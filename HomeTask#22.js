/*
Вам потрібно зробити конструктор сутності "Студент".

Студент має ім'я, прізвище, рік народження — це властивості. Є масив з оцінками, це також властивість. І є можливість отримати вік студента та його середній бал – це методи.

Ще у всіх Студентів є по масиву однакової довжини, у ньому 25 елементів, спочатку він не заповнений, але на 25 елементів. Це масив, в якому відзначається відвідуваність, щоразу коли ми викликаємо метод .present() на чергове порожнє місце, в масив записується true, коли викликаємо .absent() - записується false. Передбачте будь-який захист від того, щоб у масиві відвідуваності не могло бути більше 25 записів. Масив – це властивість, present та absent – ​​методи.

Останній метод: .summary(), перевіряє середню оцінку і середнє відвідування(кількістьВідвідин/кількістьЗанять), і якщо середня оцінка більше 90, а середнє відвідування більше 0.9, то метод summary повертає рядок "Молодець!", якщо одне з цих значень менше , то - "Добре, але можна краще ", якщо обидва нижче - "Редиска!".

Не забудьте після того, як напишите цей конструктор, створити 2-3 екземпляри (конкретних студентів) і показати використання цих методів.
*/

class Student {
  constructor(firstName, lastName, yearOfBirth) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.yearOfBirth = yearOfBirth;
    this.scores = [];
    this.attendance = new Array(25).fill(undefined);
  }

  getAge() {
    const today = new Date();
    const birthDate = new Date(this.yearOfBirth, 0, 1);
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
  }

  getAverageScore() {
    const sum = this.scores.reduce((acc, curr) => acc + curr, 0);
    return sum / this.scores.length;
  }

  present() {
    const index = this.attendance.findIndex(item => item === undefined);
    if (index !== -1) {
      this.attendance[index] = true;
    } else {
      console.log("Attendance array is full.");
    }
  }

  absent() {
    const index = this.attendance.findIndex(item => item === undefined);
    if (index !== -1) {
      this.attendance[index] = false;
    } else {
      console.log("Attendance array is full.");
    }
  }

  summary() {
    const averageScore = this.getAverageScore();
    const numberOfClasses = this.attendance.length;
    const numberOfVisits = this.attendance.filter(item => item === true).length;
    const averageAttendance = numberOfVisits / numberOfClasses;
    if (averageScore > 90 && averageAttendance > 0.9) {
      return "Well done!";
    } else if (averageScore > 90 || averageAttendance > 0.9) {
      return "Good, but it can be better.";
    } else {
      return "Radish!";
    }
  }
}


const tania = new Student("Tania", "Kuzmenko", 1995);
tania.scores = [100, 95, 76, 100, 100];
tania.present();
tania.present();
tania.absent();
console.log(tania.getAge());
console.log(tania.getAverageScore());
console.log(tania.attendance);
console.log(tania.summary());


const vlad = new Student("Vlad", "Pishtigan", 1995);
vlad.scores = [100, 95, 89, 100, 100];
vlad.present();
vlad.present();
vlad.absent();
vlad.present();
vlad.present();
vlad.present();
console.log(vlad.getAge());
console.log(vlad.getAverageScore());
console.log(vlad.attendance);
console.log(vlad.summary());
