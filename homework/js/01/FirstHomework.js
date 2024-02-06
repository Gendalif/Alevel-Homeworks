var counterBreadInDay = 5;
var breadCost = 20;
var days = 10;
var consumedBreadInNDays = function (counterBreadInDay, days) {
    return counterBreadInDay * days;
};
var spendMoneyOnBread = function () {
    return consumedBreadInNDays(counterBreadInDay, days) * breadCost;
};
var result = spendMoneyOnBread();
console.log("Result", result);
