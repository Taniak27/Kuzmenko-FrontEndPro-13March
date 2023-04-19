/*
Написати функцію, яка приймає 1 параметр. з тим, що передали перший раз і т. д. Все це із замиканнями, наприклад:
sum(3) = 3
sum(5) = 8
sum(20) = 28
*/


function sum (value) {
    let step = value;
    sum = function() {
        let arg = arguments[0] ? arguments[0] : 0;
        return step = step + arg;
    };
    return sum();
};
console.log(sum(3)); 
console.log(sum(5)); 
console.log(sum(20)); 
