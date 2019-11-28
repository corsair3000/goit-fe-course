"use strict";
let credits = 23580;
let pricePerDroid = 3000;
let totalDroid;
let totalPrice;

totalDroid = prompt("Скільки дроїдів хочете купити?");

if (totalDroid === null) console.log("Отменено пользователем!");
else {
  totalDroid = Number(totalDroid);
  totalPrice = totalDroid * pricePerDroid;
}

if (isNaN(totalDroid)) console.log("Введіть коректні дані!!!");
else if (totalPrice > credits) console.log("Недостаточно средств на счету!");
else if (totalDroid !== null && totalDroid !== 0 && totalDroid >= 1) {
  credits = credits - totalPrice;
  console.log(
    "Ви купили",
    totalDroid,
    "дроїдів, на рахунку залишилося",
    credits,
    "кредитів"
  );
} else console.log("Ви не обрали жодної кількості або ввели некоректні дані!");
