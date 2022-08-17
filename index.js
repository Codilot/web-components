// @ts-check

import { BaseButton } from "./src/components/base-button.js";
import { BaseSelect } from "./src/components/base-select.js";
import { AppMain } from "./src/app.js";

customElements.define("base-button", BaseButton);
customElements.define("base-select", BaseSelect);
customElements.define("app-main", AppMain);

export { BaseButton } from "./src/components/base-button.js";
export {};
