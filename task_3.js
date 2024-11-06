// Ось кілька задач для практики з використанням інструкції if та тернарного оператора для початківців:

// Задача 1 (легка)

// Напишіть функцію isAdult, яка приймає вік людини age і повертає true, якщо людині 18 років або більше, інакше повертає false. Використайте if.

// function isAdult(age) {
//   if (age >= 18) {
//     return true;
//   }
//   return false;
// }

function isAdult(age) {
  return age >= 18 ? true : false;
}

console.log(isAdult(20)); // true
console.log(isAdult(16)); // false
console.log(isAdult(18)); // true

console.log("\n");

// Задача 2 (легка, з тернарним оператором)

// Напишіть функцію isEven, яка приймає число num і повертає рядок "even", якщо число парне, і "odd", якщо непарне. Використайте тернарний оператор.

function isEven(num) {
  return num % 2 === 0 ? "even" : "odd";
}

console.log(isEven(4)); // "even"
console.log(isEven(7)); // "odd"
console.log(isEven(0)); // "even"

console.log("\n");

// Задача 3 (середня)

// Напишіть функцію getDiscountedPrice, яка приймає ціну price і знижку isMember. Якщо isMember дорівнює true, знижка 10%, інакше ціна залишається без змін. Використайте тернарний оператор для розрахунку ціни зі знижкою.

function getDiscountedPrice(price, isMember) {
  return isMember === true ? price * 0.9 : price;
}

console.log(getDiscountedPrice(100, true)); // 90
console.log(getDiscountedPrice(100, false)); // 100
console.log(getDiscountedPrice(200, true)); // 180

console.log("\n");

// Задача 4 (середня, з використанням if-else)

// Створіть функцію getGrade, яка приймає оцінку score (від 0 до 100) і повертає "A", якщо оцінка від 90 до 100, "B" від 80 до 89, "C" від 70 до 79, "D" від 60 до 69 і "F" для нижчих балів.

function getGrade(score) {
  if (score >= 90) {
    return "A";
  } else if (80 <= score && score < 90) {
    return "B";
  } else if (70 <= score && score < 80) {
    return "C";
  } else if (60 <= score && score < 70) {
    return "D";
  } else {
    return "F";
  }
}

console.log(getGrade(95)); // "A"
console.log(getGrade(85)); // "B"
console.log(getGrade(72)); // "C"
console.log(getGrade(68)); // "D"
console.log(getGrade(50)); // "F"

console.log("\n");

// Задача 5 (складна, з тернарним оператором)

// Напишіть функцію getGreetingMessage, яка приймає два параметри: hour (від 0 до 23) та isWeekend (булеве значення). Функція повинна повертати "Good morning" з 5 до 11 години, "Good afternoon" з 12 до 17, "Good evening" з 18 до 21, "Good night" для інших годин. Якщо це вихідний (isWeekend дорівнює true), незалежно від часу доби, функція повинна повертати "Happy weekend!". Використайте тернарний оператор.

function getGreetingMessage(hour, isWeekend) {
  if (isWeekend) {
    return "Happy weekend!";
  } else if (!isWeekend && hour >= 5 && hour <= 11) {
    return "Good morning";
  } else if (!isWeekend && hour >= 12 && hour <= 17) {
    return "Good afternoon";
  } else if (!isWeekend && hour >= 18 && hour <= 21) {
    return "Good evening";
  } else {
    return "Good night";
  }
}

console.log(getGreetingMessage(10, false)); // "Good morning"
console.log(getGreetingMessage(14, false)); // "Good afternoon"
console.log(getGreetingMessage(20, false)); // "Good evening"
console.log(getGreetingMessage(23, false)); // "Good night"
console.log(getGreetingMessage(10, true)); // "Happy weekend!"

console.log("\n");
console.log("\n");
console.log("\n");

// Ці задачі допоможуть вам освоїти базові умови та тернарний оператор у JavaScript.
