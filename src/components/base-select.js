// @ts-check
(function () {
  const baseSelectLabel = "Label";
  const baseSelectOption = "Select Option";
  const baseSelectTemplate = document.createElement("template");
  baseSelectTemplate.innerHTML = `
  <style>
    :host {
      font-family: sans-serif;
    }
    .base-select {
      padding: 3px 8px 8px;
    }
    .label {
      display: block;
      margin-bottom: 5px;
      color: #000000;
      font-size: 16px;
      font-weight: normal;
      line-height: 16px;
    }
    .select-list-container {
      position: relative;
    }
    .select-list {
      position: absolute;
      width: 100%;
      display: none;
      max-height: 192px;
      overflow-y: auto;
      margin: 4px 0 0;
      padding: 0;
      background-color: #ffffff;
      border: 1px solid #a1a1a1;
      box-shadow: 0 2px 4px 0 rgba(0,0,0, 0.05), 0 2px 8px 0 rgba(161,161,161, 0.4);
      list-style: none;
    }
    .select-list li {
      display: flex;
      align-items: center;
      margin: 4px 0;
      padding: 0 7px;
      font-size: 16px;
      height: 40px;
      cursor: pointer;
    }
    .base-select.open .select-list {
      display: flex;
      flex-direction: column;
    }
  </style>
  <div class="base-select">
    <span class="label">${baseSelectLabel}</span>
    <base-button grid></base-button>
    <div class="select-list-container">
      <ul class="select-list"></ul>
    </div>
  </div>`;

  class BaseSelect extends HTMLElement {
    constructor() {
      super();
      this._shadowRoot = this.attachShadow({ mode: "open" });
      this._shadowRoot.appendChild(baseSelectTemplate.content.cloneNode(true));

      //local state
      this.open = false;

      this.$label = this._shadowRoot.querySelector(".label");
      this.$button = this._shadowRoot.querySelector("base-button");
      this.$select = this._shadowRoot.querySelector(".base-select");
      this.$selectList = this._shadowRoot.querySelector(".select-list");

      // event listener for custom onClick event
      // Important: bind this to toggleOpen class method
      // because otherwise it wouldn't have access to this (the class)
      this.$button &&
        this.$button.addEventListener("onClick", this.toggleOpen.bind(this));
    }

    get label() {
      return this.getAttribute("label");
    }
    set label(value) {
      this.setAttribute("label", value || baseSelectLabel);
    }

    get option() {
      return this.getAttribute("option");
    }
    set option(value) {
      this.setAttribute("option", value || baseSelectOption);
    }

    get options() {
      return JSON.parse(this.getAttribute("options") || "");
    }
    set options(value) {
      this.setAttribute("options", JSON.stringify(value));
    }

    static get observedAttributes() {
      return ["label", "option", "options"];
    }

    attributeChangedCallback(name, oldVal, newVal) {
      this.render();
    }

    toggleOpen(event) {
      this.open = !this.open;
      if (!!this.$select) {
        this.open
          ? this.$select.classList.add("open")
          : this.$select.classList.remove("open");
      }
    }

    render() {
      this.$label && (this.$label.innerHTML = this.label || baseSelectLabel);
      //your can also set the attribute programmatically like so
      this.$button &&
        this.$button.setAttribute("label", this.option || baseSelectOption);

      //on every render wipe the inner HTML the list, as the options could have been changed
      this.$selectList && (this.$selectList.innerHTML = "");

      Object.keys(this.options || {}).forEach((key) => {
        let option = this.options[key];
        let $option = document.createElement("li");
        $option.innerHTML = option.label;
        $option.addEventListener("click", () => {
          this.option = key;

          this.toggleOpen();

          this.render();
        });

        this.$selectList ? this.$selectList.appendChild($option) : null;
      });
    }
  }

  customElements.define("base-select", BaseSelect);
})();
