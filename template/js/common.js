$(function(){
    const perspective = document.querySelector(".perspective");

    function clickRotate(){
        perspective.classList.toggle("rotate");
    }
    perspective.addEventListener('click',clickRotate);
})