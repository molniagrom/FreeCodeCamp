//Реализуйте функцию, которая преобразует заданное логическое значение в его строковое представление.
//
// function booleanToString(bool){
//
//     return bool.toString();
//
//     console.log(booleanToString(true));
//     console.log(booleanToString(false));
// }

//........................................................................

// Учитывая массив целых чисел, ваше решение должно найти наименьшее целое число.
//
//     Например:
//
// Учитывая, что [34, 15, 88, 2]ваше решение вернется2
// Учитывая, что [34, -345, -1, 100]ваше решение вернется-345
// Для целей этого ката можно предположить, что предоставленный массив не будет пустым.

// Function findSmallestInt(arr) {
// Используем Math.min для поиска наименьшего числа в массиве.
// Оператор расширения ... раскладывает массив arr на отдельные элементы,
// чтобы Math.min мог их сравнить.
//     return Math.min(...arr);
// }

// console.log(findSmallestInt([34, 15, 88, 2])); // Выведет 2
// console.log(findSmallestInt([34, -345, -1, 100])); // Выведет -345

//................................................................................

// function greet() {
//     return "hello world!";
// }
// greet()

// .............................................

// Convert boolean values to strings 'Yes' or 'No'.

// function boolToWord( bool ){
//     if(bool === true) {
//         return "Yes";
//     } else if (bool === false) {
//         return "No"
//     }
// }

// .........................................................
// Дополните решение так, чтобы оно перевернуло переданную в него строку.

// function solution(str){
//     return str.split('').reverse().join('');
//
// }

//................................................................

// какими способами можно преобразовать число (целое число) в строку? есть ещё способы... || num.toString(); || let str = `${num}`; || let str = num.toString();
// function numberToString(num) {
//     return ''+num;
// }

//.................................................................
// Ваша задача - сделать две функции (max и min, или maximum и minimum, и т.д., в зависимости от языка), которые получают на вход список целых чисел и возвращают наибольшее и наименьшее число в этом списке соответственно.

// var min = function(list){
//     return Math.min(...list)
// }
//
// var max = function(list){
//
//     return Math.max(...list)
// }

// .....................................................................................

// Напишите функцию findNeedle(), которая принимает array полный мусор, но содержит один"needle"
//
// После того, как ваша функция найдет иглу, она должна вернуть сообщение (в виде строки), которое гласит:
//
// "found the needle at position "плюс он index нашел иголку, так что:
//
// Пример (Вход -> Выход)
//
// ["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"] --> "found the needle at position 5"
// Примечание: в COBOL это должно возвращать "found the needle at position 6"

// function findNeedle(array) {
//     //  Метод indexOf, находит позицию "needle" в массиве
//     let index = array.indexOf("needle");
//
//     // Возвращаем сообщение с найденным индексом
//     return "found the needle at position " + index;
// }

// ..........................................................................
// Противоположное число

// function opposite(number) {
//     return -number;
// }

// .......................................................

// найти все пробелы и заменить
// function noSpace(x){
//     return x.replace(/\s+/g, '');
// }

//
// .....................................................................

// Напишите функцию, которая вычисляет среднее значение чисел в заданном списке. Примечание: Пустые массивы должны возвращать 0.

// function findAverage(array) {
//     // Проверяем, пустой ли массив
//     if (array.length === 0) {
//         return 0;
//     } else{
//         // Шаг 1: Сложить все числа
//         let sum = 0;
//         for (let i = 0; i < array.length; i++) {
//             sum += array[i];
//         }
//
//         // Шаг 2: Разделить сумму на количество чисел
//         let average = sum / array.length;
//
//         return average;
//     }
//
// }

// ................................................................................

// В этом небольшом задании вам дана строка чисел, разделенных пробелами, и вам нужно вернуть наибольшее и наименьшее число.
//
// Примеры
// highAndLow("1 2 3 4 5");  // return "5 1"
// highAndLow("1 2 -3 4 5"); // return "5 -3"
// highAndLow("1 9 3 4 -5"); // return "9 -5"
// Примечания
// Все номера действительны Int32, нет необходимости их проверять.
// Во входной строке всегда будет хотя бы одно число.
// Выходная строка должна состоять из двух чисел, разделенных одним пробелом, причем наибольшее число должно быть первым.

// function highAndLow(numbers) {
//     // Шаг 1: Разделить строку на массив строк
//     const numArray = numbers.split(' ');
//
//     // Шаг 2: Преобразовать строки в числа
//     const intArray = numArray.map(num => parseInt(num, 10));
//
//     // Шаг 3: Найти наибольшее и наименьшее число
//     const max = Math.max(...intArray);
//     const min = Math.min(...intArray);
//
//     // Шаг 4: Вернуть результат в виде строки
//     return `${max} ${min}`;
// }

// .............................................................................

// Преобразовать число в обратный массив цифр
// Дано случайное неотрицательное число, необходимо вернуть цифры этого числа в массиве в обратном порядке.
//
// Пример (Вход => Выход):
// 35231 => [1,3,2,5,3]
// 0 => [0]

// function digitize(n) {
//     return n.toString()            // Преобразуем число в строку
//         .split('')             // Разделяем строку на массив символов
//         .map(Number)           // Преобразуем каждый символ в число
//         .reverse();           // Разворачиваем массив в обратном порядке
// }

// ..........................................................................

// Дано множество чисел, вернуть аддитивное обратное для каждого. Каждое положительное становится отрицательным, а отрицательное становится положительным.

// function invertNumbers(numbers) {
//     return numbers.map(num => -num);
// }

// ...........................................................................
// Первый век охватывает период с 1 по 100 год включительно, второй век — с 101 по 200 год включительно и т.д.
//
// Задача
// Если указан год, верните столетие, в котором он находится.
//
// Примеры
// 1705 --> 18
// 1900 --> 19
// 1601 --> 17
// 2000 --> 20
// 2742 --> 28

//
// function century(year) {
//     // Округляем год до ближайшего века
//     return Math.ceil(year / 100);
// }
// ...............................................................................

//Камень ножницы бумага

// const rps = (p1, p2) => {
//     if (p1 === p2) {
//         return "Draw!";
//     }
//
//     if (
//         (p1 === "rock" && p2 === "scissors") ||
//         (p1 === "scissors" && p2 === "paper") ||
//         (p1 === "paper" && p2 === "rock")
//     ) {
//         return "Player 1 won!";
//     }
//
//     return "Player 2 won!";
// };

// ...................................................................

// Если квадрат вычисляем площадь, если прямоугольник - периметр

// const areaOrPerimeter = function(l , w) {
//     if (w === l) {
//         return w * l;
//     }
//     else {
//         return 2*(l+w);
//     }
// };

//............................................................................
// Распределить месяцы по кварталам

// const quarterOf = (month) => {
//     if (month <= 3) {
//         return 1
//     } else if (month <= 6) {
//         return 2
//     } else if (month <= 9) {
//         return 3
//     } else if (month <= 12) {
//         return 4
//     }
//
// }

// ......................................................................

// Расчитать сколько воды вьёт велосипедист на определённое время

// function litres(time) {
//     return Math.floor(time * 0.5);
// }

// ........................................................................
// Дан список целых чисел, определите, является ли сумма его элементов четной или нечетной.
//
// Дайте ответ в виде строки, соответствующей "odd" или "even".
//
// Если входной массив пуст, расцениваем его как: [0](массив с нулем).
//
// Примеры:
// Input: [0]
// Output: "even"
//
// Input: [0, 1, 4]
// Output: "odd"
//
// Input: [0, -1, -5]
// Output: "even"

// function oddOrEven(array) {
//     // 1. Если массив пуст, считаем, что он содержит только 0
//     if (array.length === 0) {
//         array = [0];
//     }
//
//     // 2. Рассчитываем сумму элементов массива
//     const sum = array.reduce((acc, num) => acc + num, 0);
//
//     // 3. Определяем, чётная ли сумма
//     return sum % 2 === 0 ? "even" : "odd";
// }
// ........................................................................................

// способ вычисления объема прямоугольного параллелепипеда с тремя значениями: length, width и height прямоугольного параллелепипеда

// class Kata {
//     static getVolumeOfCuboid(l, w, h) {
//         return l * w * h;
//     }
// }
// ............................................................................................................


//     Завершите функцию, которая принимает строку в качестве аргумента, представляющего текущее состояние света, и возвращает строку, представляющую состояние, в которое должен измениться свет.
//
//     Например, если входные данные равны green, выходные данные должны быть равны yellow.

// function updateLight(current) {
//     if (current === "green") {
//         return "yellow";
//     } else if (current === "yellow") {
//         return "red";
//     } else if (current === "red") {
//         return "green";
//     } else {
//         throw new Error("Invalid light color");
//     }
// }

// ...................................................................


























