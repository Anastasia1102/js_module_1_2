// Ось кілька задач для практики з використанням арифметичних функцій Math.floor, Math.ceil, Math.round, Math.max, Math.min, Math.random для початківців:

// Задача 1 (легка)

// Напишіть функцію roundToNearest, яка приймає десяткове число і повертає його округлене значення за допомогою Math.round.

function roundToNearest(num) {
  return Math.round(num);
}

console.log(roundToNearest(4.5)); // 5
console.log(roundToNearest(4.4)); // 4
console.log(roundToNearest(-2.7)); // -3

console.log("\n");

// Задача 2 (легка)

// Напишіть функцію randomBetweenZeroAndOne, яка повертає випадкове число від 0 до 1 за допомогою Math.random.

function randomBetweenZeroAndOne() {
  return Math.random();
}

console.log(randomBetweenZeroAndOne()); // випадкове число між 0 і 1
console.log(randomBetweenZeroAndOne()); // інше випадкове число між 0 і 1

console.log("\n");

// Задача 3 (середня)

// Створіть функцію randomIntegerInRange, яка приймає два числа min та max і повертає випадкове ціле число в цьому діапазоні, включаючи обидва значення.

function randomIntegerInRange(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

console.log(randomIntegerInRange(1, 10)); // випадкове число між 1 та 10 включно
console.log(randomIntegerInRange(5, 15)); // випадкове число між 5 та 15 включно

console.log("\n");

// Задача 4 (середня)

// Напишіть функцію findExtremeValues, яка приймає масив чисел і повертає об’єкт з найбільшим і найменшим значеннями з цього масиву, використовуючи Math.max та Math.min.

// function findExtremeValues(arr) {
//   // ваш код тут
// }

// console.log(findExtremeValues([10, 5, 8, 20, 3])); // { max: 20, min: 3 }
// console.log(findExtremeValues([-10, -5, -8, -20, -3])); // { max: -3, min: -20 }

// Задача 5 (складна)

// Створіть функцію simulateDiceRoll, яка повертає випадкове ціле число від 1 до 6, щоб симулювати кидок грального кубика.

function simulateDiceRoll() {
  return Math.round(Math.random() * 6);
}

console.log(simulateDiceRoll()); // випадкове число від 1 до 6
console.log(simulateDiceRoll()); // інше випадкове число від 1 до 6

console.log("\n");

// Задача 6 (складна)

// Напишіть функцію roundDownToNearestTen, яка приймає число і округлює його вниз до найближчого десятка за допомогою Math.floor.

function roundDownToNearestTen(num) {
  return Math.floor(num / 10) * 10;
}

console.log(roundDownToNearestTen(57)); // 50
console.log(roundDownToNearestTen(123)); // 120
console.log(roundDownToNearestTen(99)); // 90

console.log("\n");
console.log("\n");
console.log("\n");

// Ці задачі допоможуть вам освоїти базові арифметичні функції та їх застосування для роботи з випадковими числами та округленням в JavaScript.
