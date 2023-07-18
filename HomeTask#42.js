// 1. Модифікувати інтернет-магазин таким чином, щоб була можливість переглянути всі збережені замовлення навіть після оновлення сторінки (використовувати localStorage).
// 2. На сторінці спочатку крім списку категорій відображається також кнопка “мої замовлення”.
// 3. При кліку на “мої замовлення” - пропадають категорії та відображається список усіх замовлень користувача (дата та ціна) - при кліку на замовлення - “розгортаються” деталі замовлення.
// 4. Реалізувати можливість видалення замовлення зі списку.


let categoriesDiv = document.getElementById('categories');
let myOrdersBtn = document.getElementById('myOrdersBtn');
let ordersListDiv = document.getElementById('ordersList');

myOrdersBtn.addEventListener('click', function() {

categoriesDiv.style.display = 'none';
myOrdersBtn.style.display = 'none';

ordersListDiv.style.display = 'block';

let savedOrders = JSON.parse(localStorage.getItem('orders')) || [];

displayOrders(savedOrders);
});

function displayOrders(orders) {
  ordersListDiv.innerHTML = ''; 

  orders.forEach(function(order, index) {
    let orderItem = document.createElement('div');
    orderItem.classList.add('order-item');
    orderItem.innerHTML = '<span class="order-date">' + order.date + '</span>' +
                          '<span class="order-price">' + order.price + ' грн</span>' +
                          '<button class="order-details-btn">Деталі</button>' +
                          '<button class="order-delete-btn">Видалити</button>';

    let detailsBtn = orderItem.querySelector('.order-details-btn');
    let deleteBtn = orderItem.querySelector('.order-delete-btn');

    detailsBtn.addEventListener('click', function() {
      showOrderDetails(order);
    });

    deleteBtn.addEventListener('click', function() {
      deleteOrder(index);
    });

    ordersListDiv.appendChild(orderItem); 
  });
}

function showOrderDetails(order) {
  console.log('Дата замовлення:', order.date);
  console.log('Ціна:', order.price);
  console.log('Деталі:', order.details);
}

function deleteOrder(index) {
  let savedOrders = JSON.parse(localStorage.getItem('orders')) || [];

  savedOrders.splice(index, 1);

  localStorage.setItem('orders', JSON.stringify(savedOrders));

  displayOrders(savedOrders);
}

function saveOrder(order) {
  let savedOrders = JSON.parse(localStorage.getItem('orders')) || [];
  savedOrders.push(order);
  localStorage.setItem('orders', JSON.stringify(savedOrders));
}

let order1 = {
  date: '2023-07-01',
  price: 100,
  details: 'Деталі замовлення 1'
};
saveOrder(order1);

let order2 = {
  date: '2023-07-05',
  price: 200,
  details: 'Деталі замовлення 2'
};
saveOrder(order2);
