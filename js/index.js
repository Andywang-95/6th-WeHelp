changePadding = () => {
    let headerHeight = document.querySelector(".header").offsetHeight;

    const container = document.querySelector('.container');
    const body = document.querySelector('body');
    const question_list = document.querySelectorAll('.question');

    container.style.paddingTop = headerHeight + 'px';
    container.style.marginTop = '-' + headerHeight + 'px';

    body.style.marginTop = headerHeight + 'px';

    for(let i = 0; i < question_list.length; i++) {
        question = question_list[i];
        question.style.paddingTop = String(Number(headerHeight) + 5) + 'px';
        question.style.marginTop = '-' + headerHeight + 'px';
    }

}

changeWidth = () => {
    let outlineWidth = document.getElementsByClassName('outline')[0].offsetWidth;

    const content = document.getElementsByClassName('content')[0];
    content.style.paddingLeft = String(Number(outlineWidth) + 30) + 'px';
}

outlineHeight = () => {
    let headerHeight = document.querySelector(".header").offsetHeight;
    let pageHeight = window.innerHeight;
    
    const outline = document.querySelector('.outline');
    outline.style.maxHeight = String((pageHeight - Number(headerHeight)) * 0.93) + 'px';
}

// window.onload = () =>{
//     changePadding();
//     changeWidth();
// }
window.addEventListener('DOMContentLoaded', function(){
    changePadding();
    changeWidth();
    outlineHeight();
})
window.addEventListener('resize', changePadding);
window.addEventListener('resize', changeWidth);
window.addEventListener('resize', outlineHeight);

