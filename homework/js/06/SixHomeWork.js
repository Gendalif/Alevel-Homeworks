//Task1

const cat = {
  name: "Sivka",
  color: "#000",
  type: "British Shorthair",
};

const car = {
  variant: "Diesel",
  color: "#fff",
  model: "Audi",
  name: "Audi Q3",
  type: "Sport Edition",
};

//Task2
(function () {
  const userInputDataKey = prompt("PLease enter your object key name:");
  const userInputDataValue = prompt("PLease enter your object value name:");
  const userSecondInputDataKey = prompt(
    "PLease enter your second object key name:"
  );
  const userSecondInputDataValue = prompt(
    "PLease enter your second object value name:"
  );

  if (
    userInputDataKey &&
    userInputDataValue &&
    userSecondInputDataKey &&
    userSecondInputDataValue
  ) {
    cat[userInputDataKey] = userInputDataValue;
    cat[userSecondInputDataKey] = userSecondInputDataValue;
    alert(`Reslut:${JSON.stringify(cat)}`);
  } else {
    alert("All your fileds are required!!!!");
    arguments.callee();
  }
})();

//Task3
(function () {
  const userInputDataKey = prompt("PLease enter your new object key name:");
  const userInputDataValue = prompt("PLease enter your new object value name:");

  if (userInputDataKey && userInputDataValue) {
    let reslut = {};
    reslut[userInputDataKey] = userInputDataValue;
    reslut = { ...cat, ...reslut };
    alert(`Reslut:${JSON.stringify(reslut)}`);
  } else {
    alert("All your fileds are required!!!!");
    arguments.callee();
  }
})();

//Task4

{
  /* <body>
<div>
    <span>Enter a data please:</span><br/>
    <input type='text' id='name'>
    <input type='text' id='surname'>
</div>
<div>
    <button id='ok'>OK</button>
    <button id='cancel'>Cancel</button>
</div>
</body> */
}

const body = {
  tagName: "body",
  children: [
    {
      tagName: "div",
      children: [
        { tagName: "span", children: ["Enter a data please:"] },
        { tagName: "br" },
        { tagName: "input", attrs: { type: "text", id: "name" } },
        { tagName: "input", attrs: { type: "text", id: "surname" } },
      ],
    },
    {
      tagName: "div",
      children: [
        { tagName: "button", attrs: { id: "ok" }, children: ["OK"] },
        { tagName: "button", attrs: { id: "cancel" }, children: ["Cancel"] },
      ],
    },
  ],
};
