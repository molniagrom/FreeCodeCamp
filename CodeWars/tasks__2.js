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

// Вам даны два внутренних угла (в градусах) треугольника.
//
// Напишите функцию, возвращающую третье значение.
//
// Примечание: будут проверяться только положительные целые числа.
//
// https://en.wikipedia.org/wiki/Triangle

// function otherAngle(a, b) {
//     let allSum = 180;
//     const sum = a + b;
//     return allSum - sum;
// }

// ....................................................................

// У Бена очень простая идея, как получить прибыль: он что-то покупает и продает снова. Конечно, это не принесло бы ему никакой прибыли, если бы он просто покупал и продавал по одной и той же цене. Вместо этого он купит по самой низкой возможной цене и продаст по самой высокой.
//
//     Задача
// Напишите функцию, которая возвращает минимальное и максимальное число из указанного списка/массива.
//
// Примеры (Вход -> Выход)
//     [1,2,3,4,5] --> [1,5]
//     [2334454,5] --> [5,2334454]
//     [1]         --> [1,1]
// Замечания
// Все массивы или списки всегда будут иметь по крайней мере один элемент, поэтому вам не нужно проверять длину. Кроме того, ваша функция всегда получит массив или список, вам не нужно проверять на null, undefined или подобное.
//

// function minMax(arr){
//     const min = Math.min(...arr);
//     const max = Math.max(...arr);
//     return [min, max];
// }

// ..........................................................................

// Напишите функцию, которая проверяет, является ли заданная строка (без учета регистра) палиндромом.

// Палиндром — это слово, число, фраза или другая последовательность символов, которая читается одинаково как в прямом, так и в обратном порядке, например madam или racecar.

// function isPalindrome(x) {
//     // Приведение строки к нижнему регистру
//     const cleanedString = x.toLowerCase();
//
//     // Создание реверсированного варианта строки
//     const reversedString = cleanedString.split('').reverse().join('');
//
//     // Сравнение оригинальной строки с реверсированной
//     return cleanedString === reversedString;
// }

// ...........................................................................................

// Ваша задача — создать функцию, которая выполняет четыре основные математические операции.
//
// Функция должна принимать три аргумента - операция(строка/символ), значение1(число), значение2(число).
// Функция должна возвращать результат чисел после применения выбранной операции.
//
// Примеры(Оператор, значение1, значение2) --> вывод
// ('+', 4, 7) --> 11
// ('-', 15, 18) --> -3
// ('*', 5, 5) --> 25
// ('/', 49, 7) --> 7

// function basicOp(operation, value1, value2) {
//     // Создаем Map, где ключи — это операторы, а значения — функции для выполнения операций
//     const operations = new Map([
//         ['+', (a, b) => a + b],
//         ['-', (a, b) => a - b],
//         ['*', (a, b) => a * b],
//         ['/', (a, b) => a / b]
//     ]);
//
//     // Проверяем, существует ли ключ в Map для указанной операции
//     if (operations.has(operation)) {
//         // Если существует, вызываем соответствующую функцию с аргументами value1 и value2
//         return operations.get(operation)(value1, value2);
//     } else {
//         // Если операция не найдена, выбрасываем ошибку
//         throw new Error('Invalid operation');
//     }
// }

// .................................................................................................................

// Если указано число от 0 до 9, верните его словами.
//
// Вход: 1
//
// Выход: «Один».

// function switchItUp(number) {
//     const numberWords = {
//         0: 'Zero',
//         1: 'One',
//         2: 'Two',
//         3: 'Three',
//         4: 'Four',
//         5: 'Five',
//         6: 'Six',
//         7: 'Seven',
//         8: 'Eight',
//         9: 'Nine'
//     };
//
//     return numberWords[number];
// }

// ..............................................................................

// Дезоксирибонуклеиновая кислота, ДНК, является основной молекулой хранения информации в биологических системах. Она состоит из четырех оснований нуклеиновых кислот: гуанина ('G'), цитозина ('C'), аденина ('A') и тимина ('T').
//
// Рибонуклеиновая кислота, РНК, является основной молекулой-мессенджером в клетках. РНК немного отличается от ДНК по своей химической структуре и не содержит тимина. В РНК тимин заменяется другой нуклеиновой кислотой урацилом ('U').
//
// Создайте функцию, которая переводит заданную строку ДНК в РНК.
//
// Например:
//
// "GCAT"  =>  "GCAU"
// Входная строка может иметь произвольную длину - в частности, она может быть пустой. Все входные данные гарантированно являются допустимыми, т.е. каждая входная строка будет состоять только из 'G', 'C', 'A'и/или 'T'.


// function DNAtoRNA(dna) {
//     return dna.replace(/T/g, 'U');
// }

// ............................................................................................................

// Ваша цель — создать функцию, которая удаляет первый и последний символы строки. Вам дан один параметр — исходная строка. Вам не нужно беспокоиться о строках, содержащих менее двух символов.

// function removeChar(str){
//     return str.slice(1, -1);
//
// }

// ............................................................................................

// Создайте функцию, которая принимает целое число в качестве аргумента и возвращает значение "Even"для четных или "Odd"нечетных чисел.

// function evenOrOdd(number) {
//     return number % 2 === 0 ? "Even" : "Odd";
// }

// ........................................................................................................

// В этом ката речь идет об умножении заданного числа на восемь, если это четное число, и на девять в противном случае.

// function simpleMultiplication(number) {

//   if (number % 2 === 0) {
//     return number * 8;
//   } else{
//         return number * 9;
//   }
//
//     return number % 2 === 0 ? number * 8 : number * 9;
// }

// .............................................................................................................

// Герой направляется в замок, чтобы выполнить свою миссию. Однако ему сказали, что замок окружен парой могущественных драконов! Для победы над каждым драконом требуется 2 пули, наш герой понятия не имеет, сколько пуль ему следует нести.. Если предположить, что он схватит определенное заданное количество пуль и двинется вперед, чтобы сразиться с другим определенным заданным количеством драконов, выживет ли он?
//
// Верните true, если да, в противном случае false :)

// function hero(bullets, dragons){
//
//     if(bullets >= dragons * 2) {
//         return true;
//     } else{
//         return false;
//     }
//
// }

// ..................................................................................................................

// Получаете массив чисел, возвращаете сумму всех положительных единиц.
//
// Пример [1,-4,7,12]=>1 + 7 + 12 = 20
//
// Примечание: если суммировать нечего, то по умолчанию используется сумма 0.

// function positiveSum(arr) {
//     let sum = 0;
//
//     for(let i = 0; i < arr.length; i++) {
//         if(arr[i] > 0) {
//             sum += arr[i];
//         }
//     }
//
//     return sum;
// }

// .............................................................................................................

// Build a pyramid-shaped tower, as an array/list of strings, given a positive integer number of floors. A tower block is represented with "*" character.
//
// For example, a tower with 3 floors looks like this:
//
// [
//   "  *  ",
//   " *** ",
//   "*****"
// ]
// And a tower with 6 floors looks like this:

// function towerBuilder(count) {
//     const character = "*";
//     const rows = [];
//
//     function padRow(rowNumber, rowCount) {
//         return " ".repeat(rowCount - rowNumber) + character.repeat(2 * rowNumber - 1) + " ".repeat(rowCount - rowNumber);
//     }
//
//     for (let i = 1; i <= count; i++) {
//         rows.push(padRow(i, count));
//     }
//
//     return rows;
// }

// ...................................................................................................................

// Напишите функцию, которая принимает в качестве параметров целое число nи строку sи возвращает строку, sповторяющуюся ровно nраз.
//
// Примеры (вход -> выход)
// 6, "I"     -> "IIIIII"
// 5, "Hello" -> "HelloHelloHelloHelloHello"

// function repeatStr (n, s) {
//     return s.repeat(n);
// }

// .........................................................................................................................

// Complete the solution so that the function will break up camel casing, using a space between words.
//
// Example
// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""

// function solution(string) {
//     let result = "";
//
//     for (let i = 0; i < string.length; i++) {
//         if (string[i] === string[i].toUpperCase()) {
//             result += " " + string[i];
//         } else {
//             result += string[i];
//         }
//     }
//
//     return result;
// }

// ............................................................................................................

// We want to create a constructor function 'NameMe', which takes first name and last name as parameters. The function combines the first and last names and saves the value in "name" property.
//
//     We already implemented that function, but when we actually run the code, the "name" property is accessible, but the "firstName" and "lastName" is not accessible. All the properties should be accessible. Can you find what's wrong with it? A test fixture is also available
//
// function NameMe(first, last) {
//     this.firstName = first;
//     this.lastName = last;
//     return {name: this.firstName + ' ' + this.lastName};
// }
//
// var n = new NameMe('John', 'Doe');
// n.firstName //Expected: John
// n.lastName //Expected: Doe
// n.name //Expected: John Doe

// :

// function NameMe(first, last) {
//     this.firstName = first;
//     this.lastName = last;
//     this.name = this.firstName + ' ' + this.lastName;
// }


// ..................................................................................................................................

// Задача:
// Например, если задано неотрицательное целое число , вернуть строку с бормотанием: "1 sheep...2 sheep...3 sheep...". Ввод всегда будет допустимым, т. е. никаких отрицательных целых чисел.

// var countSheep = function (num) {
//     let result = '';
//     for (let i = 1; i <= num; i++) {
//         result += i + ' sheep...';
//     }
//     return result;
// }

// ...............................................................................................................................




