document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Message sent successfully!");
});

// Parallax scrolling effect
document.addEventListener("scroll", function() {
    let scrollPosition = window.scrollY;
    document.querySelector(".parallax").style.backgroundPositionY = scrollPosition * 0.5 + "px";
});

// 3D Cube with Three.js
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ canvas: document.getElementById("canvas") });

renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial({ color: 0xe94560 });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

camera.position.z = 5;

function animate() {
    requestAnimationFrame(animate);
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    renderer.render(scene, camera);
}
animate();