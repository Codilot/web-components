class ExtendedButton extends HTMLButtonElement {
  constructor() {
    super();
    this.style.backgroundColor = "blue";
    this.style.color = "white";
    this.addEventListener("click", () => alert("clicked"));
  }
}

customElements.define("base-button", ExtendedButton, { extends: "button" });
