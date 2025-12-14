import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

const scene = new THREE.Scene();
const canvas = document.getElementById('experience-canvas');

const sizes = {
    width : window.innerWidth,
    height : window.innerHeight,
}

// const camera = new THREE.PerspectiveCamera(75 , sizes.width / sizes.height , 0.1 , 1000);

let aspect_ratio = sizes.width / sizes.height;

const camera = new THREE.OrthographicCamera( - aspect_ratio * 50, aspect_ratio * 50, 50, -50, 1, 1000 );
scene.add( camera );

camera.position.x = -41.36600246337475
camera.position.y = 12.99558009762036
camera.position.z = -46.69256444177344

const renderer = new THREE.WebGLRenderer({canvas : canvas,  antialias: true});
renderer.setSize(sizes.width , sizes.height);
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.75;

document.body.appendChild(renderer.domElement);

const controls = new OrbitControls( camera, renderer.domElement );
controls.update();





function handle_resize(){
    sizes.width = window.innerWidth;
    sizes.height = window.innerHeight;
    camera.aspect = sizes.width / sizes.height;
    camera.updateProjectionMatrix();
    renderer.setSize(sizes.width , sizes.height);    
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    
    aspect_ratio = sizes.width / sizes.height;
    camera.left = -aspect_ratio * 50;
    camera.right = aspect_ratio * 50;
    camera.top = 50;
    camera.bottom = -50;

}

window.addEventListener('resize' , handle_resize);

function animate(){
    renderer.render(scene , camera);
}

renderer.setAnimationLoop( animate );




const sun = new THREE.DirectionalLight( 0xFFFFFF );
sun.castShadow = true;

sun.position.set(50,80,0);
sun.target.position.set(0 , 0 ,0);
sun.shadow.mapSize.width = 4096;
sun.shadow.mapSize.height = 4096;
sun.shadow.camera.left = -200;
sun.shadow.camera.right = 200;
sun.shadow.camera.top = 200;
sun.shadow.camera.bottom = -200;
sun.shadow.normalBias = -0.1;

scene.add( sun );

console.log(sun.shadow);

const shadow_helper = new THREE.CameraHelper( sun.shadow.camera );
scene.add( shadow_helper );

const helper = new THREE.DirectionalLightHelper( sun, 5 );
scene.add( helper );



const color = 0xffdd40;
const intensity = 1;
const light = new THREE.AmbientLight(color, intensity);
scene.add(light);

// loading my object
const loader = new GLTFLoader();

loader.load('./portfolio.glb', function ( glb ) {
    
    glb.scene.traverse((child) => {
        if(child.isMesh){
            child.castShadow = true;
            child.receiveShadow = true;
            child.material.metalness = .3;
            if (child.material.name == "middle"){
                child.material.color.setRGB(0 , 0, 0);
            }
            
            console.log(child.material);
        }    
    })
    scene.add( glb.scene );

}, undefined, function ( error ) {

  console.error( `error is : ${error}` );

} );
