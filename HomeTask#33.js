/*
Створити програму для відображення результатів голосування. З наступними умовами:
  1. Як варіанти відповіді - смайлики. За замовчуванням, 5шт.
  2. Виведення даних - смайлики в один рядок, під ними - кількість тих, хто проголосував за кожен смайл.
  3. При натисканні на смайл - під ним змінюється значення лічильника.
  4. Реалізувати таким чином, щоб додавання нових варіантів відповіді не вело до додавання нових функцій.
*/

let voteOptions = {
  'smile1': 0,
  'smile2': 0,
  'smile3': 0,
  'smile4': 0,
  'smile5': 0
};

let voteContainer = document.getElementById('voteContainer');

function vote(option) {
  voteOptions[option]++;
  updateVoteResults();
}

function updateVoteResults() {
  voteContainer.innerHTML = '';

  for (let option in voteOptions) {
    let count = voteOptions[option];
    let optionDiv = document.createElement('div');

    let smileImg = document.createElement('img');
    smileImg.src = option + '.png';
    smileImg.alt = option;
    smileImg.addEventListener('click', vote.bind(null, option));

    let countSpan = document.createElement('span');
    countSpan.textContent = count;

    optionDiv.appendChild(smileImg);
    optionDiv.appendChild(countSpan);
    voteContainer.appendChild(optionDiv);
  }
}

updateVoteResults();
