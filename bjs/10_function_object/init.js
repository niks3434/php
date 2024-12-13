const buttonGen = document.querySelector('.buttonGen');

buttonGen.addEventListener('click', function () {
    const initPerson = personGenerator.getPerson();
    document.getElementById('firstNameOutput').innerText = initPerson.firstName;
    document.getElementById('genderOutput').innerText = initPerson.gender;
    document.getElementById('surnameOutput').innerText = initPerson.surname;
    document.getElementById('patronymicOutput').innerText = initPerson.patronymic;
    document.getElementById('birthYearOutput').innerText = initPerson.age;
    document.getElementById('professionOutput').innerText = initPerson.profession;
});

const buttonDel = document.querySelector('.buttonDel');

buttonDel.addEventListener('click', function () {
    document.getElementById('firstNameOutput').innerText = '';
    document.getElementById('genderOutput').innerText = 'Генерация пола';
    document.getElementById('surnameOutput').innerText = '';
    document.getElementById('patronymicOutput').innerText = '';
    document.getElementById('birthYearOutput').innerText = 'Генерация года рождения';
    document.getElementById('professionOutput').innerText = '';
});

