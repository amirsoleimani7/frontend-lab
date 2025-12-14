import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

const scene = new THREE.Scene();
const canvas = document.getElementById('experience-canvas');

const sizes = {
    width : window.innerWidth,
    height : window.innerHeight,
}


const camera = new THREE.PerspectiveCamera(75 , sizes.width / sizes.height , 0.1 , 1000);

const renderer = new THREE.WebGLRenderer({canvas : canvas});
renderer.setSize(sizes.width , sizes.height);
console.log(`device pixel ratio is : ${window.devicePixelRatio}`);


document.body.appendChild(renderer.domElement);

// making the cube 
const geometry = new THREE.BoxGeometry(2, 2 ,2);
const material = new THREE.MeshBasicMaterial({color : 0x810818 , wireframe : false});
const cube = new THREE.Mesh(geometry,  material);
scene.add(cube);

camera.position.z = 5;

function handle_resize(){
    sizes.width = window.innerWidth;
    sizes.height = window.innerHeight;
    camera.aspect = sizes.width / sizes.height;
    camera.updateProjectionMatrix();
    renderer.setSize(sizes.width , sizes.height);    
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
}


window.addEventListener('resize' , handle_resize);

function animate(){
    // cube.rotation.x += .1;
    // cube.rotation.y += .1;
    
    controls.update();
	renderer.render( scene, camera );

    renderer.render(scene , camera);
}

renderer.setAnimationLoop( animate );


const controls = new OrbitControls( camera, renderer.domElement );
// controls.update() must be called after any manual changes to the camera's transform
camera.position.set( 0, 20, 100 );
controls.update();

