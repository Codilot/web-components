/* <template>: The Content Template element
  The <template> HTML element is a mechanism for holding HTML that is 
  not to be rendered immediately when a page is loaded but may be instantiated
  subsequently during runtime using JavaScript.

  Think of a template as a content fragment that is being stored for subsequent use in the document. 
  While the parser does process the contents of the <template> element while loading the page, 
  it does so only to ensure that those contents are valid; the element's contents are not rendered, however.

  */
const baseButtonLabel = "Label";
const baseButtonTemplate = document.createElement("template");

baseButtonTemplate.innerHTML = `
    <style>
    /* :host selects a shadow root host */
    :host .btn-container {
      padding: 0px;
    }
    :host button {
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
      background-color: pink;
      color: #363636;
    }
    </style>
    <div class="btn-container">
      <button>${baseButtonLabel}</button>
    </div>`;

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

    // Create a shadow root
    this._shadowRoot = this.attachShadow({ mode: "open" });

    // clones and adds template as a child to to shadow subtree
    // clone the elements to ensure you’re creating a unique DOM fragment everywhere it’s used.
    this._shadowRoot.appendChild(baseButtonTemplate.content.cloneNode(true));

    //static functionality that needs to be evaluated once
    this.$container = this._shadowRoot.querySelector(".btn-container");
    this.$button = this._shadowRoot.querySelector("button");
    this.$button.addEventListener("click", () => {
      //Trigger a custom event 'onClick' to parent component
      this.dispatchEvent(
        new CustomEvent("onClick", {
          detail: "Hello from with the base-button component",
        })
      );
    });
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

  //Lifecycle method: connectedCallback runs once the component got appended to the DOM.
  connectedCallback() {
    if (this.hasAttribute("grid")) {
      this.$container.style.padding = "8px";
    }
  }
  //Lifecycle method: Every time the defined observable attributes changes, the attributeChangedCallback() function gets called
  attributeChangedCallback(name, oldVal, newVal) {
    this.render();
  }
  //Lifecycle method: connectedCallback runs once the component is removed from the DOM.
  disconnectedCallback() {
    //do things
  }

  render() {
    this.$button.innerHTML = this.label;
  }
}

//To register a custom element on the page, you use the CustomElementRegistry.define() method.
customElements.define("base-button", BaseButton);
