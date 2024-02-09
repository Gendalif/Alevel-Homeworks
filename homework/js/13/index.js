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

function checkInputs() {
  const loginValue = loginInput.getValue().trim();
  const passwordValue = passwordInput.getValue().trim();

  submitButton.disabled = !(loginValue && passwordValue);
}

loginInput.onChange = checkInputs;
passwordInput.onChange = checkInputs;

document.body.appendChild(submitButton);

const loginForm = new LoginForm(document.body);
