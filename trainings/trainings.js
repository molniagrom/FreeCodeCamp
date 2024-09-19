// Замените код Function Expression стрелочной функцией:

// function ask(question, yes, no) {
//     if (confirm(question)) yes()
//     else no();
// }
//
// ask(
//     "Вы согласны?",
//     function() { alert("Вы согласились."); },
//     function() { alert("Вы отменили выполнение."); }
// );

// .......................................................

// function ask(question, yes, no) {
//     if (confirm(question)) yes()
//     else no();
// }
//
// ask(
//     "Вы согласны?",
//     () => alert("Вы согласились."),
//     () => alert("Вы отменили выполнение.")
// );

// возвращает наименьшее из a и b.

// function min(a,b){
//     return a < b ? a : b;
// }

// .............................................................................

// Логические операторы

// || (ИЛИ):
// Возвращает первое истинное значение или последнее значение, если все ложные.
//     Пример:
//
// let a = false;
// let b = true;
// let result = a || b; // result будет true


// ||= (Оператор логического присваивания ИЛИ):
// Присваивает значение переменной, если она ложна.
//     Пример:
//
// let x = null;
// x ||= 'default'; // x будет 'default'


// && (И):
// Возвращает первое ложное значение или последнее значение, если все истинные.
//     Пример:
//
// let a = true;
// let b = false;
// let result = a && b; // result будет false
//


// &&= (Оператор логического присваивания И):
// Присваивает значение переменной, если оно истинно.
//     Пример:
//
// let y = true;
// y &&= false; // y будет false


// ! (НЕ):
// Инвертирует значение операнда.
//     Пример:
//
// let a = true;
// let result = !a; // result будет false
//


// ?? (Оператор нулевого слияния):
// Возвращает правый операнд, если левый операнд равен null или undefined.
//     Пример:
//
// let a = null;
// let result = a ?? 'default'; // result будет 'default'
//


// ??= (Оператор нулевого присваивания):
// Присваивает значение переменной, если она равна null или undefined.
//     Пример:
//
// let z;
// z ??= 'default'; // z будет 'default'

// console.log(0 && 5 || 6 && null || 7);
// Ответ: 7;

// console.log(false || 1 && 2 || 3 && 0);
// Ответ: 2

//..................................................................................

// Напишите условие if для проверки, что переменная age находится в диапазоне между 14 и 90 включительно.

// «Включительно» означает, что значение переменной age может быть равно 14 или 90.

// if(age >= 14 && age <= 90)

// .....................................................................................................
//
// Напишите условие if для проверки, что значение переменной age НЕ находится в диапазоне 14 и 90 включительно.
//
//     Напишите два варианта: первый с использованием оператора НЕ !, второй – без этого оператора.

// if (!(age >= 14 && age <= 90))

// if (age < 14 || age > 90)

// ....................................................................................................

// Какие из перечисленных ниже alert выполнятся?
// Какие конкретно значения будут результатами выражений в условиях if(...)?

// if (-1 || 0) alert( 'first' );
// if (-1 && 0) alert( 'second' );
// if (null || -1 && 1) alert( 'third' );

// Ответ: 1 и 3;

// ...................................................................................................................

// Напишите код, который будет спрашивать логин с помощью prompt.
//
//     Если посетитель вводит «Админ», то prompt запрашивает пароль, если ничего не введено или нажата клавиша Esc – показать «Отменено», в противном случае отобразить «Я вас не знаю».
//
// Пароль проверять так:
//
//     Если введён пароль «Я главный», то выводить «Здравствуйте!»,
// Иначе – «Неверный пароль»,
// При отмене или в случае если ничего не введено – «Отменено».


// let login = prompt("Введите логин:");
//
// if (login === "Админ") {
//     let password = prompt('Введите пароль:');
//     if (password === null || password === '') {
//         console.log("Отменено");
//     } else if (password === "Я главный") {
//         console.log("Здравствуйте!");
//     } else {
//         console.log("Неверный пароль");
//     }
// } else if (login === null || login === '') {
//     console.log("Отменено");
// } else {
//     console.log("Я вас не знаю");
// }

// ....................................................................................................

// Объекты

// let user = {
    // name: "John",
    // surname: "Smith"
// }

// user.name = "Pete";
// delete user.name;
// console.log(user.name);

// function isEmpty(obj) {
    // if (Object.keys(obj).length === 0) {
    //     return true;
    // } else {
    //     return false;
    // }
//     return Object.keys(obj).length === 0;
// }

// or

// function isEmpty(obj) {
//     for (let key in obj) {
//         // если тело цикла начнет выполняться - значит в объекте есть свойства
//         return false;
//     }
//     return true;
// }

// ....................................................................................

// У нас есть объект, в котором хранятся зарплаты нашей команды. Напишите код для суммирования всех зарплат и сохраните результат в переменной sum. Должно получиться 390.
//
// Если объект salaries пуст, то результат должен быть 0.

// let salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130
// }
//
// let sum = 0;
//
// for (let key in salaries) {
//     sum += salaries[key];
// }
//
// console.log(sum);

// ...................................................................................................

// Умножаем на 2

// let menu = {
//     width: 200,
//     height: 300,
//     title: "My menu"
// };
//
// function multiplyNumeric(menu) {
//     for (let key in menu) {
//         if (typeof menu[key] === 'number') {
//             menu[key] *= 2; // Умножаем на 2 и сохраняем результат
//         }
//     }
// }

// ..........................................................................
