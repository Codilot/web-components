import { html } from "lit-html";
import { BaseSelect } from "./index.js";

export default {
  title: "BaseSelect",
  argTypes: {
    label: {
      name: "label",
      type: { name: "string", required: false },
      defaultValue: "Enter Your Choice",
      description: "Button label",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "Enter Your Choice" },
        category: "Attributes",
      },
      control: {
        type: "text",
      },
    },
    input: {
      action: "input event fired",
      description: "listens to input event",
      table: {
        type: { summary: "event" },
        category: "Events",
      },
    },
  },
};

const options = {
  option1: { label: "Option 1" },
  option2: { label: "Option 2" },
};

const Template = ({ label, input }) =>
  html`<base-select
    label=${label}
    @input=${input}
    options=${encodeURIComponent(JSON.stringify(options))}
  ></base-select>`;

//👇 Each story then reuses that template
export const Default = Template.bind({});
Default.args = { label: "Your Choice" };
