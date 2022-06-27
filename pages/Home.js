class HomePage extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = `
    <style>
    h1 {
      color: var(--font-color, black);
      font-family: sans-serif;
    }
    </style>
    <h1 part="header">Home Page</h1>`;
  }
}

customElements.define("home-page", HomePage);
