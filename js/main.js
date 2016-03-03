var camera, gui;

$(document).ready(function(){

	var scene = new THREE.Scene(); 

    var renderer = new THREE.WebGLRenderer({alpha:true}); 
    renderer.setSize(window.innerWidth, window.innerHeight);

    var container = document.getElementById('canvas-wrap');
    container.appendChild( renderer.domElement );

    camera = new THREE.PerspectiveCamera( 
        75, window.innerWidth / window.innerHeight, 0.1, 8000);
    // camera.position.x = 15;
    // camera.position.y = 16;
    camera.position.z = 2000;
    camera.lookAt(scene.position);
    var cameraControl = new THREE.OrbitControls(camera, container);

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
    	renderer.render(scene, camera);
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
