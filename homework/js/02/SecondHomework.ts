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

// Task 4
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

// Task 5

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
