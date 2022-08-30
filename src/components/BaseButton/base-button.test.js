/**
 * @jest-environment jsdom
 */
import { BaseButton } from "./index.js";

test("use base-button in this test file", () => {
  const element = document.createElement("base-button");
  expect(element).not.toBeNull();
  console.log(element);
});

test("renders a base-button with a label", () => {
  document.body.innerHTML = '<base-button label="hello"></base-button>';
  expect(document.body.innerHTML).toContain("hello");
});
