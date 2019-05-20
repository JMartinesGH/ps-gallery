import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '../ps-header/ps-header.js';
import '../ps-gallery/ps-gallery.js';

/**
 * @customElement
 * @polymer
 */
class PsGalleryApp extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
        }
      </style>
      <h2>Hello [[prop1]]!</h2>
      <ps-header></ps-header>
      <ps-gallery></ps-gallery>
    `;
  }
  static get properties() {
    return {
      prop1: {
        type: String,
        value: 'ps-gallery-app'
      }
    };
  }
}

window.customElements.define('ps-gallery-app', PsGalleryApp);
