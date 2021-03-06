import { html, PolymerElement } from '@polymer/polymer/polymer-element.js';

/**
 * @customElement
 * @polymer
 */
class PsFigure extends PolymerElement {
    static get template() {
        return html`
      <style>
        :host {
          display: inline-block;
        }
        img{
            width: 100%;
            height: 248px;
            object-fit: cover;
            cursor: pointer;
        }
        figure{
            display: inline-block;
            width: 320px;
            min-height: 400px;
            vertical-align: top;
            margin: 20px 0;
            box-shadow: 0px 2px 5px grey;
            border-top: 5px solid #ff5200;
        }
        figure p{
            margin: 10px 15px 20px;
            text-align: left;
            word-wrap: break-word;
        }
        figure span,
        span.tag{
            color: white;
            background: #ccc;
            border-radius: 20px;
            padding: 2px 5px;
            margin: 3px;
            display: inline-block;
            line-height: 20px;
        }
        span.tag:hover{
            background: #ff5200;
            cursor: pointer;
        }

        @media screen and (min-width: 768px){
            figure{
                width: 360px;
                min-height: 400px;
                margin: 20px;
            }
            img{
                height: 280px;
            }
        }
        </style>
        <figure data-tags$="{{tagString(item.tag)}}">
            <img src="[[item.image]]" alt="[[item.description]]" onclick="zoom(this)" onerror="this.onerror=null;this.src='https://placekitten.com/350/280';">
            <p>[[item.description]]</p>
            <p>[[item.date]]</p>
            <p>
                <template is="dom-repeat" items="[[splitTags(item.tag)]]">
                    <span class="tag" onclick="filterByTags([[item]])">[[item]]</span>
                </template>
            </p>
        </figure>
    `;
    }
    static get properties() {
        return {
            item: {
                type: Array
            }
        };
    }
    splitTags(string) {
        let arr = string.split('|');
        return arr;
    }
    tagString(string){
        let arr = string.split('|');
        return arr.toString();
    }
}

window.customElements.define('ps-figure', PsFigure);
