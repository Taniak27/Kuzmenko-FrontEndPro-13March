/*
Реалізовуємо форму для реєстрації.
Поля:
  - Ім'я, Прізвище (Текстові поля)
  - Дата народження (Текстове поле)
  - Стать (radio)
  - Місто (select)
  - Адреса (textarea)
  - Мови, якими володіє (checkbox)
  - ….
  - Кнопка “Зберегти”

За натисканням на кнопку замість форми повинна виводитися “таблиця” з даними, які ввів користувач.
*/

function saveUserData() {
  let firstName = document.getElementById('firstName').value;
  let lastName = document.getElementById('lastName').value;
  let dob = document.getElementById('dob').value;
  let gender = document.querySelector('input[name="gender"]:checked').value;
  let city = document.getElementById('city').value;
  let address = document.getElementById('address').value;
  let languages = [];

  let language1 = document.getElementById('language1');
  let language2 = document.getElementById('language2');
  let language3 = document.getElementById('language3');

  if (language1.checked) {
    languages.push(language1.value);
  }
  if (language2.checked) {
    languages.push(language2.value);
  }
  if (language3.checked) {
    languages.push(language3.value);
  }

  let userDataRow = '<tr>' +
                    '<td>' + firstName + '</td>' +
                    '<td>' + lastName + '</td>' +
                    '<td>' + dob + '</td>' +
                    '<td>' + gender + '</td>' +
                    '<td>' + city + '</td>' +
                    '<td>' + address + '</td>' +
                    '<td>' + languages.join(', ') + '</td>' +
                    '</tr>';

  let userDataTable = document.getElementById('userDataTable');

  userDataTable.innerHTML += userDataRow;

  let registrationForm = document.getElementById('registrationForm');
  registrationForm.style.display = 'none';

  let userDataDiv = document.getElementById('userData');
  userDataDiv.style.display = 'block';
}
