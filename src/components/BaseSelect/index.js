import { BaseSelect } from "./base-select.js";

if (!window.customElements.get("base-select")) {
  customElements.define("base-select", BaseSelect);
}

export { BaseSelect } from "./base-select.js";
