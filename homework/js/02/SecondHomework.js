//Task 1
var a = 5;
var b, c;
b = c = (a * 5) / 2;
console.log(b);
//Task2
(function () {
    var userDate = prompt("Enter your age plz: ");
    var formatedUserDate = Number(userDate);
    if (userDate && !isNaN(formatedUserDate)) {
        var date = new Date();
        var astimatedUserAge = date.getFullYear() - formatedUserDate;
        if (astimatedUserAge > 0) {
            alert("YourBirthday: ".concat(astimatedUserAge));
        }
    }
    else {
        alert("Your age is required!!!!");
        arguments.callee();
    }
})();
//Task3
(function () {
    var temperature = prompt("Enter temperature plz: ");
    var DUMMY_DATA = {
        "1": "1. Celsius to Fahrenheit",
        "2": "2. Fahrenheit to Celsius",
    };
    var conversionType = prompt("Take your comversion type:\n".concat(DUMMY_DATA[1], "\n").concat(DUMMY_DATA[2]));
    if (temperature !== null && conversionType !== null) {
        temperature = parseFloat(temperature);
        var keys = Object.keys(DUMMY_DATA);
        var result = void 0;
        if (conversionType === keys[0]) {
            result = (temperature * 9) / 5 + 32;
            alert("".concat(temperature, " your temperature in Celsius equelas ").concat(result, " in Fahrenheit."));
        }
        else if (conversionType === keys[1]) {
            result = ((temperature - 32) * 5) / 9;
            alert("".concat(temperature, " your temperature in Fahrenheit equelas ").concat(result, " in Celsius."));
        }
        else {
            alert("Wrong exchange type please Enter 1 or 2 ");
        }
    }
    else {
        alert("Please check your data, your data is required!!!");
    }
})();
// Task 4
(function () {
    var dividend = parseFloat(prompt("Enter the dividend:"));
    var divisor = parseFloat(prompt("Enter the divisor:"));
    function division(dividend, divisor) {
        return Math.floor(dividend / divisor);
    }
    if (!isNaN(dividend) && !isNaN(divisor) && divisor !== 0) {
        var result = division(dividend, divisor);
        alert("Your result of division is ".concat(result));
    }
    else {
        alert("Please enter valid numbers. Divisor cannot be zero.");
    }
})();
// Task 5
(function () {
    var rate = 32;
    var amount = prompt("Enter CKOKA?: ");
    var formatedUserInput = Number(amount);
    if (amount && !isNaN(formatedUserInput)) {
        var result = Math.round(rate * formatedUserInput);
        if (result > 0) {
            alert("Your money Sir ".concat(result));
        }
    }
    else {
        alert("Your age is required!!!!");
        arguments.callee();
    }
})();
// Task 6
(function () {
    var red = Number(prompt("Enter Red:"));
    red = red > 0 && red < 255 ? red.toString(16) : null;
    var green = Number(prompt("Enter Green:"));
    green = green > 0 && green < 255 ? green.toString(16) : null;
    var blue = Number(prompt("Enter Blue:"));
    blue = blue > 0 && blue < 255 ? blue.toString(16) : null;
    if (red && green && blue) {
        alert("Your hex Sir: #".concat(red).concat(green).concat(blue));
    }
    else {
        alert("Your colors are required!!!!");
        arguments.callee();
    }
})();
// Task 7
(function () {
    var floors = parseInt(prompt("Enter floors: "));
    var apartmentsPerFloor = parseInt(prompt("Enter apartments per floor: "));
    var apartmentNumber = parseInt(prompt("Enter a flat number: "));
    // TODO: create more validation cheks to prevent users invaid data
    var entrance = Math.ceil(apartmentNumber / (floors * apartmentsPerFloor));
    var floor = Math.ceil((apartmentNumber - (entrance - 1) * floors * apartmentsPerFloor) /
        apartmentsPerFloor);
    if (entrance && floor) {
        alert("Your falt on ".concat(floor, " floor in ").concat(entrance, " entrance "));
    }
    else {
        alert("Your data is required!!!!");
        arguments.callee();
    }
})();
