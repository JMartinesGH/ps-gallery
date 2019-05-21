import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import '@polymer/polymer/lib/elements/dom-repeat.js';
import '@polymer/iron-ajax/iron-ajax.js';
import '../ps-figure/ps-figure.js';


class psGallery extends PolymerElement {
    static get template() {
        return html`
            <style>
                :host {
                    display: inline-block;
                    font-family: Helvetica, Arial, sans-serif;
                }
                .container{
                    min-width: 100%;
                    margin: 0 auto;
                    max-width: 1400px;
                    box-sizing: border-box;
                    text-align: center;
                }
                span.tag{
                    color: white;
                    background: #ccc;
                    border-radius: 15px;
                    padding: 5px;
                }
                span.tag:hover{
                    background: #ff5200;
                    cursor: pointer;
                }
            </style>
            <iron-ajax auto
            url="http://gsx2json.com/api?id=1wZa0Gx2yAFDyMVayzRn428SDXCOJHOL-0_IX9uLiWW0"
            params="{}"
            handle-as="json"
            last-response="{{ajaxResponse}}"
            ></iron-ajax>
            <div class='container'>
                    <span class='tag' onclick="filterByTags">All</span>
                <template is="dom-repeat" items="[[uniqueTags(ajaxResponse.columns.tag)]]" index-as='j'>
                    <span class='tag' onclick="filterByTags(this)">[[item]]</span>
                </template>
            </div>
            <div class='container'>
                <template is="dom-repeat" items="[[ajaxResponse.rows]]" index-as='i'>
                    <ps-figure item='[[item]]'></ps-figure>
                </template>
            </div>
        `;
    }
    // static get properties() {
    //     return {
    //         contents: {
    //             value() {
    //                 return [
    //                     { "columns": { "image": ["https://cdn.shopify.com/s/files/1/1601/3103/files/Featured_Image_-_The_Great_Wave_off_Kanagawa_1240x992_1600x.jpg?v=1517035852", "https://i.kinja-img.com/gawker-media/image/upload/s--qfRoCI_D--/c_scale,f_auto,fl_progressive,q_80,w_800/jorex5ukyx9znjg1zbmq.jpg", "http://classicminiart.co.uk/resources/munch%204%20web.jpg", "http://cdn.junglecreations.com/wp/viralthread/2015/10/America-21.jpg", "https://media.giphy.com/media/gE0F9VJJ9YsQE/giphy.gif", "https://media.giphy.com/media/WzFPg3xJmTOTu/giphy.gif", "https://media.giphy.com/media/moyzrwjUIkdNe/giphy.gif", "https://media.giphy.com/media/3boPPdHk2ueo8/giphy.gif", "https://media.giphy.com/media/dQ4g8Xu9YRV8Q/giphy.gif", "https://media.giphy.com/media/lA79VcLDxSjyU/giphy.gif", "https://media.giphy.com/media/2pu0JLixaosEw/giphy.gif", "https://4.img-dpreview.com/files/p/E~TS590x388~articles/0915526255/1614997917_a0afda8631_b.jpeg", "https://media.giphy.com/media/l1J9NQvtuCQzUbH2g/giphy.gif", "https://media.giphy.com/media/26xBGcy977zkV5mes/giphy.gif", "https://4.img-dpreview.com/files/p/E~TS553x442~articles/0915526255/2452020557_6cb5c3399b_b.jpeg", "https://media.giphy.com/media/whOs1JywNpe6c/giphy.gif", "https://media.giphy.com/media/yiXUxfMnJgdfW/giphy.gif", "https://media.giphy.com/media/Pw7f9kOfx8iOI/giphy.gif"], "description": ["The Great Wave", "A Sunday Afternoon on the Island of La Grande Jatte", "The Scream readapted", "Flower Power", "Food First, Family Second", "The Rock singing Taylor Swift", "Dogs getting exercise and this is a really long description that is going to keep going and it's maybe not going to stop. This is meant to see how well the candidate handles really long text that could cause wrapping or other display issues like that. 1234567 1234556 12345677", "This iPad is broken, why won't it work?", "I hate my owner", "Dave Chappelle versus Godzilla", "What did the five fingers say to the face? What? SLAP!", "Lego Interpretation of Lunch atop a skyscraper by Mike Stimpson", "Papyrus. Font Outrage. This is a really long description, let's see how you deal with long descriptions. LONGGGGGG, really longgg, why is this so long? How is it this is still allowed to go on and what's the longest word that exists in the english language? The longest word in any of the major English language dictionaries is pneumonoultramicroscopicsilicovolcanoconiosis, a word that refers to a lung disease contracted from the inhalation of very fine silica particles, specifically from a volcano; medically, it is the same as silicosis.", "Sean Spicer depicted by Melissa McCarthy on Saturday Night Live during season 42", "Lego Interpretation of Raising the Flag at Iwo Jima by Mike Stimpson", "More cowbell, will ferrell, blue oyster club", "I got a fever, and the only prescription is more cowbell", "Hungry? Cats. Me quiero taco bell"], "tag": ["classics", "classics", "classics", "iconic", "food", "the rock", "dogs", "dogs", "dogs", "comics", "comics", "Lego|photo", "SNL|RYAN GOSLING", "SNL", "Lego|photo", "SNL", "SNL", "cats|tacos"], "date": ["11/14/1935", "2/13/88", "3/15/1979", "10/26/1967", "4/1/1999", "11/11/2011", "12/12/2012", "1/1/2001", "1/15/1986", "4/5/2007", "5/2/2006", "7/11/2016", "10/1/2017", "5/5/2017", "10/31/2016", "2/14/2001", "2/14/2001", "8/11/1980"], "active": ["yes", "no", "yes", "no", "yes", "yes", "yes", "yes", "yes", "yes", "yes", "no", "no", "yes", "yes", "yes", "yes", "yes"], "source": ["ftp", "web", "dtu", "dtu", "web", "web", "dtu", "dtu", "dtu", "photomechanic", "ftp", "photomechanic", "ftp", "photomechanic", "dtu", "photomechanic", "web", "web"], "org": ["ZCRVFR0ARO", "P6ENNB2RNO", "P6ENNB2RNO", "P6ENNB2RNO", "CSA49JNHUM", "9YCUF0FHYO", "9YCUF0FHYO", "9YCUF0FHYO", "9YCUF0FHYO", "6X90VJB294", "6X90VJB295", "72TEZ9GQI6", "72TEZ9GQI7", "72TEZ9GQI8", "72TEZ9GQI9", "72TEZ9GQI10", "72TEZ9GQI11", "9YCUF0FHYO"] }, "rows": [{ "image": "https://cdn.shopify.com/s/files/1/1601/3103/files/Featured_Image_-_The_Great_Wave_off_Kanagawa_1240x992_1600x.jpg?v=1517035852", "description": "The Great Wave", "tag": "classics", "date": "11/14/1935", "active": "yes", "source": "ftp", "org": "ZCRVFR0ARO" }, { "image": "https://i.kinja-img.com/gawker-media/image/upload/s--qfRoCI_D--/c_scale,f_auto,fl_progressive,q_80,w_800/jorex5ukyx9znjg1zbmq.jpg", "description": "A Sunday Afternoon on the Island of La Grande Jatte", "tag": "classics", "date": "2/13/88", "active": "no", "source": "web", "org": "P6ENNB2RNO" }, { "image": "http://classicminiart.co.uk/resources/munch%204%20web.jpg", "description": "The Scream readapted", "tag": "classics", "date": "3/15/1979", "active": "yes", "source": "dtu", "org": "P6ENNB2RNO" }, { "image": "http://cdn.junglecreations.com/wp/viralthread/2015/10/America-21.jpg", "description": "Flower Power", "tag": "iconic", "date": "10/26/1967", "active": "no", "source": "dtu", "org": "P6ENNB2RNO" }, { "image": "https://media.giphy.com/media/gE0F9VJJ9YsQE/giphy.gif", "description": "Food First, Family Second", "tag": "food", "date": "4/1/1999", "active": "yes", "source": "web", "org": "CSA49JNHUM" }, { "image": "https://media.giphy.com/media/WzFPg3xJmTOTu/giphy.gif", "description": "The Rock singing Taylor Swift", "tag": "the rock", "date": "11/11/2011", "active": "yes", "source": "web", "org": "9YCUF0FHYO" }, { "image": "https://media.giphy.com/media/moyzrwjUIkdNe/giphy.gif", "description": "Dogs getting exercise and this is a really long description that is going to keep going and it's maybe not going to stop. This is meant to see how well the candidate handles really long text that could cause wrapping or other display issues like that. 1234567 1234556 12345677", "tag": "dogs", "date": "12/12/2012", "active": "yes", "source": "dtu", "org": "9YCUF0FHYO" }, { "image": "https://media.giphy.com/media/3boPPdHk2ueo8/giphy.gif", "description": "This iPad is broken, why won't it work?", "tag": "dogs", "date": "1/1/2001", "active": "yes", "source": "dtu", "org": "9YCUF0FHYO" }, { "image": "https://media.giphy.com/media/dQ4g8Xu9YRV8Q/giphy.gif", "description": "I hate my owner", "tag": "dogs", "date": "1/15/1986", "active": "yes", "source": "dtu", "org": "9YCUF0FHYO" }, { "image": "https://media.giphy.com/media/lA79VcLDxSjyU/giphy.gif", "description": "Dave Chappelle versus Godzilla", "tag": "comics", "date": "4/5/2007", "active": "yes", "source": "photomechanic", "org": "6X90VJB294" }, { "image": "https://media.giphy.com/media/2pu0JLixaosEw/giphy.gif", "description": "What did the five fingers say to the face? What? SLAP!", "tag": "comics", "date": "5/2/2006", "active": "yes", "source": "ftp", "org": "6X90VJB295" }, { "image": "https://4.img-dpreview.com/files/p/E~TS590x388~articles/0915526255/1614997917_a0afda8631_b.jpeg", "description": "Lego Interpretation of Lunch atop a skyscraper by Mike Stimpson", "tag": "Lego|photo", "date": "7/11/2016", "active": "no", "source": "photomechanic", "org": "72TEZ9GQI6" }, { "image": "https://media.giphy.com/media/l1J9NQvtuCQzUbH2g/giphy.gif", "description": "Papyrus. Font Outrage. This is a really long description, let's see how you deal with long descriptions. LONGGGGGG, really longgg, why is this so long? How is it this is still allowed to go on and what's the longest word that exists in the english language? The longest word in any of the major English language dictionaries is pneumonoultramicroscopicsilicovolcanoconiosis, a word that refers to a lung disease contracted from the inhalation of very fine silica particles, specifically from a volcano; medically, it is the same as silicosis.", "tag": "SNL|RYAN GOSLING", "date": "10/1/2017", "active": "no", "source": "ftp", "org": "72TEZ9GQI7" }, { "image": "https://media.giphy.com/media/26xBGcy977zkV5mes/giphy.gif", "description": "Sean Spicer depicted by Melissa McCarthy on Saturday Night Live during season 42", "tag": "SNL", "date": "5/5/2017", "active": "yes", "source": "photomechanic", "org": "72TEZ9GQI8" }, { "image": "https://4.img-dpreview.com/files/p/E~TS553x442~articles/0915526255/2452020557_6cb5c3399b_b.jpeg", "description": "Lego Interpretation of Raising the Flag at Iwo Jima by Mike Stimpson", "tag": "Lego|photo", "date": "10/31/2016", "active": "yes", "source": "dtu", "org": "72TEZ9GQI9" }, { "image": "https://media.giphy.com/media/whOs1JywNpe6c/giphy.gif", "description": "More cowbell, will ferrell, blue oyster club", "tag": "SNL", "date": "2/14/2001", "active": "yes", "source": "photomechanic", "org": "72TEZ9GQI10" }, { "image": "https://media.giphy.com/media/yiXUxfMnJgdfW/giphy.gif", "description": "I got a fever, and the only prescription is more cowbell", "tag": "SNL", "date": "2/14/2001", "active": "yes", "source": "web", "org": "72TEZ9GQI11" }, { "image": "https://media.giphy.com/media/Pw7f9kOfx8iOI/giphy.gif", "description": "Hungry? Cats. Me quiero taco bell", "tag": "cats|tacos", "date": "8/11/1980", "active": "yes", "source": "web", "org": "9YCUF0FHYO" }] }
    //                 ];
    //             }
    //         }
    //     };
    // }
    uniqueTags(array){
        let uniques = new Set(array);
        let uniqArr = [...uniques];
        return uniqArr;
    }
    filterByTags(){
        //didn't work as expected
        // couldn't figure out how to use e.composedPath to get properties
        // console.log('click');
    }
    constructor(){
        super();
        // let tags = document.querySelectorAll("span[data-tag]");
        // for (var x = 0; x < tags.length; x++) {
        //     tags[x].addEventListener("click", function (e) {
        //         console.log('tag clicked');
        //         console.log(e.composedPath[0]);
        //     });
        // }
    }
}

customElements.define('ps-gallery', psGallery);
