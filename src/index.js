// @ts-check

import { BaseButton } from "./components/base-button.js";
import { BaseSelect } from "./components/base-select.js";
import { AppMain } from "./app.js";

customElements.define("app-main", AppMain);

const library = {
  "base-button": BaseButton,
  "base-select": BaseSelect,
};

export const initComponents = (components) => {
  components.forEach((component) => {
    //NOTE: doesn't work as the classname is a string:
    // Regex: finds all the dashes that are followed by an alphanumeric character using the regex /-\w/g. Then remove the dash and uppercase the character.
    // const componentClassName = component.replace(
    //   /(^\w|-\w)/g,
    //   (m, index, str) => m.replace(/-/, "").toUpperCase()
    // );
    //customElements.define(component, componentClassName);

    // NOTE: Former mapping using switch
    // switch (component) {
    //   case "base-button":
    //     customElements.define(component, BaseButton);
    //     break;
    //   case "base-select":
    //     customElements.define(component, BaseSelect);
    //     break;
    //   default:
    //     break;
    // }
    customElements.define(component, library[component]);
  });
};
