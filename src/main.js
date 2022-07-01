// @ts-check
import "../src/components/flag-icon.js";

const css = `
<style>
h1 {
  color: var(--font-color, black);
  font-family: sans-serif;
}
</style>
`;

class AppMain extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.render();
  }
  render() {
    this.shadowRoot
      ? (this.shadowRoot.innerHTML = `
    ${css}
    <h1 part="header">Home Page</h1>
    <flag-icon country="nl"></flag-icon>`)
      : null;
  }
}

customElements.define("app-main", AppMain);
