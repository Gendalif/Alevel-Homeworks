function Person(firstName, lastName, fatherName) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.fatherName = fatherName;

  this.getSurname = () => this.lastName;
}

Person.prototype.getFullName = function () {
  if (this.fatherName) {
    return `${this.lastName} ${this.firstName} ${this.fatherName}`;
  }
  return `${this.lastName} ${this.firstName}`;
};

const personOne = new Person("Вася", "Пупкін");
console.log(personOne.getFullName());

a.fatherName = "Ivanovich";
const personTwo = new Person("Ганна", "Іванова");
const personThree = new Person("Єлизавета", "Петрова");

console.log(personOne.getFullName());
console.log(personTwo.getFullName());
console.log(personThree.getFullName());
