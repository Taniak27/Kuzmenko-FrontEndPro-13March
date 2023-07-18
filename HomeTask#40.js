/*
1. В інформації товару - кнопка "купити".
 - При натисканні на "купити" нижче з'являється форма оформлення замовлення з наступними полями:
    - ПІБ покупця
    - Місто (вибір зі списку)
    - Склад Нової пошти для надсилання
    - Післяплати або оплати банківської картки
    - Кількість продукції, що купується
    - Коментар до замовлення
2. Реалізувати перевірку всіх даних користувача під час підтвердження замовлення - обов'язкові поля заповнені. Інакше - виводити помилку на сторінку
3. Виводити інформацію про замовлення на сторінку (інформація про товар та про доставку)
*/


let categoriesDiv = document.getElementById('categories');
let productInfoDiv = document.getElementById('productInfo');
let buyBtn = document.querySelector('.buyBtn');
let orderFormDiv = document.getElementById('orderForm');
let orderForm = document.getElementById('orderForm');
let orderConfirmationDiv = document.getElementById('orderConfirmation');
let orderInfoP = document.getElementById('orderInfo');

buyBtn.addEventListener('click', function() {
  categoriesDiv.style.display = 'none';
  productInfoDiv.style.display = 'none';

  orderFormDiv.style.display = 'block';
});

orderForm.addEventListener('submit', function(event) {
  event.preventDefault(); 
  let fullName = document.getElementById('fullName').value;
  let city = document.getElementById('city').value;
  let novaPoshtaBranch = document.getElementById('novaPoshtaBranch').value;
  let paymentMethod = document.getElementById('paymentMethod').value;
  let quantity = document.getElementById('quantity').value;
  let comment = document.getElementById('comment').value;

  if (!fullName || !city || !novaPoshtaBranch || !paymentMethod || !quantity) {
    alert(`Будь ласка, заповніть всі обов'язкові поля.`);
    return;
  }

  let order = {
    fullName: fullName,
    city: city,
    novaPoshtaBranch: novaPoshtaBranch,
    paymentMethod: paymentMethod,
    quantity: quantity,
    comment: comment
  };

  orderInfoP.textContent = 'ПІБ покупця: ' + order.fullName +
                            '\nМісто: ' + order.city +
                            '\nСклад Нової пошти: ' + order.novaPoshtaBranch +
                            '\nСпосіб оплати: ' + order.paymentMethod +
                            '\nКількість: ' + order.quantity +
                            '\nКоментар: ' + order.comment;

  orderFormDiv.style.display = 'none';

  orderConfirmationDiv.style.display = 'block';
});
