const allGallery= document.querySelectorAll('.slider');
console.log (allGallery);
const buttonPrev=document.querySelector('.fa-angle-left');
console.log(buttonPrev);
const buttonNext=document.querySelector('.fa-angle-right');
console.log(buttonNext);
let visibleIndex=0;

allGallery[visibleIndex].classList.add('visible');

buttonNext.addEventListener('click', function(){
    if(visibleIndex<allGallery.length-1) {
        allGallery[visibleIndex].classList.remove('visible');
        visibleIndex=visibleIndex+1;
        allGallery[visibleIndex].classList.add('visible');
    }else{
        allGallery[visibleIndex].classList.remove('visible');
        visibleIndex=0;
        allGallery[visibleIndex].classList.add('visible');
    }
});
buttonPrev.addEventListener('click', function () {
    if(visibleIndex>0) {
        allGallery[visibleIndex].classList.remove('visible');
        visibleIndex=visibleIndex-1;
        allGallery[visibleIndex].classList.add('visible');
    }else {
        allGallery[visibleIndex].classList.remove('visible');
        visibleIndex=allGallery.length-1;
        allGallery[visibleIndex].classList.add('visible');
    }
});
