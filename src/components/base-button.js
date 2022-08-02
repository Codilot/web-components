/* <template>: The Content Template element

The <template> HTML element is a mechanism for holding HTML that is 
not to be rendered immediately when a page is loaded but may be instantiated
subsequently during runtime using JavaScript.

Think of a template as a content fragment that is being stored for subsequent use in the document. 
While the parser does process the contents of the <template> element while loading the page, 
it does so only to ensure that those contents are valid; the element's contents are not rendered, however.

*/
const labelDefault = "Label";
const template = document.createElement("template");
const css = `
<style>
.btn-container {
  padding: 8px;
}

button {
  display: block;
  overflow: hidden;
  position: relative;
  padding: 0 16px;
  font-size: 16px;
  font-weight: bold;
  text-overflow: ellipsis;
  white-space: nowrap;
  cursor: pointer;
  outline: none;

  width: 100%;
  height: 40px;

  box-sizing: border-box;
  border: 1px solid #a1a1a1;
  background: #ffffff;
  color: #363636;
}
</style>
`;

template.innerHTML = `
  ${css}
  <div class="btn-container">
    <button>${labelDefault}</button>
  </div>
`;

class BaseButton extends HTMLElement {
  // By extending from the HTMLElement class, you will have access to various class methods
  // - for instance, lifecycle callbacks.

  constructor() {
    //innherits all the functions and attributes from HTMLElement
    super();

    /* 
    The Element.attachShadow() method attaches a shadow DOM tree to the element 
    and returns a reference to its ShadowRoot. 
    The Shadow DOM is like your components own subtree nd used to encapsulate CSS, HTML, and JavaScript.  
    Note that you can't attach a shadow root to every type of element. (for example <a> can't have a shadow DOM for security reasons).

    The mode is set to true, to make the Shadow DOM accessible inside your custom element. 
    */
    this._shadowRoot = this.attachShadow({ mode: "open" });
    //clones the declared template from above and adds it as a child to to shadow subtree
    this._shadowRoot.appendChild(template.content.cloneNode(true));

    //static functionality that needs to be evaluated once
    this.$button = this._shadowRoot.querySelector("button");
    this.addEventListener("click", () => alert("clicked"));
  }

  //use a get method so this.label now always returns the recent attribute from the getter function.
  get label() {
    return this.getAttribute("label");
  }

  /* When we set the property from the outside on our element (element.label = 'Click Me';), 
  the custom element's setter method makes sure to reflect the property to an attribute, 
  by setting the element's attribute to the reflected property value. */
  set label(value) {
    this.setAttribute("label", value);
  }

  //Observe attributes
  static get observedAttributes() {
    return ["label"];
  }

  //Every time the defined observable attributes changes, the attributeChangedCallback() function gets called
  attributeChangedCallback(name, oldVal, newVal) {
    this.render();
  }

  render() {
    this.$button.innerHTML = this.label;
  }
}

customElements.define("base-button", BaseButton);
