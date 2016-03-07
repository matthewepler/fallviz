// parser.js - used to turn raw sensor data into default data for visualizing.
// run this in node on your machine to create JSON-style data 
// copy/paste the data in the defaultData.js array 

// usage: node parser.js [filename]

if(process.argv.length < 3) {
	console.log('Usage: node parser.js [filename]');
	process.exit(1);
}

var fs = require('fs');
var filename = process.argv[2];

fs.readFile(filename, 'utf8', function(err, data) {
	if (err) throw err;
	
	var rgx = /(-*\d.{3,4}),(-*\d.{3,4}),(-*\d.{3,4})(?=\])/gm;
	var objNames = ['ori', 'acc', 'gyr'];
	
	function Sensor(name, x, y, z) {
					this.name = name;
					this.x = x;
					this.y = y;
					this.z = z;
				};

	var rows = data.split(/\r?\n/);
	rows.forEach(function(item, index) {
			if(item && item.includes('orin')) {
				var match = item.match(rgx);
				//console.log('result of match = ', match);
				
				match.forEach(function(mItem, mIndex) {
					var vals = mItem.split(',');
					var thisSensor = new Sensor(objNames[mIndex], vals[0], vals[1], vals[2]);
					console.log(thisSensor)
				});
			}
	});
});
