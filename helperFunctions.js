document.addEventListener("DOMContentLoaded", function () {
    zoom = function(image){
        console.log("zoom zoom");
        console.log("this:", image);
    };
    filterByTags = function(tag){
        console.log('tag clicked');
        console.log(tag.innerText)
    }
});
    