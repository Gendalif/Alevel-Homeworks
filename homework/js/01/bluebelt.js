const CREDENTIALS = {
  login: "admin",
  password: "qwerty",
};

const form = document.getElementById("myForm");
const container = document.getElementById("statusContainer");

const handleLoginValidation = (event) => {
  event.preventDefault();

  const loginInputValue = event.target.children.fname.value;
  const passwordInputValue = event.target.children.lname.value;

  if (
    loginInputValue === CREDENTIALS.login &&
    passwordInputValue === CREDENTIALS.password
  ) {
    container.className = "success";
    container.innerText = "success";
  } else {
    container.className = "error";
    container.innerText = "error";
  }
};

form.onsubmit = validatingLogin;
