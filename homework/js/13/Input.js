export function Input(parent, open, type) {
  this.parent = parent;
  this.open = open;
  this.type = type;
  this.value = "";
  this.onChange = null;
  this.onOpenChange = null;

  this.render();
}

Input.prototype.render = function () {
  const text = document.createElement("p");
  text.innerText = this.type;
  this.input = document.createElement("input");
  this.input.type = this.open ? "text" : "password";
  this.input.addEventListener("input", () => {
    this.value = this.input.value;
    if (this.onChange) {
      this.onChange(this.value);
    }
  });
  this.parent.appendChild(text);
  this.parent.appendChild(this.input);
  if (this.type === "Password") {
    this.toggleButton = document.createElement("button");
    this.toggleButton.textContent = this.open ? "Hide" : "Show";
    this.toggleButton.addEventListener("click", () => {
      this.open = !this.open;
      this.input.type = this.open ? "text" : "password";
      this.toggleButton.textContent = this.open ? "Hide" : "Show";
      if (this.onOpenChange) {
        this.onOpenChange(this.open);
      }
    });
    this.parent.appendChild(this.toggleButton);
  }
};

Input.prototype.setValue = function (value) {
  this.value = value;
  this.input.value = value;
};

Input.prototype.getValue = function () {
  return this.value;
};

Input.prototype.setOpen = function (open) {
  this.open = open;
  this.input.type = this.open ? "text" : "password";
  this.toggleButton.textContent = this.open ? "Hide" : "Show";
};

Input.prototype.getOpen = function () {
  return this.open;
};
