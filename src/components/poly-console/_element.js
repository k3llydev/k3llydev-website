import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

/**
 * `poly-console`
 * Simply, a console for a browser.
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class PolyConsole extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
        }
      </style>
      <h2>Hello [[prop1]]!</h2>
    `;
  }
  static get properties() {
    return {
      prop1: {
        type: String,
        value: 'poly-console',
      },
    };
  }
}

window.customElements.define('poly-console', PolyConsole);
