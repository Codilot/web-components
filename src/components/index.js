import { BaseButton } from "./BaseButton";

const componentsList = {
  [BaseButton.componentName]: BaseButton,
};

export class WebComponentsLibrary {
  constructor(components) {
    // ['base-button']
    // selected items only
    if (components.length) {
      // Not sure this will actually work
      components.forEach((componentName) => {
        const component = componentsList[componentName];

        new component();
      });
    }

    // all
    if (!components.length) {
      new BaseButton();
    }
  }

  // init() {
  //   new BaseButton();
  // }
}
export { BaseButton, WebComponentsLibrary };
