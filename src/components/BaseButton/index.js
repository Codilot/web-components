import { BaseButton } from "./base-button.js";

if (!window.customElements.get("base-button")) {
  customElements.define("base-button", BaseButton);
}

export { BaseButton } from "./base-button.js";
