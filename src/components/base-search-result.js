const template = document.createElement("template");

template.innerHTML = `
  <style>
    div {
      margin-top: 20px;
      color: green;
    }
  </style>
  <div>
    <p>The Google search result of your name is <a target="_blank" rel="noopener">here</a></p>
  </div>
`;

class BaseSearchResult extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.contentEditable.cloneNode(true));
    this.shadowRoot.querySelector("a").href = "";
  }

  static get observedAttributes() {
    return ["name-attribute"];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    console.log(name, oldValue, newValue);
    if (name === "name-attribute") {
      this.shadowRoot.querySelector(
        "a"
      ).href = `https://www.google.com/search?q=${newValue}`;
    }
  }
}

window.customElements.define("base-search-result", BaseSearchResult);
