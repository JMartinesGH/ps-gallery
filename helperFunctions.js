document.addEventListener("DOMContentLoaded", function () {
    zoom = function(image){
        console.log("zoom zoom");
        console.log("this:", image);
        let el = document.createElement('div');
        el.classList.add('overlay');
        let imgClone = image.cloneNode(true);
        imgClone.removeAttribute("onclick");
        imgClone.addEventListener("click", unzoom, false);
        el.append(imgClone);
        document.querySelector('body').append(el);
    };
    unzoom = function(){
        console.log('unzoom');
        let el = document.querySelector('.overlay');
        el.parentNode.removeChild(el);
    }
    filterByTags = function(string){
        console.log(string+' tag clicked');
    }
});
    