// Create the map using Leaflet and Mapbox
const map = L.map('map').setView([39.0837, -77.1485], 12);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: 'Map data © <a href="https://openstreetmap.org">OpenStreetMap</a> contributors'
}).addTo(map);

// Fetch data from the backend
fetch('/api/data')
  .then(response => response.json())
  .then(data => {
    // Process and visualize the data on the map
    processData(data);
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });

// Function to process and visualize the data on the map
// function processData(data) {
// }

const scene = new THREE.Scene();

const renderer = new THREE.WebGLRenderer({ alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

// Update scenes
function animate() {
  requestAnimationFrame(animate);
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;
  renderer.render(scene, camera);
}
animate();
