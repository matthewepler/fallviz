var camera, rotationCamera, gui;

$(document).ready(function(){

    /// ROTATION SCENE (UPPER-RIGHT)
    var rotationScene = new THREE.Scene();
    
    rotationRenderer = new THREE.WebGLRenderer(); 
    rotationRenderer.setClearColor(0x000000, 1.0);
    rotationRenderer.setSize(window.innerWidth/5, window.innerWidth/5);
    rotationRenderer.shadowMap.enabled = true; 
    
    rotationCamera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerWidth, 0.1, 1000);
    rotationCamera.position.x = 15;
    rotationCamera.position.y = 15;
    rotationCamera.position.z = 13;
    rotationCamera.lookAt(rotationScene.position);
    
    var planeGeometry = new THREE.PlaneGeometry(20, 20);
    var planeMaterial = new THREE.MeshLambertMaterial({color: 0xcccccc});
    var plane = new THREE.Mesh(planeGeometry, planeMaterial);
    plane.rotation.x = -0.5 * Math.PI;
    plane.position.x = 0;
    plane.position.y = -100;
    plane.position.z = 0;
    rotationScene.add(plane);
    
    var cubeGeometry = new THREE.BoxGeometry(5, 11, 1);
    var cubeMaterial = new THREE.MeshLambertMaterial({color: 'red'});
    var cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
    cube.castShadow = true;
    rotationScene.add(cube);
    
    var spotLight = new THREE.SpotLight(0xffffff);
    spotLight.position.set(10, 20, 20);
    spotLight.shadow.camera.near = 20;
    spotLight.shadow.camera.far = 50;
    spotLight.castShadow = true;
    rotationScene.add(spotLight);


    
    /// MAIN SCENE
    var scene = new THREE.Scene(); 
    var renderer = new THREE.WebGLRenderer({alpha:true}); 
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera = new THREE.PerspectiveCamera( 
        45, window.innerWidth / window.innerHeight, 0.1, 8000);
    // camera.position.x = 15;
    // camera.position.y = 16;
    camera.position.z = 2000;
    camera.lookAt(scene.position);
    var cameraControl = new THREE.OrbitControls(camera, container);

    // ADDING BOTH TO DOM
    var container = document.getElementById('canvas-wrap');
    container.appendChild( renderer.domElement );
    container = document.getElementById('rotation-wrap');
    container.appendChild(rotationRenderer.domElement); 


    var axis = new Axis(scene);

    // GUI
    gui = new Fall.GUI(function(newData){ 
        // will get run anytime 'submit' is clicked
        // we pass it here because we need the closure 

        // var objsToRemove = _.rest(group.children, 1);
        // _.each(objsToRemove, function( object ) {
        //       group.remove(object);
        // });
        data.parseData(newData);
        createGeometry();
    });

    var data = new Fall.Data();

    


    // holds the resulting mesh. coming back to this. 
    var group = new THREE.Object3D(); 
    group.position.y = 0;
    scene.add(group);

    // create buffer geom and add to group obj as mesh
    createGeometry(data, group);

    // kick it off!
    render(data); 

    var bufferGeom, lineMaterial, mesh, positions, colors;

    function createGeometry() {
        bufferGeom = new THREE.BufferGeometry();
        lineMaterial = new THREE.LineBasicMaterial({vertexColors: true});

        bufferGeom.addAttribute( 'position', new Float32Array( data.coordinates.length * 3 ), 3);
        bufferGeom.addAttribute( 'color', new Float32Array( data.coordinates.length * 3 ), 3);

        positions = bufferGeom.getAttribute('position').array;
        colors = bufferGeom.getAttribute('color').array;
        mesh = new THREE.Line(bufferGeom, lineMaterial);
        group.add(mesh);
    }   


    var currIndex = 0

    function render(renderData) {
        requestAnimationFrame(render); 
            if(bufferGeom) {
                
            }
        renderer.render( scene, camera );
        rotationRenderer.render( rotationScene, rotationCamera );
        cameraControl.update();
    }

    createGeometry();
    render();
});

function customAlert(text) {
    $("#messages h1").text(text);
    $("#messages").css('opacity', 1);
    setTimeout(function() {
        $('#messages').css('opacity', 0);
    },3000);
}


function handleResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    rotationCamera.aspect = window.innerWidth / window.innerWidth;
    camera.updateProjectionMatrix();
    projectioncamera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
    rotationRenderer.setSize(window.innerWidth/5, window.innerWidth/5);
}


window.addEventListener('resize', handleResize, false);
$("#data-input").on('click', function(){this.select()});

