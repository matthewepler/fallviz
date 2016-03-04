var Axis = function(container){

  var depth = 200;
  // add X
  var axisGeom = new THREE.Geometry();
  var xAxisMaterial = new THREE.LineBasicMaterial({
    color:'blue'
  });
  axisGeom.vertices.push(new THREE.Vector3(0, 0, 0));
  axisGeom.vertices.push(new THREE.Vector3(depth, 0, 0));
  var axisLine = new THREE.Line(axisGeom, xAxisMaterial);
  container.add(axisLine);
  // add Y
  var yAxis = new THREE.Geometry();
  var yAxisMaterial = new THREE.LineBasicMaterial({
    color:'red'
  });
  yAxis.vertices.push(new THREE.Vector3(0, 0, 0));
  yAxis.vertices.push(new THREE.Vector3(0, depth, 0));
  var yAxisMesh = new THREE.Line(yAxis, yAxisMaterial);
  container.add(yAxisMesh);
  // add Z
  var zAxis = new THREE.Geometry();
  var zAxisMaterial = new THREE.LineBasicMaterial({
    color:'green'
  });
  zAxis.vertices.push(new THREE.Vector3(0, 0, 0));
  zAxis.vertices.push(new THREE.Vector3(0, 0, depth));
  var zAxisMesh = new THREE.Line(zAxis, zAxisMaterial);
  container.add(zAxisMesh);

  var planeGeometry = new THREE.PlaneGeometry(200, 200);
  var planeMaterial = new THREE.MeshLambertMaterial({color: 0xcccccc, opacity: 0.1});
  var plane = new THREE.Mesh(planeGeometry, planeMaterial);
  // plane.receiveShadow = true;
  // rotate and position the plane
  plane.rotation.x = -0.5 * Math.PI;
  plane.position.x = 0;
  plane.position.y = -1;
  plane.position.z = 0;
  // add the plane to the scene
  container.add(plane);

};