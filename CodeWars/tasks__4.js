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
//         .split('') // Разделяем строку на массив символов
//         .map(num => (num < '5' ? '0' : '1')) // Заменяем цифры
//         .join(''); // Соединяем обратно в строку
// }

// ...................................................................................................

