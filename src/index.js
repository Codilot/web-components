// @ts-check
"use strict";

import { BaseButton } from "./components/base-button.js";
import { BaseSelect } from "./components/base-select.js";
//import { AppMain } from "./app.js";

//customElements.define("app-main", AppMain);

export function initComponents(components) {
  const library = {
    "base-button": BaseButton,
    "base-select": BaseSelect,
  };
  components.forEach((component) => {
    customElements.define(component, library[component]);
  });
}
