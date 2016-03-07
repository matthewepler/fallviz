var defaultData = {};

defaultData.readings = [
	{ name: 'ori', x: '42.84', y: '-1.52', z: '0.00' },
	{ name: 'acc', x: '6.78', y: '-0.27', z: '-7.31' },
	{ name: 'gyr', x: '2.21', y: '2.32', z: '1.16' },
	{ name: 'ori', x: '42.82', y: '-1.76', z: '0.00' },
	{ name: 'acc', x: '6.70', y: '-0.30', z: '-7.23' },
	{ name: 'gyr', x: '2.90', y: '2.32', z: '0.26' },
	{ name: 'ori', x: '42.98', y: '-1.32', z: '0.00' },
	{ name: 'acc', x: '6.74', y: '-0.23', z: '-7.23' },
	{ name: 'gyr', x: '1.72', y: '-0.88', z: '-0.16' },
	{ name: 'ori', x: '42.68', y: '-1.31', z: '0.00' },
	{ name: 'acc', x: '6.74', y: '-0.23', z: '-7.31' },
	{ name: 'gyr', x: '3.32', y: '-0.95', z: '0.12' },
	{ name: 'ori', x: '42.52', y: '-1.31', z: '0.00' },
	{ name: 'acc', x: '6.70', y: '-0.23', z: '-7.31' },
	{ name: 'gyr', x: '1.65', y: '0.23', z: '0.82' },
	{ name: 'ori', x: '42.68', y: '-0.87', z: '0.00' },
	{ name: 'acc', x: '6.74', y: '-0.15', z: '-7.31' },
	{ name: 'gyr', x: '0.75', y: '1.97', z: '1.51' },
	{ name: 'ori', x: '42.07', y: '-1.74', z: '0.00' },
	{ name: 'acc', x: '6.67', y: '-0.30', z: '-7.39' },
	{ name: 'gyr', x: '4.99', y: '1.07', z: '-0.51' },
	{ name: 'ori', x: '42.99', y: '-1.09', z: '0.00' },
	{ name: 'acc', x: '6.78', y: '-0.19', z: '-7.27' },
	{ name: 'gyr', x: '3.60', y: '-1.02', z: '-0.71' },
	{ name: 'ori', x: '42.67', y: '-1.10', z: '0.00' },
	{ name: 'acc', x: '6.70', y: '-0.19', z: '-7.27' },
	{ name: 'gyr', x: '3.39', y: '-1.09', z: '-0.02' },
	{ name: 'ori', x: '42.68', y: '-1.31', z: '0.00' },
	{ name: 'acc', x: '6.74', y: '-0.23', z: '-7.31' },
	{ name: 'gyr', x: '2.97', y: '-0.46', z: '-0.02' },
	{ name: 'ori', x: '42.36', y: '-1.32', z: '0.00' },
	{ name: 'acc', x: '6.67', y: '-0.23', z: '-7.31' },
	{ name: 'gyr', x: '2.48', y: '0.09', z: '0.54' }
];

defaultData.ori = defaultData.readings.filter(function(obj) {
		return obj.name === 'ori';
});


defaultData.acc = defaultData.readings.filter(function(obj) {
	return obj.name === 'acc';
});


defaultData.gyr = defaultData.readings.filter(function(obj) {
	return obj.name === 'gyr';
});

// console.log(defaultData.ori);

