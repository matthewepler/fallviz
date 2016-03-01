var camera, renderer, scene, cameraControl;

function init() {
	scene = new THREE.Scene(); 

    renderer = new THREE.WebGLRenderer({alpha:true}); 
    //renderer.setClearColor(0x000000, 1.0);
    renderer.setSize(window.innerWidth, window.innerHeight);

    camera = new THREE.PerspectiveCamera( 
        75, window.innerWidth / window.innerHeight, 0.1, 8000);
    // camera.position.x = 15;
    // camera.position.y = 16;
    camera.position.z = 2000;
    camera.lookAt(scene.position);
    cameraControl = new THREE.OrbitControls(camera);

    var axis = new Axis(scene);

    //parse data
    var data = new Fall.DataSet();

    // holds the resulting mesh. coming back to this. 
    var group = new THREE.Object3D(); 
    group.position.y = 0;
    scene.add(group);

    // create buffer geom and add to group obj as mesh
    createGeometry(data, group);

    // kick it off!
    document.body.appendChild(renderer.domElement); 
    render(data); 
}
window.onload = init;


var bufferGeom, lineMaterial, mesh, positions, colors;

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


var currIndex = 0

function render(renderData) {
    requestAnimationFrame(render); 
        if(bufferGeom) {
            
        }
	renderer.render(scene, camera);
    cameraControl.update();
}


