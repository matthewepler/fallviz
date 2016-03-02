var Fall = Fall || {};

Fall.Data = function() {
	this.data = '';
	this.coordinates = [];
	this.parseData(this.data);
};

Fall.Data.prototype.parseData = function(data) {
	console.log("data passed to 'parseData' = ", data);
	var rows = data.split('+');
	var prevTime = 0;
 	var prevLoc = new THREE.Vector3(0, 0, 0);
 	var currLoc = new THREE.Vector3(0, 0, 0);

 	for(var i = 1; i < rows.length; i++){
	    var c = new Fall.Coordinate();
	    var vals = rows[i].split(',');
	    // var timestamp = parseInt(vals[0], 10);
	    // var deltaTime = timestamp - prevTime;
	    // var x = parseFloat(vals[1]);
	    // var y = parseFloat(vals[2]);
	    // var z = parseFloat(vals[3]);

	    // c.locDiff.x = x + prevLoc.x;
	    // c.locDiff.y = y + prevLoc.y;
	    // c.locDiff.z = z + prevLoc.z;

	    // currLoc = currLoc.add(new THREE.Vector3(c.locDiff.x / 500, c.locDiff.y / 500, c.locDiff.z / 500));
	    // c.loc = currLoc.clone();

	    // this.coordinates.push(c);

	    // prevLoc = c.loc;
	    // prevTime = timestamp;
  	}

 //  	var locations = _.pluck(this.coordinates, 'loc');

	// // trim down locations
	// var newLocs = [];
	// _.each(locations, function(loc, i){
	//   if(i % 10 === 0){
	//     newLocs.push(loc);
	//   }
	// });
	// this.splineCurve = new THREE.SplineCurve3(newLocs);
};