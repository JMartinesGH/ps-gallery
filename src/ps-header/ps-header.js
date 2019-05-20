import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';

class psHeader extends PolymerElement {
    static get template() {
        return html`
            <h1>Header</h1>
        `;
    }
    constructor() {
        super();
    }
}

customElements.define('ps-header', psHeader);
