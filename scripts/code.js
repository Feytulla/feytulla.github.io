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

menu.onclick = function () {
    menu.classList.toggle('active');
    menuList.classList.toggle('active');
    body.classList.toggle('active');
}

const filterBox = document.querySelectorAll('.works__item');

document.querySelector('.nav-filter').addEventListener('click', elem => {
    if (elem.target.tagName !== 'LI') return false

    const filterClass = elem.target.dataset['filter'];

    filterBox.forEach(elem => {
        if (!elem.classList.contains(filterClass) && filterClass !== 'all') {
            elem.classList.add('anime')
        } else {
            elem.classList.remove('anime')
            elem.classList.remove('hide')
        }
    })

    filterBox.forEach(elem => {
        elem.ontransitionend = () => {
            if (elem.classList.contains('anime')) {
                elem.classList.add('hide')
            }
        }
    })
})