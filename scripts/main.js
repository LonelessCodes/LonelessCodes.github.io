var menu_icon = document.getElementById("menu_icon");
var nav_back = document.getElementById("nav_back");
var nav = document.getElementById("nav");

function click () {
    nav_back.classList.toggle("open");
    menu_icon.classList.toggle("close");
    nav.classList.toggle("show");
}

menu_icon.addEventListener("click", click, false);

window.addEventListener("mousemove", function (e) {
    if (e.pageX <= 0 && !nav_back.classList.contains("open")) {
        click();
    } else if (e.pageX > 200 && nav_back.classList.contains("open")) {
        click();
    }
});
