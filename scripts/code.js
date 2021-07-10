arrowTop.addEventListener('click', backToTop)

function backToTop() {
    if (window.pageYOffset > 0) {
        window.scrollBy(0, -80);
        setTimeout(backToTop, 10);
    }
}



window.addEventListener('scroll', function () {
    arrowTop.hidden = (pageYOffset < document.documentElement.clientHeight);
});





menu.onclick = function() {
    menu.classList.toggle('active');
    menuList.classList.toggle('active');
    body.classList.toggle('active');
}