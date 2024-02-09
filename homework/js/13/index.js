import { Store } from "./Store.js";
import { Input } from "./Input.js";
import { LoginForm } from "./LoginForm.js";

function counterReducer(state = 0, action) {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    default:
      return state;
  }
}

export const store = new Store(counterReducer, 0);

store.dispatch({ type: "INCREMENT" });
store.dispatch({ type: "INCREMENT" });

const loginInput = new Input(document.body, true, "Login");
const passwordInput = new Input(document.body, false, "Password");

const submitButton = document.createElement("button");
submitButton.textContent = "Login";
submitButton.disabled = true;

const checkInputs = () => {
  const loginValue = loginInput.getValue().trim();
  const passwordValue = passwordInput.getValue().trim();

  submitButton.disabled = !(loginValue && passwordValue);
};

loginInput.onChange = checkInputs;
passwordInput.onChange = checkInputs;

document.body.appendChild(submitButton);

const loginForm = new LoginForm(document.body);

const passwordInput1 = new Input(document.body, false, "Password");
const passwordInput2 = new Input(document.body, false, "Confirm Password");

const checkPasswords = () => {
  const password1 = passwordInput1.getValue();
  const password2 = passwordInput2.getValue();

  if (password1 !== password2) {
    passwordInput1.input.style.border = "2px solid red";
    passwordInput2.input.style.border = "2px solid red";
  } else {
    passwordInput1.input.style.border = "2px solid green";
    passwordInput2.input.style.border = "2px solid green";
  }
};

passwordInput1.onChange = checkPasswords;
passwordInput2.onChange = checkPasswords;

const isPasswordOneOpened = passwordInput1.getOpen();
if (isPasswordOneOpened) {
  passwordInput2.input.style.display = "none";
} else {
  passwordInput2.input.style.display = "inline-block";
}

passwordInput1.onOpenChange = function (open) {
  if (open) {
    passwordInput2.input.style.display = "none";
  } else {
    passwordInput2.input.style.display = "inline-block";
  }
};
