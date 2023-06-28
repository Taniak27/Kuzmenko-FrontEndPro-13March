//1)
let newWindow = window.open("https://github.com/Taniak27/Kuzmenko-FrontEndPro-13March/", "_blank");

// Закриття вікна через 3 секунди
setTimeout(function() {
  newWindow.close();
}, 3000);


/*
У цьому прикладі ми використовуємо window.open() для відкриття нового вікна з URL-адресою 
"https://github.com/Taniak27/Kuzmenko-FrontEndPro-13March/". Параметр "_blank" вказує, що вікно повинно відкритися в новій вкладці браузера.
Потім ми використовуємо функцію setTimeout() для встановлення затримки у 3 секунди перед викликом функції, яка викликає метод close() для закриття вікна myWindow.
*/
