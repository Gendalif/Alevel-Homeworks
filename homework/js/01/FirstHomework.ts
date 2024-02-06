const amountBreadInDay: number = 5; //сколько едим хлебын
const breadCost: number = 20; //сколько стоит сьесть хлебыну
const days: number = 10; //сколько дней будем есть хлебыну

/*
функция для подсчета количества сьеденых клебын за N(10) дней
 */
const consumedBreadInNDays = (counterBreadInDay: number, days: number) =>
  counterBreadInDay * days;

/*
функция для подсчета деняк уплачных за количества сьеденых клебын за N(10) дней
 */
const spendMoneyOnBread = () =>
  consumedBreadInNDays(amountBreadInDay, days) * breadCost;

const result = spendMoneyOnBread();

console.log("Result", result);
