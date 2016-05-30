/**
 * Created by Liam on 5/28/2016.
 */

var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 35, window.innerWidth/window.innerHeight, 0.1, 1000 );
var light = new THREE.AmbientLight(0xffffff);

var renderer = window.WebGLRenderingContext ? new THREE.WebGLRenderer() : new THREE.CanvasRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

var geometry = new THREE.BoxGeometry( 1, 1, 1 );
var material = new THREE.MeshBasicMaterial( { color: 0x4c4cff } );
var cube = new THREE.Mesh( geometry, material );
scene.add( cube );
scene.add(light);
camera.position.z = 5;

var render = function () {
    requestAnimationFrame( render );

    cube.rotation.x += 0.01;
    cube.rotation.y += 0.03;

    renderer.render(scene, camera);
};

render();

