class ExtendedButton extends HTMLButtonElement {
  constructor() {
    super();
    this.style.backgroundColor = "blue";
    this.style.color = "white";
    this.addEventListener("click", () => alert("clicked"));
  }
}

customElements.define("extended-button", ExtendedButton, { extends: "button" });
