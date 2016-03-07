var Fall = Fall || {};

Fall.Data = function() {
	this.readings = defaultData.readings;
	this.ori = defaultData.ori;
	this.acc = defaultData.acc;
	this.gyr = defaultData.gyr;
	this.coordinates = [];

	console.log(this.gyr);
};

Fall.Data.prototype.parseData = function(data) {
	var readings = this.readings = [];
	var ori = this.ori = [];
	var acc = this.acc = [];
	var gyr = this.gyr = [];

	if(data !== '') {
		var rgx = /(-*\d.{3,4}),(-*\d.{3,4}),(-*\d.{3,4})(?=\])/gm;
		var objNames = ['ori', 'acc', 'gyr'];
		function Sensor(name, x, y, z) {
						this.name = name;
						this.x = x;
						this.y = y;
						this.z = z;
					};

		var rows = data.split('\n');
		rows.forEach(function(item, index) {
			if(item.includes('orin')) {
				var match = item.match(rgx);
				//console.log('result of match = ', match);
				var thisLine = [];
				match.forEach(function(mItem, mIndex) {
					var vals = mItem.split(',');
					var thisSensor = new Sensor(objNames[mIndex], vals[0], vals[1], vals[2]);
					thisLine.push(thisSensor);
					if (thisSensor.name === 'ori') {
						ori.push(thisSensor);
					} else if (thisSensor.name === 'acc') {
						acc.push(thisSensor);
					} else if (thisSensor.name === 'gyr') {
						gyr.push(thisSensor);
					}
				});
				//console.log('result of parse = ', thisLine);
				readings.push(thisLine);
			}
		});
		customAlert(readings.length + ' lines imported'); // **!!**  add to meta data column!!!!!
		// console.log(acc);
	} else {
		// alert("Copy/paste data into the data field in the upper-left.");
	}
	

	// var prevTime = 0;
 // 	var prevLoc = new THREE.Vector3(0, 0, 0);
 // 	var currLoc = new THREE.Vector3(0, 0, 0);

 // 	for(var i = 1; i < rows.length; i++){
	//     var c = new Fall.Coordinate();
	//     var vals = rows[i].split(',');
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
  	//}

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