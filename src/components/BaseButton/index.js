import BaseButtonComponent from "./base-button";

export class BaseButton {
  static componentName = "base-button";

  constructor() {
    if (!window.customElements.get(componentName)) {
      customElements.define(componentName, BaseButtonComponent);
    }
  }
}

new BaseButton();
