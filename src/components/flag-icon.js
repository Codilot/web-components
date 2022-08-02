class FlagIcon extends HTMLElement {
  constructor() {
    super();
    this._countryCode = null;
  }

  static observedAttributes = ["country"];

  attributeChangedCallback(name, oldValue, newValue) {
    // name will always be "country" due to observedAttributes
    this._countryCode = newValue;
    this._updateRendering();
  }
  connectedCallback() {
    this._updateRendering();
    this.innerHTML = `<div>${this._countryCode}!</div>`;
  }

  get country() {
    return this._countryCode;
  }
  set country(v) {
    this.setAttribute("country", v);
  }

  _updateRendering() {
    // This is just an example lifecycle function that is triggered on a render update.
    // You'll probably want to check this.ownerDocument.defaultView to see if
    // this component is inserted into a document with a browsing context,
    // and avoid doing any work if not.
  }
}

customElements.define("flag-icon", FlagIcon);
