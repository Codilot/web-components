// @ts-check
import "../src/components/flag-icon.js";
import "../src/components/word-count.js";
import "../src/components/base-button.js";
import "../src/components/base-select.js";

const mainTemplate = document.createElement("template");
const options = {
  option1: { label: "Option 1" },
  option2: { label: "Option 2" },
};
mainTemplate.innerHTML = `
  <style>
  h1 {
    color: var(--font-color, black);
    font-family: sans-serif;
  }
  </style>
  <h1 part="header">Home Page</h1>
  <flag-icon country="nl"></flag-icon>
  <word-count></word-count>
  <base-button label="Click Me"></base-button>
  <base-select label="Your Choice" options='{ "option1": { "label": "Option 1" }, "option2": { "label": "Option 2" } }'></base-select>
`;

class AppMain extends HTMLElement {
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

customElements.define("app-main", AppMain);
