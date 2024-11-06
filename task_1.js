/*Ось кілька задач для практики з використанням Number.parseInt та Number.parseFloat:

Задача 1 (легка)

Напишіть функцію parseIntOrNan, яка приймає рядок і повертає його ціле значення за допомогою Number.parseInt. Якщо рядок не можна перетворити на ціле число, функція повинна повернути NaN.*/

function parseIntOrNan(str) {
  return Number.parseInt(str);
}

console.log(parseIntOrNan("42")); // 42
console.log(parseIntOrNan("abc123")); // NaN
console.log(parseIntOrNan("123abc")); // 123

console.log("\n");

// Задача 2 (середня)

// Створіть функцію extractInteger, яка приймає рядок, що містить ціле число з певною основою, і повертає це число в десятковій системі за допомогою Number.parseInt. Функція повинна мати другий параметр для вказання основи (наприклад, 16 для шістнадцяткових чисел).

function extractInteger(str, base) {
  return Number.parseInt(str, base);
}

console.log(extractInteger("1F", 16)); // 31
console.log(extractInteger("1010", 2)); // 10
console.log(extractInteger("123", 8)); // 83

console.log("\n");

// Задача 3 (складна)

// Напишіть функцію parseFloatWithFallback, яка приймає рядок і намагається перетворити його на число з плаваючою крапкою за допомогою Number.parseFloat. Якщо рядок не містить дійсного числа, функція повинна повертати число 0.

// function parseFloatWithFallback(str) {
//   if (isNaN(Number.parseFloat(str))) {
//     return 0;
//   }
//   return Number.parseFloat(str);
// }

function parseFloatWithFallback(str) {
  const result = Number.parseFloat(str);
  return isNaN(result) ? 0 : result;
}
console.log(parseFloatWithFallback("45.67")); // 45.67
console.log(parseFloatWithFallback("abc123.45")); // 0
console.log(parseFloatWithFallback("0.99")); // 0.99

console.log("\n");

// Задача 4 (складна)

// Створіть функцію sumOfParsedNumbers, яка приймає масив рядків і повертає суму всіх чисел, які вдалося конвертувати з цих рядків за допомогою Number.parseInt або Number.parseFloat. Якщо рядок не можна перетворити на число, пропускайте його.

function sumOfParsedNumbers(arr) {
  return arr.reduce((sum, item) => {
    const parsed = Number.parseFloat(item);
    return isNaN(parsed) ? sum : sum + parsed;
  }, 0);
}

console.log(sumOfParsedNumbers(["10", "20.5", "abc", "30"])); // 60.5
console.log(sumOfParsedNumbers(["1.1", "2.2", "3.3"])); // 6.6
console.log(sumOfParsedNumbers(["abc", "def", "ghi"])); // 0

console.log("\n");
console.log("\n");
console.log("\n");
