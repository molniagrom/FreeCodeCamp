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


