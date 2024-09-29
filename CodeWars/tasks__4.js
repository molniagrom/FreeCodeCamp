// В этом ката вы создадите функцию, которая принимает список и возвращает список в обратном порядке.
//
// Примеры (Вход -> Выход)
// * [1, 2, 3, 4] -> [4, 3, 2, 1]
// * [9, 2, 0, 7]  -> [7, 0, 2, 9]
//
// function reverseList(list) {
//     return list.reverse()
// }

//.......................................................................................

// Создайте функцию, которая принимает строку и один символ и возвращает целое число — количество вхождений второго аргумента в первый.
//
// 0Если не удалось найти ни одного вхождения, следует вернуть количество.
//
// ("Hello", 'o') => 1
// ("Hello", 'l')  => 2
// ("", 'z') => 0
// Примечания
// Первый аргумент может быть пустой строкой.
//     В языках, не имеющих отдельного символьного типа данных, второй аргумент будет строкой длины 1.

// function strCount(str, letter) {
//     // Инициализация счётчика
//     let count = 0;
//
//     // Перебор каждого символа в строке
//     for (let i = 0; i < str.length; i++) {
//         // Сравнение символов
//         if (str[i] === letter) {
//             count++; // Увеличиваем счётчик при совпадении
//         }
//     }
//
//     // Возвращаем количество вхождений
//     return count;
// }

//......................................................................................

// вычислить квадрат числа

// function square(num) {
//     return num * num;
// }

// ............................................................................................

// Эта функция должна проверять, factor является ли множителем base.
//
// Вернитесь true, является ли это фактором или false нет.
//
// О факторах
// Множители — это числа, которые можно перемножить, чтобы получить другое число.
//
// 2 и 3 являются множителями 6, потому что:2 * 3 = 6
//
// Вы можете найти множитель, разделив числа. Если остаток равен 0, то число является множителем.
// В большинстве языков можно использовать оператор mod (%) для проверки остатка.
// Например, 2 не является множителем числа 7, потому что:7 % 2 = 1
//
// Примечание: base — не отрицательное число, factor — положительное число.

// function checkForFactor(base, factor) {
//     // Проверяем, является ли factor множителем base
//     return base % factor === 0;
// }

// ........................................................................................................

// Дан массив целых чисел, удалить наименьшее значение. Не изменять исходный массив/список. Если есть несколько элементов с одинаковым значением, удалить элемент с наименьшим индексом. Если вы получили пустой массив/список, вернуть пустой массив/список.
//
// Не меняйте порядок оставшихся элементов.
//
// Примеры
// * Input: [1,2,3,4,5], output = [2,3,4,5]
// * Input: [5,3,2,1,4], output = [5,3,2,4]
// * Input: [2,2,1,2,1], output = [2,2,2,1]

// function removeSmallest(numbers) {
//     // Если массив пустой, возвращаем пустой массив
//     if (numbers.length === 0) return [];
//
//     // Находим индекс наименьшего элемента
//     let minIndex = 0;
//     for (let i = 1; i < numbers.length; i++) {
//         if (numbers[i] < numbers[minIndex]) {
//             minIndex = i;
//         }
//     }
//
//     // Создаем новый массив, исключая элемент с наименьшим индексом
//     return numbers.filter((_, index) => index !== minIndex);
// }

// ................................................................

// Вам дан массив целых чисел нечетной длины , в котором все числа одинаковы, за исключением одного числа.

// Завершите метод, который принимает такой массив и возвращает это единственное отличающееся число.

// Входной массив всегда будет действителен! (нечетная длина >= 3)

// Примеры
// [1, 1, 2] ==> 2
// [17, 17, 3, 17, 17, 17, 17] ==> 3

// function stray(numbers) {
//   return numbers.find((num) => numbers.filter((n) => n === num).length === 1);
// }

// ***

// function stray(numbers) {
//     const count = {};  // Создаём объект для хранения количества вхождений

//     // Проходим по массиву и подсчитываем количество каждого числа
//     numbers.forEach(num => {
//       count[num] = (count[num] || 0) + 1;  // Увеличиваем счётчик в объекте
//     });

//     // Проходим по объекту и находим число с вхождением 1
//     for (let key in count) {
//       if (count[key] === 1) {
//         return Number(key);  // Возвращаем найденное число
//       }
//     }
//   }
//   ..........................................................................

// Напишите функцию для преобразования имени в инициалы. Эта ката строго принимает два слова с одним пробелом между ними.
// Вывод должен состоять из двух заглавных букв, разделенных точкой
// Это должно выглядеть так:

// Sam Harris=>S.H
// patrick feeney=>P.F

// function abbrevName(name) {
//   // Разделяем имя на слова
//   const parts = name.split(" ");
//   // Берем первую букву каждого слова, приводим к верхнему регистру и соединяем с точкой
//   return `${parts[0][0].toUpperCase()}.${parts[1][0].toUpperCase()}`;
// }

// .........................................................................................

// Дана строка цифр, вам следует заменить любую цифру ниже 5 на '0', а любую цифру 5 и выше на '1'. Верните полученную строку.
// Примечание: ввод никогда не будет пустой строкой.

// function fakeBin(x) {
//     let result = '';
//     for (let i = 0; i < x.length; i++) {
//         result += (x[i] < '5' ? '0' : '1'); // Заменяем цифры
//     }
//     return result;
// }

// ****

// function fakeBin(x) {
//     return x
// .split('') // Разделяем строку на массив символов
// .map(num => (num < '5' ? '0' : '1')) // Заменяем цифры
// .join(''); // Соединяем обратно в строку
// }

// ...................................................................................................

// Даны три целых числа a, b, и c, вернуть наибольшее число, полученное после вставки операторов +, *, и скобок (). Другими словами, попробовать каждую комбинацию a, b, и cс операторами, не переупорядочивая операнды, и вернуть максимальное значение.

// Пример
// Вот несколько возможных выражений с числами 1, 2 и 3:

// 1 * (2 + 3) = 5
// 1 * 2 * 3 = 6
// 1 + 2 * 3 = 7
// (1 + 2) * 3 = 9
// Максимальное значение, которое можно получить, — 9.

// Примечания
// Числа всегда положительные и находятся в диапазоне 1 ≤ a, b, c ≤ 10.
// Одну и ту же операцию можно использовать несколько раз.
// Нет необходимости использовать все операторы и скобки.
// Вы не можете поменять операнды местами. Например, с данными числами вы не можете получить выражение (1 + 3) * 2 = 8.

// function expressionMatter(a, b, c) {
//     // Вычисляем все возможные выражения
//     const results = [
//       a + b + c,
//       a * b * c,
//       a + b * c,
//       a * b + c,
//       (a + b) + c,
//       (a * b) * c,
//       a + (b + c),
//       a * (b * c),
//       (a + b) * c,
//       a * (b + c),
//     ];

//     // Возвращаем максимальное значение
//     return Math.max(...results);
//   }

// ..........................................................................................

// Создайте функцию, которая shortcutудаляет строчные гласные ( a, e, i, o, u) в заданной строке.

// Примеры
// "hello"     -->  "hll"
// "codewars"  -->  "cdwrs"
// "goodbye"   -->  "gdby"
// "HELLO"     -->  "HELLO"
// не беспокойтесь о заглавных гласных
// yне считается гласной для этой ката

// function shortcut(string) {
//     return string
//             .split('') // Разделяем строку на массив символов
//             .map(char => {
//               // Заменяем строчные гласные на пустую строку
//               if ('aeiou'.includes(char)) {
//                 return ''; // Если символ - гласная, заменяем на пустую строку
//               }
//               return char; // Если не гласная, возвращаем символ
//             })
//             .join(''); // Соединяем обратно в строку
//   }

// ***

// function shortcut(string) {
//     return string.replace(/[aeiou]/g, '');
//   }

// ..................................................................................................................

// Даны два целых числа aи b, которые могут быть положительными или отрицательными, найдите сумму всех целых чисел между ними и включая их и верните ее. Если два числа равны, верните aили b.

// Примечание: a и bне заказываются!

// Примеры (a, b) -> вывод (объяснение)
// (1, 0) --> 1 (1 + 0 = 1)
// (1, 2) --> 3 (1 + 2 = 3)
// (0, 1) --> 1 (0 + 1 = 1)
// (1, 1) --> 1 (1 since both are same)
// (-1, 0) --> -1 (-1 + 0 = -1)
// (-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2)
// Ваша функция должна возвращать только число, а не объяснение того, как вы это число получили.

// function getSum(a, b) {
//     let sum = 0;
//     const start = Math.min(a, b);
//     const end = Math.max(a, b);

//     for (let i = start; i <= end; i++) {
//         sum += i;
//     }

//     return sum;
// }

// ..............................................................................................

// Банкоматы допускают использование 4- или 6-значных PIN-кодов, которые не могут содержать ничего, кроме 4 или 6 цифр.
// Если функции передана допустимая строка PIN-кода, вернуть true, в противном случае вернуть false.

// Примеры ( Вход -> Выход)
// "1234"   -->  true
// "12345"  -->  false
// "a234"   -->  false

// function validatePIN(pin) {
//     // Проверяем, что длина PIN-кода равна 4 или 6, и все символы - цифры
//     return (pin.length === 4 || pin.length === 6) && /^\d+$/.test(pin);
// }

// объяснение

// pin.length === 4 || pin.length === 6

// Что происходит здесь: Мы проверяем, что длина строки pin составляет либо 4, либо 6 символов. Если длина другая, выражение сразу станет false, и функция вернёт false.

// /^\d+$/.test(pin)

//  Это регулярное выражение, которое проверяет, что строка состоит только из цифр. Вот его разбор:

// ^: Обозначает начало строки.
// \d: Обозначает одну цифру (это любой символ от '0' до '9').
// +: Указывает, что таких цифр должно быть одна или более.
// $: Обозначает конец строки.
// Что проверяет это регулярное выражение:

// Строка должна начинаться с цифры (^).
// Все символы в строке должны быть цифрами (\d+).
// Строка должна заканчиваться цифрой ($). То есть строка целиком должна состоять из одной или более цифр и не содержать других символов (например, букв или пробелов).
// .test(pin): Метод .test() используется для проверки строки на соответствие регулярному выражению. Если строка pin полностью состоит из цифр, метод вернёт true; если содержит что-то другое (например, буквы или символы), он вернёт false.

// Логическое И: &&
// && (логическое И): Этот оператор объединяет две части выражения:
// Проверку длины PIN-кода.
// Проверку, что все символы — цифры.
// Оператор && возвращает true, только если обе части выражения истинны. Если хотя бы одна часть false, итоговый результат также будет false.

// ***

function validatePIN(pin) {
  // Проверяем длину PIN-кода
  if (pin.length !== 4 && pin.length !== 6) {
    return false;
  }

  // Проверяем, что все символы являются цифрами
  for (let i = 0; i < pin.length; i++) {
    if (pin[i] < "0" || pin[i] > "9") {
      return false;
    }
  }

  return true;
}

// ......................................................................................................................

// Анаграмма — это результат перестановки букв слова для получения нового слова (см. Википедию ).
// Примечание: анаграммы нечувствительны к регистру.
// Завершите функцию возврата true, если два аргумента являются анаграммами друг друга; falseв противном случае возвратите значение.

// var isAnagram = function(test, original) {

//     test = test.toLowerCase();
//     original = original.toLowerCase();

//     let sortedTest = test.split('').sort().join('');
//     let sortedOriginal = original.split('').sort().join('');

//     return sortedTest === sortedOriginal;
// };

// ..............................................................................................................

// Дополните функцию так, чтобы она находила среднее значение трех переданных ей оценок и возвращала буквенное значение, связанное с этой оценкой.

// Числовая оценка	Буквенная оценка
// 90 <= оценка <= 100	«А»
// 80 <= оценка < 90	«Б»
// 70 <= оценка < 80	'С'
// 60 <= оценка < 70	'Д'
// 0 <= оценка < 60	'Ф'
// Все проверенные значения находятся в диапазоне от 0 до 100. Нет необходимости проверять наличие отрицательных значений или значений больше 100.

// function getGrade(s1, s2, s3) {

//     let averageValue = (s1 + s2 + s3) / 3;

//  if (averageValue >= 90 && averageValue <= 100) {
//     return "A";
//   } else if (averageValue >= 80 && averageValue < 90) {
//     return "B";
//   } else if (averageValue >= 70 && averageValue < 80) {
//     return "C";
//   } else if (averageValue >= 60 && averageValue < 70) {
//     return "D";
//   } else {
//     return "F";
//   }
// }

// ...............................................................................................................................

// Напишите программу, которая находит сумму каждого числа от 1 до num. Число всегда будет положительным целым числом больше 0. Вашей функции нужно только вернуть результат, то, что показано в скобках в примере ниже, — это то, как вы достигаете этого результата, и это не его часть, см. примеры тестов.
// Например (Вход -> Выход) :

// 2 -> 3 (1 + 2)
// 8 -> 36 (1 + 2 + 3 + 4 + 5 + 6 + 7 + 8)

// var summation = function (num) {
//   let result = 0;
//   for (let i = 1; i <= num; i++) {
//     result += i;
//   }
//   return result;
// };

// ..................................................................................................................................

// Задача
// Я написал пять функций. Каждая функция получает параметр arr, который является массивом. Завершите функции, используя arrвнутри тел функций.

// 1. getLength(arr)    should return length of arr
// 2. getFirst(arr)     should return the first element of arr
// 3. getLast(arr)      should return the last element of arr
// 4. pushElement(arr)  should push an element to arr, and then return arr
// 5. popElement(arr)   should pop an element from arr, and then return arr
// Закончив работу, нажмите «Выполнить тесты», чтобы проверить, правильно ли работает ваш код.

// В конце нажмите «Отправить», чтобы отправить свой код для прохождения этого ката.

// function getLength(arr){
//   //return length of arr
//   return arr.length;
// }
// function getFirst(arr){
//   //return the first element of arr
//   return arr[0];
// }
// function getLast(arr){
//   //return the last element of arr
//   return arr[arr.length-1];
// }
// function pushElement(arr){
//   var el=4;
//   //push el to arr
//   arr.push(el);
//   return arr;
// }
// function popElement(arr){
//   //pop an element from arr
//   arr.pop();
//   return arr;
// }

// ......................................................................................

// Ваша функция принимает два аргумента:
// возраст нынешнего отца (лет)
// текущий возраст его сына (лет)
// Вычислите, сколько лет назад отец был вдвое старше своего сына (или через сколько лет он будет вдвое старше). Ответ всегда больше или равен 0, независимо от того, было ли это в прошлом или в будущем.

// function twiceAsOld(dadYearsOld, sonYearsOld) {
//   return Math.abs(dadYearsOld - 2 * sonYearsOld);
// }

// Нам нужно определить разницу между возрастом отца и удвоенным возрастом сына. Это покажет, сколько лет прошло (или сколько осталось) до того момента, когда отец был в два раза старше сына.
// Например, если отец сейчас 40 лет, а сыну — 10 лет, то когда-то отец был (или будет) вдвое старше сына, то есть ему было (или будет) 20 лет, когда сыну было (или будет) 10 лет.
// Формула:

// Нам нужно найти разницу между возрастом отца и удвоенным возрастом сына:
// разница = dadYearsOld - 2 × sonYearsOld

// разница=dadYearsOld−2×sonYearsOld
// Если эта разница положительная, значит, это событие произошло в прошлом. Если отрицательная — оно произойдёт в будущем.
// Возвращаем абсолютное значение:

// Нам важно только количество лет, поэтому мы берём абсолютное значение (всегда положительное):
// ответ = ∣ dadYearsOld − 2 × sonYearsOld ∣

// Таким образом, мы получаем, сколько лет назад или через сколько лет отец был или будет вдвое старше.

// ....................................................................................

// Вы спрашиваете маленькую девочку: «Сколько тебе лет?» Она всегда отвечает: «x лет», где x — случайное число от 0 до 9.
// Напишите программу, которая возвращает возраст девочки (0-9) в виде целого числа.
// Предположим, что тестовая входная строка всегда является допустимой строкой. Например, тестовая входная строка может быть "1 year old" или "5 years old". Первый символ в строке всегда является числом.

// function getAge(inputString) {
//   return parseInt(inputString[0], 10);
// }
// ........................................................................................................................................................

// Полная функция saleHotdogs/ SaleHotDogs/ sale_hotdogs, функция принимает 1 параметр: n, n — количество хотдогов, которое купит клиент, разные числа имеют разные цены (см. следующую таблицу), возвращает сумму, которую клиент потратит на покупку этого количества хотдогов.

// количество хот-догов	цена за единицу (центы)
// п < 5	100
// n >= 5 и n < 10	95
// п >= 10	90

// function saleHotdogs(n){
//   return n < 5 ? n * 100 : n < 10 ? n * 95 : n * 90;
// }

// ***

// function saleHotdogs(n) {
//   if (n < 5) {
//     return n * 100;
//   } else if (n < 10) {
//     return n * 95;
//   } else {
//     return n * 90;
//   }
// }

//...............................................................................................

// Завершите функцию howManydays. Она принимает 1 параметр month, что означает месяц года. Разные месяцы имеют разное количество дней, как показано в таблице ниже. Верните количество дней, которые находятся в month. Нет необходимости в проверке входных данных: месяц всегда будет больше 0 и меньше или равен 12.

// function howManydays(month) {
//   var days;
//   switch (month) {
//     case 1:
//     case 3:
//     case 5:
//     case 7:
//     case 8:
//     case 10:
//     case 12:
//       days = 31;
//       break;
//     case 4:
//     case 6:
//     case 9:
//     case 11:
//       days = 30;
//       break;
//     case 2:
//       days = 28;
//       break;
//     default:
//       days = 0; // на всякий случай, но эта строка не потребуется, так как вход всегда будет между 1 и 12
//   }
//   return days;
// }

// ...............................................................................................

// Создайте боевую функцию, которая берет текущее здоровье игрока и количество полученного урона, и возвращает новое здоровье игрока. Здоровье не может быть меньше 0 .

// function combat(health, damage) {
//   const newHealth = health - damage;
//    return newHealth > 0 ? newHealth : 0;
//  }

//  .....................................................................................................

// Вам необходимо написать функцию, которая принимает три параметра:

// cap количество людей, которое может вместить автобус, не считая водителя.
// on количество людей в автобусе, не считая водителя.
// wait количество людей, ожидающих посадки в автобус, не считая водителя.
// Если места достаточно, вернуть 0, а если нет, вернуть количество пассажиров, которых он не может взять.

// function enough(cap, on, wait) {
//   const vacantSeats = cap - on;

//   if (vacantSeats >= wait) {
//     return 0;
//   } else {
//     return wait - vacantSeats;
//   }
// }

// ***

// function enough(cap, on, wait) {
//   return Math.max(wait + on - cap, 0);
// }

// ...................................................................................................

// Если в качестве входных данных задано целое число, можно ли округлить его до ближайшего (то есть «больше или равно») кратного 5 числа?

// Примеры:

// input:    output:
// 0    ->   0
// 2    ->   5
// 3    ->   5
// 12   ->   15
// 21   ->   25
// 30   ->   30
// -2   ->   0
// -5   ->   -5
// etc.
// Входными данными могут быть любые положительные или отрицательные целые числа (включая 0).

// Можно предположить, что все входные данные являются допустимыми целыми числами.

// function roundToNext5(n) {
//   while (n % 5 !== 0) {
//     n++;
//   }
//   return n;
// }

// ***

// function roundToNext5(n) {
//   return Math.ceil(n / 5) * 5;
// }

// ............................................................................................................................................................

// В некоторых языках сценариев, таких как PHP, существует логический оператор (например &&, ||, and, , or, и т. д.), называемый «Исключающее ИЛИ» (отсюда и название этого Ката). Исключающее ИЛИ оценивает два булевых значения. Затем он возвращает, trueесли только одно из двух выражений истинно , falseв противном случае. Например:

// false xor false == false // since both are false
// true xor false == true // exactly one of the two expressions are true
// false xor true == true // exactly one of the two expressions are true
// true xor true == false // Both are true.  "xor" only returns true if EXACTLY one of the two expressions evaluate to true.
// Задача
// Поскольку мы не можем определять ключевые слова в Javascript (ну, по крайней мере, я не знаю, как это сделать), ваша задача — определить функцию, xor(a, b)где aи b— два выражения, которые нужно оценить. Ваша xorфункция должна иметь поведение, описанное выше, возвращая , trueесли только одно из двух выражений оценивается как true , falseв противном случае.

function xor(a, b) {
  return a !== b;
}
// a !== b — Оператор строгого неравенства !== сравнивает два значения. Он возвращает true, если a и b имеют разные значения, и false, если они одинаковы.
// ...................................................................

// Создать программу, которая будет принимать два списка целых чисел, aи b. Каждый список будет состоять из 3 положительных целых чисел больше 0, представляющих размеры прямоугольных параллелепипедов aи b. Вы должны найти разницу объемов прямоугольных параллелепипедов независимо от того, какой из них больше.
// Например, если переданы параметры ([2, 2, 3], [5, 4, 1]), то громкость aравна 12, а громкость bравна 20. Следовательно, функция должна вернуть 8.

// // function findDifference(a, b) {
//   // Вычисляем объем первого параллелепипеда
//   const volumeA = a[0] * a[1] * a[2];

//   // Вычисляем объем второго параллелепипеда
//   const volumeB = b[0] * b[1] * b[2];

//   // Возвращаем абсолютную разницу между объемами
//   return Math.abs(volumeA - volumeB);
// }

// ****

// const findDifference = (a, b) => Math.abs(a[0] * a[1] * a[2] - b[0] * b[1] * b[2]);

// Ваша задача — написать функцию, которая принимает строку и возвращает новую строку, в которой удалены все гласные.
// Например, строка «Этот сайт для неудачников LOL!» превратится в «Ths wbst s fr lsrs LL!».
// Примечание: в данном случае ката yне считается гласной.

// function disemvowel(str) {
//   return str.replace(/[aeiouAEIOU]/g, '');}

// ...........................................................................

// Таракан — одно из самых быстрых насекомых. Напишите функцию, которая берет его скорость в км в час и возвращает ее в см в секунду, округленную до целого числа (= floored).

// Например:

// 1.08 --> 30
// Примечание! Входные данные — вещественное число (фактический тип зависит от языка) и >= 0. Результатом должно быть целое число.

// function cockroachSpeed(s) {
//   return Math.floor((s * 100000) / 3600);
// }

// ............................................................................................................................

// Реализуйте функцию, которая принимает 3 целочисленных значения a, b, c. Функция должна возвращать true, если треугольник может быть построен со сторонами заданной длины, и false в любом другом случае.

// (В этом случае все треугольники должны иметь поверхность больше 0, чтобы быть принятыми).

// Примеры:

// Input -> Output
// 1,2,2 -> true
// 4,2,3 -> true
// 2,2,2 -> true
// 1,2,3 -> false
// -5,1,3 -> false
// 0,2,3 -> false
// 1,2,9 -> false

// я сама написала...)))
// function isTriangle(a, b, c) {
//   if (a + b > c && a + c > b && b + c > a) {
//     if (a || b || c > 0) {
//       return true;
//     } else {
//       return false;
//     }
//   } else {
//     return false;
//   }
// }

// ***
// function isTriangle(a,b,c){
//    return a + b > c && a + c > b && c + b > a;
// }

// .......................................................................................................

// Возьмите массив и удалите каждый второй элемент из массива. Всегда сохраняйте первый элемент и начинайте удаление со следующего элемента.
// Пример:
// ["Keep", "Remove", "Keep", "Remove", "Keep", ...]-->["Keep", "Keep", "Keep", ...]
// Ни один из массивов не будет пустым, так что вам не о чем беспокоиться!

// function removeEveryOther(arr){
//   let newArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     if(i % 2 === 0){
//       newArr.push(arr[i])
//     }
//   }
//   return newArr;
// }

// ............................................................................................................

// Вам нужно написать функцию, которая переворачивает слова в заданной строке. Слова всегда разделяются одним пробелом.
// Поскольку входные данные могут содержать конечные пробелы, вам также придется игнорировать ненужные пробелы.
// Пример ( Вход -> Выход )

// "Hello World" --> "World Hello"
// "Hi There." --> "There. Hi"

function reverse(string) {
  // Удаляем лишние пробелы и разбиваем строку на слова
  const words = string.trim().replace(/\s+/g, " ").split(" ");

  // Переворачиваем массив слов
  const reversedWords = words.reverse();

  // Объединяем слова обратно в строку
  return reversedWords.join(" ");
}

// .............................................................................

// Напишите функцию для разбиения строки и преобразования ее в массив слов.
// Примеры (Вход ==> Выход):
// "Robin Singh" ==> ["Robin", "Singh"]

// "I love arrays they are my favorite" ==> ["I", "love", "arrays", "they", "are", "my", "favorite"]

// Я сама написала
function stringToArray(string) {
  return string.split(" ");
}
// ................................................................................................

// Если в имени ровно 4 буквы, то это точно ваш друг! В противном случае, будьте уверены, это не...

// Input = {"Ryan", "Kieran", "Jason", "Yous"}
// Output = {"Ryan", "Yous"}

// Input = {"Peter", "Stephen", "Joe"}
// Output = {}
// Входные строки будут содержать только буквы. Примечание: сохраните исходный порядок имен в выходных данных.

//я сама
// function friend(friends) {
//   const result = friends.filter((friend) => friend.length === 4);
//   return result;
// }

// ....................................................................................

// В большом городе настало время бонусов! Толстокровые потирают лапки в предвкушении... но кто заработает больше всего денег?
// Создайте функцию, которая принимает два аргумента (зарплата, премия). Зарплата будет целым числом, а премия — логическим.
// Если бонус — правда, зарплату следует умножить на 10. Если бонус — ложь, то толстосум не заработал достаточно денег и должен получить только свою заявленную зарплату.
// Возвращает общую сумму, которую получит пользователь, в виде строки с префиксом «£» (= "\u00A3", JS, Go, Java, Scala и Julia), «$» (C#, C++, Dart, Ruby, Clojure, Elixir, PHP, Python, Haskell и Lua) или «¥» (Rust).

function bonusTime(salary, bonus) {
  if (bonus === true) {
    return "£" + salary * 10;
  } else {
    return "£" + salary;
  }
}

// .................................................................................................

// Получив букву, верните ее положение в алфавите.
// Ввод :: "а"
// Вывод :: "Позиция алфавита: 1"
// Примечание: проверяются только строчные буквы английского языка.
//В JavaScript есть способ получить числовое представление символа с помощью метода .charCodeAt()

function position(letter) {
  let letterNum = letter.charCodeAt() - 97 + 1;
  return `Position of alphabet: ${letterNum}`;
}

// .....................................................................................

// Учитывая строку, необходимо вернуть строку, в которой каждый символ (с учетом регистра) повторяется один раз.

// Примеры (Вход -> Выход):
// * "String"      -> "SSttrriinngg"
// * "Hello World" -> "HHeelllloo  WWoorrlldd"
// * "1234!_ "     -> "11223344!!__  "

// function doubleChar(str) {
//   let str2 = "";
//   for (let i = 0; i < str.length; i++) {
//     str2 += str[i] + str[i];
//   }
//   return str2;
// }

// .............................................................................................

// Учитывая список уникальных numbersэлементов, отсортированных по возрастанию, вернуть новый список так, чтобы значения увеличивались на 1 для каждого индекса от минимального значения до максимального значения (оба включены).

// Пример
// Input:  1,3,5,6,7,8 Output: 1,2,3,4,5,6,7,8

// function pipeFix(numbers) {
//   let max = Math.max(...numbers);
//   let min = Math.min(...numbers);

//   let fixedArray = [];
//   for (let i = min; i <= max; i++) {
//     fixedArray.push(i);
//   }
//   return fixedArray;
// }

// .............................................................................................

// Создайте метод, который позволит проверить, состоит ли строка ВСЕХ ЗАГЛАВНЫХ букв.

// Примеры (вход -> выход)
// "c" -> False
// "C" -> True
// "hello I AM DONALD" -> False
// "HELLO I AM DONALD" -> True
// "ACSKLDFJSgSKLDFJSKLDFJ" -> False
// "ACSKLDFJSGSKLDFJSKLDFJ" -> True
// В этом ката считается, что строка набрана ВСЕМИ ЗАГЛАВНЫМИ БУКВАМИ, если она не содержит ни одной строчной буквы, поэтому любая строка, не содержащая вообще ни одной буквы, тривиально считается набранной ВСЕМИ ЗАГЛАВНЫМИ БУКВАМИ.

String.prototype.isUpperCase = function () {
  if (this.length === 0) {
    return true;
  }
  for (let i = 0; i < this.length; i++) {
    if (this[i] !== this[i].toUpperCase()) {
      return false;
    }
  }
  return true;
};

// .....................................................................................................
