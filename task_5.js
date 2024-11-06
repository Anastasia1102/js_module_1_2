// Ось кілька задач для практики з використанням операторів && та || для початківців:

// Задача 1 (легка)

// Напишіть функцію isTeenager, яка приймає вік age і повертає true, якщо вік знаходиться між 13 і 19 роками включно, інакше повертає false. Використайте оператор &&.

function isTeenager(age) {
  return age >= 13 && age <= 19 ? true : false;
}

console.log(isTeenager(15)); // true
console.log(isTeenager(20)); // false
console.log(isTeenager(13)); // true

console.log("\n");

// Задача 2 (легка)

// Напишіть функцію canEnterClub, яка приймає два параметри: age (вік) та hasID (булеве значення). Функція повинна повернути true, якщо вік 18 або більше і є документ (hasID === true), інакше повернути false. Використайте оператор &&.

function canEnterClub(age, hasID) {
  return age >= 18 && hasID === true ? true : false;
}

console.log(canEnterClub(18, true)); // true
console.log(canEnterClub(17, true)); // false
console.log(canEnterClub(19, false)); // false

console.log("\n");

// Задача 3 (середня)

// Створіть функцію isValidUsername, яка приймає рядок username і повертає true, якщо ім’я користувача має більше 5 символів або менше 15 символів (включно) і не містить пробілів. Використайте оператори && та ||.

function isValidUsername(username) {
  if (
    (username >= 5 || username.length <= 15) &&
    username.includes(" ") !== true
  ) {
    return true;
  } else {
    return false;
  }
}

console.log(isValidUsername("john_doe")); // true
console.log(isValidUsername("john doe")); // false
console.log(isValidUsername("a")); // true
console.log(isValidUsername("thisisaverylongusername")); // false

console.log("\n");

// Задача 4 (середня)

// Напишіть функцію isEligibleForDiscount, яка приймає два параметри: isMember (булеве значення) та purchaseAmount (сума покупки). Функція повертає true, якщо покупець є членом програми (isMember === true) або сума покупки перевищує 100. Використайте оператор ||.

function isEligibleForDiscount(isMember, purchaseAmount) {
  if (isMember || purchaseAmount > 100) {
    return true;
  } else {
    return false;
  }
}

console.log(isEligibleForDiscount(true, 50)); // true
console.log(isEligibleForDiscount(false, 120)); // true
console.log(isEligibleForDiscount(false, 80)); // false

console.log("\n");

// Задача 5 (складна)

// Створіть функцію canRentCar, яка приймає три параметри: age (вік), hasLicense (чи є права) та hasGoodRecord (чи є гарна історія водіння). Функція повинна повертати true, якщо вік більше або дорівнює 21, є водійські права, і водійська історія є гарною. Використайте оператор &&.

function canRentCar(age, hasLicense, hasGoodRecord) {
  return age >= 21 && hasLicense && hasGoodRecord ? true : false;
}

console.log(canRentCar(25, true, true)); // true
console.log(canRentCar(20, true, true)); // false
console.log(canRentCar(30, false, true)); // false
console.log(canRentCar(23, true, false)); // false

console.log("\n");

// Задача 6 (складна)

// Напишіть функцію canApplyForLoan, яка приймає три параметри: income (дохід), hasJob (чи є робота) та hasGoodCredit (чи гарна кредитна історія). Функція повинна повернути true, якщо дохід більше 50000 або є робота та хороша кредитна історія. Використайте оператори && та ||.

function canApplyForLoan(income, hasJob, hasGoodCredit) {
  if (income > 50000 || (hasJob && hasGoodCredit)) {
    return true;
  } else {
    return false;
  }
}

console.log(canApplyForLoan(60000, false, false)); // true
console.log(canApplyForLoan(40000, true, true)); // true
console.log(canApplyForLoan(40000, true, false)); // false
console.log(canApplyForLoan(30000, false, true)); // false

console.log("\n");
console.log("\n");
console.log("\n");

// Ці задачі допоможуть вам практикуватися у використанні логічних операторів && та || у різних умовах та сценаріях.
