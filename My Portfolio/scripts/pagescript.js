//Page Loading Animation
const loader = document.getElementById("preloader")
const body = document.getElementsByTagName('body');
body[0].style.opacity="0";
window.addEventListener("load",function() {
    function blured() {
        body[0].style.opacity="100%";
    }
    function loaderdis() {
        loader.style.display="none";
    }
    setInterval(loaderdis, 50);
    setInterval(blured, 50);
});

//menu fuctions
const menuBtn = document.getElementById("OpenBtn");
const CloseBtn = document.getElementById("CloseBtn");
const menu = document.getElementById("menu-mobile");
menuBtn.addEventListener("click", function mrnuFunction() {
    menu.style.top="0";
});
CloseBtn.addEventListener("click", function mrnuFunction() {
    menu.style.top="-100vh";
});