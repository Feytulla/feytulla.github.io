scene = new THREE.Scene();
camera = new THREE.PerspectiveCamera(65, window.innerWidth / window.innerHeight, 0.1, 4500);
camera.position.z = 7;
camera.position.y = 0.6;
camera.position.x = -3;

renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
renderer.setClearColor(0x000000, 0);
renderer.setSize(window.innerWidth, window.innerHeight);

function init() {
    renderer.setSize(window.innerWidth, window.innerHeight);
}

window.addEventListener('resize', init);

renderer.domElement.setAttribute("id", "Mine");
document.body.insertBefore(renderer.domElement, document.body.firstChild);

const aLight = new THREE.AmbientLight(0x000000, 0.6);
scene.add(aLight);

const pLight = new THREE.PointLight(0xFFFFFF, 0.7);
pLight.position.set(-1.5, 2, 7);
scene.add(pLight);

let loader = new THREE.GLTFLoader()
let obj = null;

loader.load('/scripts/face2.gltf', function (gltf) {
    obj = gltf;
    obj.scene.scale.set(1.5, 1.5, 1.5);

    scene.add(obj.scene);
})

function animate() {
    requestAnimationFrame(animate);

    if (obj) {
        obj.scene.rotation.y += 0.015;
    }

    renderer.render(scene, camera);
}
animate()

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

