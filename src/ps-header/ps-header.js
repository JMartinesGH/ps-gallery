import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';


class psHeader extends PolymerElement {
    static get template() {
        return html`
      <style>
        :host {
          display: block;
          font-family: Helvetica, Arial, sans-serif;
        }
      </style>
      <h2>PS Gallery</h2>
      <div>
        filter
      </div>
      <div>
        sort
      </div>
    `;
    }
    
}

customElements.define('ps-header', psHeader);