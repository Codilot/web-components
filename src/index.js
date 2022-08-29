// @ts-check
"use strict";
import { BaseButton } from "./components/BaseButton/base-button.js";
import { BaseSelect } from "./components/BaseSelect/base-select.js";

const library = {
  "base-button": BaseButton,
  "base-select": BaseSelect,
};

export function initComponents(components) {
  components.forEach((componentName) => {
    if (!window.customElements.get(componentName)) {
      customElements.define(componentName, library[componentName]);
    }
  });
}
