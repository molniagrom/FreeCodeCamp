// Вам будет предоставлен массив a и значение x. Все, что вам нужно сделать, это проверить, содержит ли предоставленный массив значение.
//
// Массив может содержать числа или строки. X может быть любым из них.
//
// Верните true, если массив содержит значение, false если нет.

// function check(a, x) {
//     return a.includes(x);
// }




// ........................................................................

// Завершите функцию, которая принимает строковый параметр и переворачивает каждое слово в строке. Все пробелы в строке должны быть сохранены.

// Примеры
// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"

// function reverseWords(str) {
// Шаг 1: Разбиваем строку на слова по пробелам
// const words = str.split(" ");

// Шаг 2: Переворачиваем каждое слово
// const reversedWords = words.map(word => word.split("").reverse().join(""));

// Шаг 3: Соединяем перевёрнутые слова обратно в строку с пробелами
// return reversedWords.join(" ");
// }

// ..............................................................................................

// Напишите функцию ИМТ, которая вычисляет индекс массы тела (ИМТ = вес / рост 2).
//
// Если ИМТ <= 18,5 вернуть "Недостаточный вес"
//
// если ИМТ <= 25,0 вернуть "Нормально"
//
// если ИМТ <= 30,0 вернуть "Избыточный вес"
//
// если ИМТ > 30, вернуть «Ожирение»

// function bmi(weight, height) {
//     const bmiValue = weight / (height ** 2);
//
//     if (bmiValue <= 18.5) {
//         return "Underweight";
//     } else if(bmiValue <= 25.0) {
//         return "Normal"
//     } else if(bmiValue <= 30.0) {
//         return "Overweight"
//     } else if(bmiValue > 30) {
//         return "Obese"
//     }
//
// }
// ясм
// .............................................................................................

// АЛЬТЕРНАТИВНЫЙ РЕГИСТР <=> АЛЬТЕРНАТИВНЫЙ РЕГИСТР
// Определите String.prototype.toAlternatingCase(или аналогичную функцию/метод, например, to_alternating_case / toAlternatingCase/ ToAlternatingCase​​на выбранном вами языке; подробности см. в исходном решении ) так, чтобы каждая строчная буква стала заглавной, а каждая заглавная буква стала строчной. Например:
//
// "hello world".toAlternatingCase() === "HELLO WORLD"
// "HELLO WORLD".toAlternatingCase() === "hello world"
// "hello WORLD".toAlternatingCase() === "HELLO world"
// "HeLLo WoRLD".toAlternatingCase() === "hEllO wOrld"
// "12345".toAlternatingCase()       === "12345"                   // Non-alphabetical characters are unaffected
// "1a2b3c4d5e".toAlternatingCase()  === "1A2B3C4D5E"
// "String.prototype.toAlternatingCase".toAlternatingCase() === "sTRING.PROTOTYPE.TOaLTERNATINGcASE"
// Как обычно, ваша функция/метод должны быть чистыми, т.е. они не должны изменять исходную строку.

// // Добавляем метод toAlternatingCase к объекту String
// String.prototype.toAlternatingCase = function () {
//     // 'this' в данном контексте указывает на строку, с которой мы работаем
//     // Например, если мы вызовем "hello world".toAlternatingCase(),
//     // 'this' будет равно строке "hello world".
//
//     // split('') разбивает строку на массив символов.
//     // Например, "hello" превратится в ["h", "e", "l", "l", "o"].
//     return this.split('').map(char => {
//
//         // Проверяем, является ли символ заглавной буквой
//         if (char === char.toUpperCase()) {
//             // Если символ заглавный, превращаем его в строчный и возвращаем
//             return char.toLowerCase();
//         } else {
//             // Иначе (если символ строчный), превращаем его в заглавный и возвращаем
//             return char.toUpperCase();
//         }
//
//     }).join(''); // join('') соединяет массив символов обратно в строку
// };

// ....................................................................................................................................

// Программное обеспечение для распознавания символов широко используется для оцифровки печатных текстов. Таким образом, тексты можно редактировать, искать и сохранять на компьютере.
//
// При оцифровке документов (особенно довольно старых, написанных на пишущей машинке) программы распознавания символов часто допускают ошибки.
//
// Ваша задача - исправить ошибки в оцифрованном тексте. Вам нужно только обработать следующие ошибки:
//
// S неправильно истолковано как5
// O неправильно истолковано как0
// I неправильно истолковано как1

// function correct(string) {
//     // Метод replace позволяет заменить символы в строке.
//     // Здесь мы используем регулярные выражения для поиска нужных символов.
//
//     // Шаг 1: Заменяем все 5 на S
//     string = string.replace(/5/g, 'S');
//
//     // Шаг 2: Заменяем все 0 на O
//     string = string.replace(/0/g, 'O');
//
//     // Шаг 3: Заменяем все 1 на I
//     string = string.replace(/1/g, 'I');
//
//     // Возвращаем исправленную строку
//     return string;
// }

// ..............................................................................................................................

// Кто помнит то время на школьном дворе, когда девочки брали цветок и отрывали его лепестки, произнося каждую из следующих фраз каждый раз, когда отрывался лепесток:
//
// "Я тебя люблю"
// "немного"
// "много"
// "страстно"
// "безумно"
// "нисколько"
// Если лепестков больше 6, то вы начинаете сначала с "I love you"7 лепестков, "a little"затем с 8 лепестков и так далее.
//
// Когда последний лепесток был оторван, раздались крики восторга, мечты, нахлынувшие мысли и эмоции.
//
// Ваша цель в этом ката — определить, какую фразу девушки скажут на последнем лепестке цветка с заданным количеством лепестков. Количество лепестков всегда больше 0.


// ............................................................................................................................

// Дан массив целых чисел, вернуть новый массив, в котором каждое значение удвоено.
//
//     Например:
//
// [1, 2, 3] --> [2, 4, 6]

// function maps(x) {
//     return x.map(function(num) {
//         return num * 2;
//     });
// }

// ..............................................................................

//Создайте функцию, которая принимает на входе 2 целых числа в виде строки и выводит сумму (также в виде строки):
//
// Пример: (Вход1, Вход2 -->Выход )
//
// "4", "5" --> "9"
// "34", "5" --> "39"
// "", "" --> "0"
// "2", "" --> "2"
// "-5", "3" --> "-2"
// Примечания:
//
// Если какой-либо из входных данных представляет собой пустую строку, считайте ее нулем.
//
// Входные данные и ожидаемый вывод никогда не превысят предел 32-битного целого числа со знаком ( 2^31 - 1)

// function sumStr(a, b) {
//     // Преобразуем строки в числа, заменяя пустые строки на '0'
//     const num1 = a === "" ? 0 : Number(a);
//     const num2 = b === "" ? 0 : Number(b);
//
//     // Возвращаем сумму в виде строки
//     return String(num1 + num2);
// }

// ................................................................................................

//Создайте функцию, которая возвращает массив целых чисел от n до 1, где n>0.

// Пример: n=5-->[5,4,3,2,1]

// const reverseSeq = n => {
//     // Проверяем, что n больше 0
//     if (n <= 0) {
//         return [];
//     }
//
//     // Создаем пустой массив
//     const result = [];
//
//     // Заполняем массив числами от n до 1
//     for (let i = n; i >= 1; i--) {
//         result.push(i);
//     }
//
//     // Возвращаем результат
//     return result;
// };

// ...............................................................................................................

// Создайте функцию, которая будет возвращать приветственное выражение, использующее входные данные; ваша программа должна возвращать "Hello, <name> how are you doing today?".
//
// [Убедитесь, что вы вводите именно то, что я написал, иначе программа может работать некорректно]

// function greet(name){
//     return `Hello, ${name} how are you doing today?`;
// }

// .......................................................................................................

// Часы показывают h часы, m минуты и s секунды после полуночи.
//
// Ваша задача — написать функцию, которая возвращает время с полуночи в миллисекундах.
//
// Пример:
// h = 0
// m = 1
// s = 1
//
// result = 61000
// Входные ограничения:
//
// 0 <= h <= 23
// 0 <= m <= 59
// 0 <= s <= 59

// Формулы
// Часы в миллисекундах:
//     1 час = 60 минут × 60 секунд × 1000 миллисекунд = 3,600,000 миллисекунд.
//     Поэтому: h * 3600000.
// Минуты в миллисекундах:
//     1 минута = 60 секунд × 1000 миллисекунд = 60,000 миллисекунд.
//     Поэтому: m * 60000.
// Секунды в миллисекундах:
//     1 секунда = 1000 миллисекунд.
//     Поэтому: s * 1000.
// Алгоритм
// Сложите все значения, чтобы получить общее количество миллисекунд:

// function past(h, m, s) {
//     return (h * 3600000) + (m * 60000) + (s * 1000);
// }

// ...........................................................................................................

// Напишите функцию, которая берет массив слов, объединяет их в предложение и возвращает предложение. Вы можете игнорировать необходимость очистки слов или добавления знаков препинания, но вы должны добавлять пробелы между каждым словом. Будьте осторожны, не должно быть пробела в начале или конце предложения!
//
//     Пример
//         ['hello', 'world', 'this', 'is', 'great']  =>  'hello world this is great'

// function smash(words) {
//     return words.join(' ');
// }

// ................................................................................................................

// Функция шифра A1Z26

// В этом ката вам необходимо, имея заданную строку, заменить каждую букву ее положением в алфавите.
//
// Если в тексте есть что-то, что не является буквой, проигнорируйте это и не возвращайте.
//
// "a" = 1, "b" = 2, и т. д.
//
// Пример
// Input = "The sunset sets at twelve o' clock."
// Output = "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11"

// function alphabetPosition(text) {
//     // Приводим строку к нижнему регистру и разбиваем на массив символов
//     return text
//         .toLowerCase() // Приводим к нижнему регистру
//         .split('') // Разбиваем на массив символов
//         .filter(char => char >= 'a' && char <= 'z') // Оставляем только буквы
//         .map(char => char.charCodeAt(0) - 96) // Преобразуем в позицию в алфавите
//         .join(' '); // Объединяем в строку с пробелами
// }

//.............................................................................

// Завершите функцию, которая принимает два целых числа ( a, b, где a < b) и возвращает массив всех целых чисел между входными параметрами, включая их самих.
//
//     Например:
//
// a = 1
// b = 4
// --> [1, 2, 3, 4]

// function between(a, b) {
//     // Создаем пустой массив для хранения результатов
//     let result = [];
//
//     // Используем цикл for для добавления чисел от a до b в массив
//     for (let i = a; i <= b; i++) {
//         result.push(i); // Добавляем текущее число i в массив
//     }
//
//     // Возвращаем заполненный массив
//     return result;
// }

// ...............................................................................................




















