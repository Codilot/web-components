import { html } from "lit-html";
import { BaseButton } from "./index.js";

export default {
  title: "BaseButton",
  argTypes: {
    label: {
      name: "label",
      type: { name: "string", required: false },
      defaultValue: "Click me",
      description: "Button label",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "Click me" },
        category: "Attributes",
      },
      control: {
        type: "text",
      },
    },
    onClick: {
      action: "onClick event fired",
      description: "emits onClick event for React",
      table: {
        type: { summary: "event" },
        category: "Events",
      },
    },
    click: {
      action: "click event fired",
      description: "listens to click event",
      table: {
        type: { summary: "event" },
        category: "Events",
      },
    },
  },
};

const Template = ({ label, onClick, click }) =>
  html`<base-button
    label=${label}
    onClick=${onClick}
    @click=${click}
  ></base-button>`;

//👇 Each story then reuses that template
export const Default = Template.bind({});
Default.args = { label: "Click Me" };
