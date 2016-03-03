var Fall = Fall || {};


Fall.GUI = function(onNewData){
	// runs anytime 'data' field in control box is clicked
	$('.cancel').click(function() {
		$('.data-container').css('display', 'none');
		$('#data-input').get(0).value = '';
	});
	
	// runs anytime 'submit' is clicked
  	$('.submit').click(function(){ 
	    $('.data-container').css('display', 'none');
	    if($('#data-input').get(0).value !== ''){
	      onNewData($('#data-input').get(0).value);
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


