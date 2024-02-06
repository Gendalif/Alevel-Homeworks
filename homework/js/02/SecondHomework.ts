//Task 1
var a = 5;
var b, c;

b = c = (a * 5) / 2;
console.log(b);

//Task2
(function () {
  const userDate: string = prompt("Enter your age plz: ");
  const formatedUserDate = Number(userDate);

  if (userDate && !isNaN(formatedUserDate)) {
    const date = new Date();
    const astimatedUserAge = date.getFullYear() - formatedUserDate;
    if (astimatedUserAge > 0) {
      alert(`YourBirthday: ${astimatedUserAge}`);
    }
  } else {
    alert("Your age is required!!!!");
    arguments.callee();
  }
})();

//Task3
(function () {
  let temperature: string | number = prompt("Enter temperature plz: ");

  const DUMMY_DATA = {
    "1": "1. Celsius to Fahrenheit",
    "2": "2. Fahrenheit to Celsius",
  };

  const conversionType = prompt(
    `Take your comversion type:\n${DUMMY_DATA[1]}\n${DUMMY_DATA[2]}`
  );

  if (temperature !== null && conversionType !== null) {
    temperature = parseFloat(temperature);
    const keys = Object.keys(DUMMY_DATA);

    let result;
    if (conversionType === keys[0]) {
      result = (temperature * 9) / 5 + 32;
      alert(
        `${temperature} your temperature in Celsius equelas ${result} in Fahrenheit.`
      );
    } else if (conversionType === keys[1]) {
      result = ((temperature - 32) * 5) / 9;
      alert(
        `${temperature} your temperature in Fahrenheit equelas ${result} in Celsius.`
      );
    } else {
      alert("Wrong exchange type please Enter 1 or 2 ");
    }
  } else {
    alert("Please check your data, your data is required!!!");
  }
})();

// Task 4
(function () {
  const dividend = parseFloat(prompt("Enter the dividend:"));
  const divisor = parseFloat(prompt("Enter the divisor:"));

  function division(dividend, divisor) {
    return Math.floor(dividend / divisor);
  }

  if (!isNaN(dividend) && !isNaN(divisor) && divisor !== 0) {
    const result = division(dividend, divisor);
    alert(`Your result of division is ${result}`);
  } else {
    alert("Please enter valid numbers. Divisor cannot be zero.");
  }
})();

// Task 5
(function () {
  const rate: number = 32;
  const amount: string = prompt("Enter CKOKA?: ");
  const formatedUserInput = Number(amount);

  if (amount && !isNaN(formatedUserInput)) {
    const result = Math.round(rate * formatedUserInput);
    if (result > 0) {
      alert(`Your money Sir ${result}`);
    }
  } else {
    alert("Your age is required!!!!");
    arguments.callee();
  }
})();

// Task 6
(function () {
  let red: number | string = Number(prompt("Enter Red:"));
  red = red > 0 && red < 255 ? (red.toString(16) as string) : null;

  let green: number | string = Number(prompt("Enter Green:"));
  green = green > 0 && green < 255 ? (green.toString(16) as string) : null;

  let blue: number | string = Number(prompt("Enter Blue:"));
  blue = blue > 0 && blue < 255 ? (blue.toString(16) as string) : null;

  if (red && green && blue) {
    alert(`Your hex Sir: #${red}${green}${blue}`);
  } else {
    alert("Your colors are required!!!!");
    arguments.callee();
  }
})();

// Task 7
(function () {
  const floors = parseInt(prompt("Enter floors: "));
  const apartmentsPerFloor = parseInt(prompt("Enter apartments per floor: "));
  const apartmentNumber = parseInt(prompt("Enter a flat number: "));

  // TODO: create more validation cheks to prevent users invaid data

  const entrance = Math.ceil(apartmentNumber / (floors * apartmentsPerFloor));
  const floor = Math.ceil(
    (apartmentNumber - (entrance - 1) * floors * apartmentsPerFloor) /
      apartmentsPerFloor
  );

  if (entrance && floor) {
    alert(`Your falt on ${floor} floor in ${entrance} entrance `);
  } else {
    alert("Your data is required!!!!");
    arguments.callee();
  }
})();
