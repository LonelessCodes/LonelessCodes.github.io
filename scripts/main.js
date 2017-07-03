var menu_icon = document.getElementById("menu_icon");
var nav_back = document.getElementById("nav_back");
var nav = document.getElementById("nav");

menu_icon.addEventListener("click", function () {
    nav_back.classList.toggle("open");
    menu_icon.classList.toggle("close");
    nav.classList.toggle("show");
}, false);
