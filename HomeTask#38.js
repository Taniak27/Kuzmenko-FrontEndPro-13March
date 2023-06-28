//1
let newWindow = window.open("https://github.com/Taniak27/Kuzmenko-FrontEndPro-13March/", "_blank");

// 2
setTimeout(function() {
  newWindow.close();
}, 3000);


/*
У цьому прикладі я використовую window.open() для відкриття нового вікна з URL-адресою 
"https://github.com/Taniak27/Kuzmenko-FrontEndPro-13March/". Параметр "_blank" вказує, що вікно повинно відкритися в новій вкладці браузера.
Потім я використовую функцію setTimeout() для встановлення затримки у 3 секунди перед викликом функції, яка викликає метод close() для закриття вікна myWindow.
*/
