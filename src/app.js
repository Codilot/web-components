// @ts-check

// import { initComponents } from "./index.js";

// initComponents(["base-button", "base-select"]);

const mainTemplate = document.createElement("template");
const options = {
  option1: { label: "Option 1" },
  option2: { label: "Option 2" },
};
mainTemplate.innerHTML = `
  <style>
  h1 {
    color: var(--font-color, red);
    font-family: sans-serif;
  }
  </style>
  <base-button label="Click Me"></base-button>
  <base-select label="Your Choice" options=${encodeURIComponent(
    JSON.stringify(options)
  )}></base-select>
`;

export class AppMain extends HTMLElement {
  constructor() {
    super();
    this._shadowRoot = this.attachShadow({ mode: "open" });
    this._shadowRoot.appendChild(mainTemplate.content.cloneNode(true));

    this.$button = this._shadowRoot.querySelector("base-button");
    //Listen to custom event onClick registered in the base-button component
    this.$button
      ? this.$button.addEventListener("onClick", (value) => console.log(value))
      : null;
  }

  connectedCallback() {}

  render() {}
}
