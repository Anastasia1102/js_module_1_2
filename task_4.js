// Ось кілька задач для практики з використанням оператора switch для початківців:

// Задача 1 (легка)

// Напишіть функцію getDayName, яка приймає номер дня тижня dayNumber (від 1 до 7) і повертає назву цього дня. Наприклад, 1 — це “Понеділок”, 2 — “Вівторок” і так далі. Використайте switch.

function getDayName(dayNumber) {
  switch (dayNumber) {
    case 1:
      return "Понеділок";
    case 2:
      return "Вівторок";
    case 3:
      return "Середа";
    case 4:
      return "Четвер";
    case 5:
      return "П`ятниця";
    case 6:
      return "Субота";
    default:
      return "Неділя";
  }
}

console.log(getDayName(1)); // "Понеділок"
console.log(getDayName(4)); // "Четвер"
console.log(getDayName(7)); // "Неділя"

console.log("\n");

// Задача 2 (середня)

// Напишіть функцію getFruitColor, яка приймає назву фрукта (fruit) і повертає його колір. Наприклад, "apple" — “red”, "banana" — “yellow”, "kiwi" — “green”. Якщо фрукт не визначений, поверніть "unknown". Використайте switch.

function getFruitColor(fruit) {
  switch (fruit) {
    case "apple":
      return "red";
    case "banana":
      return "yellow";
    case "kiwi":
      return "green";
    default:
      return "unknown";
  }
}

console.log(getFruitColor("apple")); // "red"
console.log(getFruitColor("banana")); // "yellow"
console.log(getFruitColor("kiwi")); // "green"
console.log(getFruitColor("grape")); // "unknown"

console.log("\n");

// Задача 3 (середня)

// Створіть функцію getSeason, яка приймає номер місяця month (від 1 до 12) і повертає пору року (“Winter”, “Spring”, “Summer”, “Autumn”). Наприклад, для 12, 1, 2 — “Winter”, для 3, 4, 5 — “Spring” і т.д. Використайте switch.

function getSeason(month) {
  switch (month) {
    case 12:
    case 1:
    case 2:
      return "Winter";
    case 3:
    case 4:
    case 5:
      return "Spring";
    case 6:
    case 7:
    case 8:
      return "Summer";
    default:
      return "Autumn";
  }
}

console.log(getSeason(1)); // "Winter"
console.log(getSeason(4)); // "Spring"
console.log(getSeason(8)); // "Summer"
console.log(getSeason(10)); // "Autumn"

console.log("\n");

// Задача 4 (складна)

// Напишіть функцію getShippingCost, яка приймає код країни countryCode ("US", "CA", "AU", "DE") і повертає вартість доставки для цієї країни. Наприклад, для "US" — $10, для "CA" — $15, для "AU" — $20, для "DE" — $25. Якщо код країни невідомий, поверніть "Shipping not available".

function getShippingCost(countryCode) {
  switch (countryCode) {
    case "US":
      return 10;
    case "CA":
      return 15;
    case "AU":
      return 20;
    case "DE":
      return 25;
    default:
      return "Shipping not available";
  }
}

console.log(getShippingCost("US")); // 10
console.log(getShippingCost("CA")); // 15
console.log(getShippingCost("AU")); // 20
console.log(getShippingCost("DE")); // 25
console.log(getShippingCost("JP")); // "Shipping not available"

console.log("\n");

// Задача 5 (складна)

// Створіть функцію calculate, яка приймає два числа a і b, а також оператор operator (”+”, “-”, “*”, “/”) і повертає результат операції. Використайте switch для виконання обчислень. Якщо оператор невідомий, поверніть "Invalid operator".

function calculate(a, b, operator) {
  switch (operator) {
    case "+":
      return a + b;
    case "-":
      return a - b;
    case "*":
      return a * b;
    case "/":
      return a / b;
    default:
      return "Invalid operator";
  }
}

console.log(calculate(5, 3, "+")); // 8
console.log(calculate(10, 2, "-")); // 8
console.log(calculate(4, 5, "*")); // 20
console.log(calculate(20, 4, "/")); // 5
console.log(calculate(7, 3, "^")); // "Invalid operator"

console.log("\n");
console.log("\n");
console.log("\n");

// Ці задачі допоможуть вам практикуватися у використанні switch та створенні умов для різних випадків.
