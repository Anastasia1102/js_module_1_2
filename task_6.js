// Ось кілька задач для практики з використанням методів рядків (slice, includes, startsWith, endsWith, indexOf, trim) для початківців:

// Задача 1 (легка)

// Напишіть функцію getSubstring, яка приймає рядок str і повертає новий рядок, що є його першими 5 символами. Використайте метод slice.

function getSubstring(str) {
  return str.slice(0, 5);
}

console.log(getSubstring("Hello, world!")); // "Hello"
console.log(getSubstring("JavaScript")); // "JavaS"
console.log(getSubstring("Hi")); // "Hi" (якщо менше 5 символів, повертаємо все)

console.log("\n");

// Задача 2 (легка)

// Напишіть функцію containsWord, яка приймає рядок str і слово word, і повертає true, якщо word міститься у str. Використайте метод includes.

function containsWord(str, word) {
  return str.includes(word);
}

console.log(containsWord("Hello, world!", "world")); // true
console.log(containsWord("JavaScript is fun", "Java")); // true
console.log(containsWord("OpenAI is cool", "Python")); // false

console.log("\n");

// Задача 3 (середня)

// Створіть функцію checkStartAndEnd, яка приймає рядок str і два підрядки start та end. Функція повинна повертати true, якщо str починається з start і закінчується на end. Використайте методи startsWith і endsWith.

function checkStartAndEnd(str, start, end) {
  return str.startsWith(start) && str.endsWith(end);
}

console.log(checkStartAndEnd("JavaScript is fun", "JavaScript", "fun")); // true
console.log(checkStartAndEnd("Hello, world!", "Hello", "world")); // false
console.log(checkStartAndEnd("OpenAI rocks", "OpenAI", "rocks")); // true

console.log("\n");

// Задача 4 (середня)

// Напишіть функцію findWordPosition, яка приймає рядок str і слово word, і повертає індекс першого входження word в str. Якщо слово не знайдено, поверніть -1. Використайте метод indexOf.

function findWordPosition(str, word) {
  return str.indexOf(word);
}

console.log(findWordPosition("Hello, world!", "world")); // 7
console.log(findWordPosition("JavaScript is fun", "is")); // 11
console.log(findWordPosition("OpenAI is cool", "Python")); // -1

console.log("\n");

// Задача 5 (складна)

// Створіть функцію trimAndCheckLength, яка приймає рядок str і число length. Функція повинна обрізати пробіли на початку та в кінці рядка за допомогою trim і повернути true, якщо довжина обробленого рядка дорівнює length.

function trimAndCheckLength(str, length) {
  return str.trim().length === length;
}

console.log(trimAndCheckLength("  Hello world  ", 11)); // true
console.log(trimAndCheckLength("  JavaScript  ", 9)); // false
console.log(trimAndCheckLength("OpenAI", 6)); // true

console.log("\n");

// Задача 6 (складна)

// Напишіть функцію extractFileName, яка приймає повний шлях до файлу як рядок (наприклад, “/home/user/docs/file.txt”) і повертає назву файлу без розширення (наприклад, “file”). Використайте методи slice, lastIndexOf і indexOf.

function extractFileName(path) {
  return path.slice(path.lastIndexOf("/") + 1, path.indexOf("."));
}

console.log(extractFileName("/home/user/docs/file.txt")); // "file"
console.log(extractFileName("C:/projects/javascript/main.js")); // "main"
console.log(extractFileName("/path/to/photo.jpeg")); // "photo"

console.log("\n");
console.log("\n");
console.log("\n");

// Ці задачі допоможуть вам освоїти методи роботи з рядками та їх використання для вирішення різних завдань у JavaScript.
