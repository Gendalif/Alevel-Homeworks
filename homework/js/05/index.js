// Task 1
const task1Array = [
  confirm("Nice task Sir?"),
  confirm("Is there better than this one?"),
  confirm("JavaScript rocks?"),
];

//task2
const task2Array = [];
promptsArray[0] = prompt("What iis your name?");
promptsArray[1] = prompt("How old are you?");
promptsArray[2] = prompt("Where are you from?");

//Task3
const array = [1, 2, 3, 4, 5];
const index = prompt("Enter an index in the array:");
if (index === "length") {
  alert(`The length of the array is ${array.length}`);
} else {
  alert(`The value at index ${index} is ${array[index]}`);
}

//Task4
const indexToChange = prompt("Enter an index to change:");
const valueToSet = prompt("Enter a value to set for your index:");
array[indexToChange] = valueToSet;
