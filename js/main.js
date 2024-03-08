import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import anime from 'animejs/lib/anime.es.js';


const loader = new GLTFLoader();
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(40, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer({ alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const light = new THREE.AmbientLight(0xffffff, 15);
scene.add(light);

const light2 = new THREE.DirectionalLight(0xff0000, 0.1, 100);
light2.position.set(0, -2, -20);
scene.add(light2);
const light3 = new THREE.DirectionalLight(0xffffff, 10);    
light3.position.set(0, 0, 10);
scene.add(light3);


const pointLight = new THREE.PointLight(0xffffff, 5);
pointLight.position.set(camera.position.x, camera.position.y, camera.position.z);
scene.add(pointLight);
const redLight = new THREE.PointLight(0xff0000, 1, 100);
redLight.position.set(5,-1,-10);
scene.add(redLight);
const redLight2 = new THREE.PointLight(0xff0000, 1, 100);
redLight2.position.set(-5,1,-10);
scene.add(redLight2);


camera.position.x = 0;
camera.position.y = 2;
camera.position.z = 3;

const controls = new OrbitControls(camera, renderer.domElement);

loader.load('../public/scene.gltf', function (gltf) {
    const model = gltf.scene;
    scene.add(model);

    animate();
}, undefined, function (error) {
    console.error(error);
});

// // Almacena la posición original de la cámara
// let originalPosition = { x: camera.position.x, y: camera.position.y, z: camera.position.z };

window.onscroll = function () {

    var scrollVar = parseInt(window.scrollY);
    console.log(scrollVar);

    if (scrollVar === 0) {
        
        anime({
            targets: camera.position,
            x: 0,
            y: 2,
            z: 3,
            duration: 5000,
            easing: 'easeInOutCubic',
            update: function (anim) {
                camera.lookAt(0, 0, 0);
            }
        });
    } else if (scrollVar > 800 && scrollVar< 1600) {
        
        anime({
            targets: camera.position,
            x: 2,
            y: 1,
            z: 2,
            duration: 5000,
            easing: 'easeInOutCubic',
            update: function (anim) {
                camera.lookAt(0, 0, 0);
            }
        });
    } else if (scrollVar > 1600) {
        
        anime({
            targets: camera.position,
            x: -3,
            y: 1,
            z: 2,
            duration: 5000,
            easing: 'easeInOutCubic',
            update: function (anim) {
                camera.lookAt(0, 0, 0);
            }
        });
    }
};

function animate() {
    requestAnimationFrame(animate);
    controls.update();
    renderer.render(scene, camera);
}

// Funcion para obtener la posición del scroll en el eje vertical
window.addEventListener('scroll', function () {
    var scrollTop = (window.scrollY !== undefined) ? window.scrollY : (document.documentElement || document.body.parentNode || document.body).scrollTop;
    console.log("Posición del scroll:", scrollTop);
});

