(function() {
	$('.image-link').magnificPopup({type:'image'});

	var url = document.location.href,
		idHandle = 'imageToOpen'; 
	if( window.location.href.indexOf('#'+idHandle) !== -1 ){ //if id of element is in the URL than click it 
		$("#"+idHandle).click();
	}
})();