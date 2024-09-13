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

//Кто помнит то время на школьном дворе, когда девочки брали цветок и отрывали его лепестки, произнося каждую из следующих фраз каждый раз, когда отрывался лепесток:

//"Я тебя люблю"
//"немного"
//"много"
//"страстно"
//"безумно"
//"нисколько"
//Если лепестков больше 6, то вы начинаете сначала с "I love you"7 лепестков, "a little"затем с 8 лепестков и так далее.

//Когда последний лепесток был оторван, раздались крики восторга, мечты, нахлынувшие мысли и эмоции.

//Ваша цель в этом ката — определить, какую фразу девушки скажут на последнем лепестке цветка с заданным количеством лепестков. Количество лепестков всегда больше 0.

function howMuchILoveYou(nbPetals) {
        // Массив с фразами на английском
            const phrases = [
                    "I love you",
                            "a little",
                                    "a lot",
                                            "passionately",
                                                    "madly",
                                                            "not at all"
                                                                ];

                                                                    // Находим индекс фразы для последнего лепестка
                                                                        // nbPetals - 1, так как индексы в массиве начинаются с 0
                                                                            const index = (nbPetals - 1) % phrases.length;

                                                                                // Возвращаем соответствующую фразу
                                                                                    return phrases[index];
                                                                                    }



