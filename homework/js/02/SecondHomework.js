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
// Task 4
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
// Task 5
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
