// Ось кілька задач для практики з використанням циклу for з інкрементом та декрементом для початківців:

// Задача 1 (легка, інкремент)

// Напишіть функцію printNumbersUpTo, яка приймає число n і виводить усі числа від 1 до n включно. Використайте цикл for з інкрементом.

function printNumbersUpTo(n) {
  for (let i = 1; i <= n; i++) {
    console.log(i);
  }
}

printNumbersUpTo(5);
// Вивід:
// 1
// 2
// 3
// 4
// 5

console.log("\n");

// Задача 2 (легка, декремент)

// Напишіть функцію printNumbersDownFrom, яка приймає число n і виводить усі числа від n до 1 включно. Використайте цикл for з декрементом.

function printNumbersDownFrom(n) {
  for (let i = n; i >= 1; --i) {
    console.log(i);
  }
}

printNumbersDownFrom(5);
// Вивід:
// 5
// 4
// 3
// 2
// 1
console.log("\n");

// Задача 3 (середня, інкремент)

// Створіть функцію sumEvenNumbers, яка приймає число n і обчислює суму всіх парних чисел від 1 до n включно. Використайте цикл for з інкрементом.

function sumEvenNumbers(n) {
  let sum = 0;
  for (let i = 2; i <= n; i += 2) {
    sum += i;
  }
  return sum;
}

console.log(sumEvenNumbers(10)); // 30 (2 + 4 + 6 + 8 + 10)
console.log(sumEvenNumbers(7)); // 12 (2 + 4 + 6)

console.log("\n");

// Задача 4 (середня, декремент)

// Напишіть функцію factorial, яка приймає число n і повертає його факторіал (n!). Використайте цикл for з декрементом.

function factorial(n) {
  let factorial = 1;
  for (let i = 1; i <= n; ++i) {
    factorial *= i;
  }
  return factorial;
}

console.log(factorial(5)); // 120 (5 * 4 * 3 * 2 * 1)
console.log(factorial(4)); // 24 (4 * 3 * 2 * 1)

console.log("\n");

// Задача 5 (складна, інкремент з кроком)

// Створіть функцію sumMultiplesOfThree, яка приймає число n і обчислює суму всіх чисел, кратних 3, від 1 до n. Використайте цикл for з інкрементом та кроком.

function sumMultiplesOfThree(n) {
  let sum = 0;
  for (let index = 3; index <= n; index += 3) {
    sum += index;
  }
  return sum;
}

console.log(sumMultiplesOfThree(10)); // 18 (3 + 6 + 9)
console.log(sumMultiplesOfThree(20)); // 63 (3 + 6 + 9 + 12 + 15 + 18)

console.log("\n");

// Задача 6 (складна, декремент)

// Напишіть функцію countdownByTwo, яка приймає число n і виводить числа від n до 0, зменшуючи на 2 кожного разу. Використайте цикл for з декрементом і кроком.

function countdownByTwo(n) {
  for (let index = n; index >= 0; index -= 2) {
    console.log(index);
  }
}

countdownByTwo(10);
// Вивід:
// 10
// 8
// 6
// 4
// 2
// 0
console.log("\n");
console.log("\n");
console.log("\n");

// Ці задачі допоможуть вам розібратися з використанням циклів for, а також з інкрементом і декрементом для різних типів завдань.
