var camera, renderer, scene, cameraControl;

function init() {
	scene = new THREE.Scene(); 

    renderer = new THREE.WebGLRenderer(); 
    renderer.setClearColor(0x000000, 1.0);
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.shadowMap.enabled = true;

    camera = new THREE.PerspectiveCamera( 
        75, window.innerWidth / window.innerHeight, 0.1, 8000);
    // camera.position.x = 15;
    // camera.position.y = 16;
    camera.position.z = 2000;
    camera.lookAt(scene.position);
    cameraControl = new THREE.OrbitControls(camera);

    var axis = new Axis(scene);

    var group = new THREE.Object3D(); // holds the resulting mesh. coming back to this. 
    group.position.y = 0;
    scene.add(group);

    //parse data
    var data = new Fall.DataSet();// new Surf.Data();

    // create buffer geom and add to group as mesh
    createGeometry(data, group);

    document.body.appendChild(renderer.domElement); 
    render(); 
}
window.onload = init;


function render() {
	renderer.render(scene, camera);
	requestAnimationFrame(render); 
    cameraControl.update();
}


var bufferGeom, lineMaterial, mesh, positions, colors, currIndex = 0;

function createGeometry(parsedData, thegroup) {
    bufferGeom = new THREE.BufferGeometry();
    lineMaterial = new THREE.LineBasicMaterial({vertexColors: true});

    bufferGeom.addAttribute( 'position', new Float32Array( parsedData.coordinates.length * 3 ), 3);
    bufferGeom.addAttribute( 'color', new Float32Array( parsedData.coordinates.length * 3 ), 3);

    positions = bufferGeom.getAttribute('position').array;
    colors = bufferGeom.getAttribute('color').array;
    mesh = new THREE.Line(bufferGeom, lineMaterial);
    thegroup.add(mesh);
}   
