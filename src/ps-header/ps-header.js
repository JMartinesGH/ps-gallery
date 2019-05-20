import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';


class psHeader extends PolymerElement {
    static get template() {
        return html`
      <style>
        :host {
          display: block;
          font-family: Helvetica, Arial, sans-serif;
          text-align: center;
        }
      </style>
      <h2>&lt;ps-gallery&gt;</h2>
    `;
    }
    
}

customElements.define('ps-header', psHeader);