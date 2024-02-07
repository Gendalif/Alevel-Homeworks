//Task 1
(function () {
  const userName: string = prompt("Enter your name plz: ");

  if (userName && userName?.length > 3) {
    alert(`Hello, ${userName}`);
  } else {
    alert("Your name is required!!!!");
    arguments.callee();
  }
})();

//Task2 // Не дуже зрозумів ТЗ
(function () {
  let inputString = prompt("Enter string");

  if (inputString) {
    const words = inputString.split(",");
    const resultString = words.join(" блін,");
    alert(resultString);
  } else {
    alert("Your string is required!!!!");
    arguments.callee();
  }
})();

//Task3
(function () {
  let userMessage: string = prompt("Enter string plz: ");

  if (userMessage) {
    const res = userMessage[0].toUpperCase() + userMessage.slice(1);
    const noSpacesMessage = res.replace(/\s/g, "");
    alert(`Your UpperCased string Sir: ${noSpacesMessage}`);
  } else {
    alert("Your string is required!!!!");
    arguments.callee();
  }
})();

//Task4
(function () {
  const textToSplit: string = prompt("Enter your text plz: ");

  if (textToSplit) {
    const res = textToSplit.split(" ");

    alert(`Your amount of words Sir: ${res.length}`);
  } else {
    alert("Your text is required!!!!");
    arguments.callee();
  }
})();

//Task5
(function () {
  let firstName = prompt("Enter your name:").trim();
  let lastName = prompt("Enter your lastname:").trim();
  let middleName = prompt("Enter your middlename:").trim();

  if (firstName && lastName && middleName) {
    firstName =
      firstName.charAt(0).toUpperCase() + firstName.slice(1).toLowerCase();
    lastName =
      lastName.charAt(0).toUpperCase() + lastName.slice(1).toLowerCase();
    middleName =
      middleName.charAt(0).toUpperCase() + middleName.slice(1).toLowerCase();

    const fullName = `${firstName} ${lastName} ${middleName}`;
    alert(`Your reslut Sir: ${fullName}`);
  } else {
    alert("All your fileds are required!!!!");
    arguments.callee();
  }
})();

//Task6
let str = "Було жарко. Василь пив пиво вприкуску з креветками";

let reslut: string | string[] = str.split(" ");

reslut = reslut.map((element) =>
  element === "пиво" ? (element = "чай") : element
);

reslut = reslut.join(" ");

console.log(reslut);

//Task7
let strTask6 = "якийсь текст, в якому є один тег <br /> і всяке інше";
let resultTask6: string;

resultTask6 =
  strTask6.slice(0, strTask6.indexOf("<")) +
  strTask6.slice(strTask6.indexOf(">") + 1);

console.log(resultTask6);
