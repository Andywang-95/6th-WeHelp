changePadding = () => {
    let headerHeight = document.querySelector(".header").offsetHeight;

    const container_padding_top = document.querySelector('.container');
    container_padding_top.style.paddingTop = headerHeight + 'px'
}
changeWidth = () => {
    let outlineWidth = document.getElementsByClassName('outline')[0].offsetWidth;
    // let containerWidth = document.getElementsByClassName('container')[0].offsetWidth;

    const content_width = document.getElementsByClassName('content')[0];
    // console.log(String(Number(containerWidth) - Number(outlineWidth)) + 'px')
    content_width.style.paddingLeft = outlineWidth + 'px';
}
// window.onload = () =>{
//     changePadding();
//     changeWidth();
// }
window.addEventListener('DOMContentLoaded', function(){
    changePadding();
    changeWidth();
})
window.addEventListener('resize', changePadding);
window.addEventListener('resize', changeWidth);

