//Task 1
(function () {
    var userName = prompt("Enter your name plz: ");
    if (userName && (userName === null || userName === void 0 ? void 0 : userName.length) > 3) {
        alert("Hello, ".concat(userName));
    }
    else {
        alert("Your name is required!!!!");
        arguments.callee();
    }
})();
//Task2 // Не дуже зрозумів ТЗ
(function () {
    var inputString = prompt("Enter string");
    if (inputString) {
        var words = inputString.split(",");
        var resultString = words.join(" блін,");
        alert(resultString);
    }
    else {
        alert("Your string is required!!!!");
        arguments.callee();
    }
})();
//Task3
(function () {
    var userMessage = prompt("Enter string plz: ");
    if (userMessage) {
        var res = userMessage[0].toUpperCase() + userMessage.slice(1);
        var noSpacesMessage = res.replace(/\s/g, "");
        alert("Your UpperCased string Sir: ".concat(noSpacesMessage));
    }
    else {
        alert("Your string is required!!!!");
        arguments.callee();
    }
})();
//Task4
(function () {
    var textToSplit = prompt("Enter your text plz: ");
    if (textToSplit) {
        var res = textToSplit.split(" ");
        alert("Your amount of words Sir: ".concat(res.length));
    }
    else {
        alert("Your text is required!!!!");
        arguments.callee();
    }
})();
//Task5
(function () {
    var firstName = prompt("Enter your name:").trim();
    var lastName = prompt("Enter your lastname:").trim();
    var middleName = prompt("Enter your middlename:").trim();
    if (firstName && lastName && middleName) {
        firstName =
            firstName.charAt(0).toUpperCase() + firstName.slice(1).toLowerCase();
        lastName =
            lastName.charAt(0).toUpperCase() + lastName.slice(1).toLowerCase();
        middleName =
            middleName.charAt(0).toUpperCase() + middleName.slice(1).toLowerCase();
        var fullName = "".concat(firstName, " ").concat(lastName, " ").concat(middleName);
        alert("Your reslut Sir: ".concat(fullName));
    }
    else {
        alert("All your fileds are required!!!!");
        arguments.callee();
    }
})();
//Task6
var str = "Було жарко. Василь пив пиво вприкуску з креветками";
var reslut = str.split(" ");
reslut = reslut.map(function (element) {
    return element === "пиво" ? (element = "чай") : element;
});
reslut = reslut.join(" ");
console.log(reslut);
//Task7
var strTask6 = "якийсь текст, в якому є один тег <br /> і всяке інше";
var resultTask6;
resultTask6 =
    strTask6.slice(0, strTask6.indexOf("<")) +
        strTask6.slice(strTask6.indexOf(">") + 1);
console.log(resultTask6);
// Task8
var testString = "якийсь текст у якому є один тег <br /> і всяке інше";
var tagToReplace = "<br />";
var indexOfTag = testString.indexOf(tagToReplace);
if (indexOfTag) {
    var partBeforeTag = testString.slice(0, indexOfTag);
    var partAfterTag = testString
        .slice(indexOfTag, indexOfTag + tagToReplace.length)
        .toUpperCase();
    var restOfString = testString.slice(indexOfTag + tagToReplace.length);
    var result = partBeforeTag + partAfterTag + restOfString;
    console.log(result);
}
else {
    alert("Can not find your Tag ".concat(tagToReplace));
}
// Task9
(function () {
    var userInput = prompt("PLease enter your data with \\n");
    if (userInput) {
        var lines = userInput.split("\\n");
        var reslut_1 = lines.join("\n");
        alert("Reslut:".concat(reslut_1));
    }
    else {
        alert("All your fileds are required!!!!");
        arguments.callee();
    }
})();
