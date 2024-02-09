import { Input } from "./Input.js";

export function LoginForm(parentNode) {
  this.parentNode = parentNode;
  this.loginInput = new Input(parentNode, true, "Login");
  this.passwordInput = new Input(parentNode, true, "Password");
  this.submitButton = document.createElement("button");
  this.submitButton.textContent = "Login";
  this.submitButton.disabled = true;

  this.init();
}

LoginForm.prototype.init = function () {
  const state = this;

  function checkInputs() {
    const loginValue = state.loginInput.getValue().trim();
    const passwordValue = state.passwordInput.getValue().trim();

    state.submitButton.disabled = !(loginValue && passwordValue);
  }

  this.loginInput.onChange = checkInputs;
  this.passwordInput.onChange = checkInputs;

  this.parentNode.appendChild(this.submitButton);
};

LoginForm.prototype.getLoginValue = function () {
  return this.loginInput.getValue().trim();
};

LoginForm.prototype.getPasswordValue = function () {
  return this.passwordInput.getValue().trim();
};

LoginForm.prototype.setLoginValue = function (value) {
  this.loginInput.setValue(value);
};

LoginForm.prototype.setPasswordValue = function (value) {
  this.passwordInput.setValue(value);
};

LoginForm.prototype.onSubmit = function (callback) {
  this.submitButton.addEventListener("click", callback);
};
