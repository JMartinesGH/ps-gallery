import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';

class psGallery extends PolymerElement {
    static get template() {
        return html`
            <h1>Gallery</h1>
        `;
    }
    constructor(){
        super();
    }
}

customElements.define('ps-gallery', psGallery);
