//Task_1 

let str = '';
let comma = ','

for (let a = 10; a <= 20; a++) {
  str = str + a + comma
}
console.log(str);



//Task_2

for (let i = 10; i <= 20; i++) {
  console.log(i * i);
}


//Task_3

for(let i = 0; i <= 10; i++) {
  console.log(`${i} * 7 = ${i * 7}`);
}


//Task_4

let sum = 0;

for(let i = 1; i <= 15; i++) {
  sum += i;
  console.log(sum);
}


//Task_5

let mult = 1;

for(let i = 15; i <= 35; i++) {
  mult = mult * i;
}
console.log(mult);


//Task_6

let sum = 0;
let n = 500;

for(let i = 1; i <= 500; i++) {
  sum += i;
}

let average = sum / n;
console.log(average);


//Task_7

let sum = 0;

for(let i = 30; i <= 80; i++) {
  if (i % 2 === 0) {
  sum += i;
  }
  console.log(sum);
}


//Task_8

let sum = 0;

for(let i = 30; i <= 80; i++) {
  if (i % 3 === 0) {
  sum += i;
  }
  console.log(sum);
}


//Task_9

let naturalNum = 48;

for (let i = 2; i * 2 <= naturalNum; i++) {
  if (naturalNum % i == 0) {
    console.log(i);
  }
}


//Task_10 + Task_11

let naturalNum = 48;

let count = 0;
let sum = 0;
for (let i = 2; i * 2 <= naturalNum; i++) {
  if (naturalNum % i == 0) {
    if (i % 2 === 0) {
      count++;
      sum += i;
    }
  }
}
console.log(count);


//Task_12

for(let i = 0; i <= 10; i++) {
  console.log(`${i} * 1 = ${i * 1}`);
}

for(let j = 0; j <= 10; j++) {
  console.log(`${j} * 2 = ${j * 2}`);
}

for(let k = 0; k <= 10; k++) {
  console.log(`${k} * 3 = ${k * 3}`);
}

for(let l = 0; l <= 10; l++) {
  console.log(`${l} * 4 = ${l * 4}`);
}
for(let m = 0; m <= 10; m++) {
  console.log(`${m} * 5 = ${m * 5}`);
}
for(let n = 0; n <= 10; n++) {
  console.log(`${n} * 6 = ${n * 6}`);
}
for(let o = 0; o <= 10; o++) {
  console.log(`${o} * 7 = ${o * 7}`);
}

for(let p = 0; p <= 10; p++) {
  console.log(`${p} * 8 = ${p * 8}`);
}
for(let q = 0; q <= 10; q++) {
  console.log(`${q} * 9 = ${q * 9}`);
}
for(let s = 0; s <= 10; s++) {
  console.log(`${s} * 10 = ${s * 10}`);
}

// or

const number = parseInt(prompt('Enter an integer: '));

for(let i = 1; i <= 10; i++) {
    const result = i * number;
    alert(`${number} * ${i} = ${result}`);
}
