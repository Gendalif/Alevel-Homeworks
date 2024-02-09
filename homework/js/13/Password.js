export class Password {
  constructor(parent, open) {
    this.parent = parent;
    this.open = open;
    this.value = "";
    this.onChange = null;
    this.onOpenChange = null;

    this.render();
  }

  render() {
    this.input = document.createElement("input");
    this.input.type = this.open ? "text" : "password";
    this.input.addEventListener("input", () => {
      this.value = this.input.value;
      if (this.onChange) {
        this.onChange(this.value);
      }
    });

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

    this.parent.appendChild(this.input);
    this.parent.appendChild(this.toggleButton);
  }

  setValue(value) {
    this.value = value;
    this.input.value = value;
  }

  getValue() {
    return this.value;
  }

  setOpen(open) {
    this.open = open;
    this.input.type = this.open ? "text" : "password";
    this.toggleButton.textContent = this.open ? "Hide" : "Show";
  }

  getOpen() {
    return this.open;
  }
}
