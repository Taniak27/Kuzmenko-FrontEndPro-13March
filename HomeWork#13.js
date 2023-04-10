//HOMEWORK_13

// Реалізуйте функцію generateKey(length, characters), яка повертає рядок випадкових символів із набору characters довжиною length


const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';

function generateKey(length) {
  let result = ' ';
  const charactersLength = characters.length;
  for ( let i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }

  return result;
}

const key = generateKey(16, characters);
console.log(key);
