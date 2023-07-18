/*
Пишемо свій слайдер зображень.
  1. Відображаємо зображення та кнопки Next, Prev з боків від зображення.
  2. При кліку на Next - показуємо наступне зображення.
  3. При кліку на Prev - попереднє .
  4. При досягненні останнього зображення - ховати кнопку Next. Аналогічно з першим зображенням і кнопкою Prev.
*/

let currentImageIndex = 0;
let sliderImages = document.querySelectorAll('.slider-image');
let prevButton = document.querySelector('.slider-button.prev');
let nextButton = document.querySelector('.slider-button.next');

function checkButtons() {
  if (currentImageIndex === 0) {
    prevButton.classList.add('hidden');
  } else {
    prevButton.classList.remove('hidden');
  }

  if (currentImageIndex === sliderImages.length - 1) {
    nextButton.classList.add('hidden');
  } else {
    nextButton.classList.remove('hidden');
  }
}

function nextImage() {
  if (currentImageIndex < sliderImages.length - 1) {
    sliderImages[currentImageIndex].classList.add('hidden');
    currentImageIndex++;
    sliderImages[currentImageIndex].classList.remove('hidden');
  }

  checkButtons();
}

function prevImage() {
  if (currentImageIndex > 0) {
    sliderImages[currentImageIndex].classList.add('hidden');
    currentImageIndex--;
    sliderImages[currentImageIndex].classList.remove('hidden');
  }

  checkButtons();
}

prevButton.classList.add('hidden');

checkButtons();

