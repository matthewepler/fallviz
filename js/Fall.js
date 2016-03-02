var Fall = Fall || {};


Fall.GUI = function(){
	$('.cancel').click(function() {
		$('.data-container').css('display', 'none');
		$('#data-input').get(0).value = '';
	});
  	$('.submit').click(function(){
	    $('.data-container').css('display', 'none');
	    this.data = $('#data-input').get(0).value;
	    if(this.data !== ''){
	      this.parseData(this.data);
	    } else {
	    	alert('no data imported!');
	    }
  });

  this.data = function() {
    $('.data-container').css('display', 'block');
  };

  this.z = 2000;

  var gui = new dat.GUI({ autoPlace: false });
  gui.add(this, 'data');
  var customContainer = document.getElementById('gui-container');
  customContainer.appendChild(gui.domElement);
};


Fall.Coordinate = function() {
	this.loc   	  = new THREE.Vector3();
	this.locDiff  = new THREE.Vector3();
	this.accel	  = new THREE.Vector3();
	this.vel   	  = new THREE.Vector3();
	this.force 	  = new THREE.Vector3();
}

