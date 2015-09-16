//Author: Pui-Ling Lau
//Accordion JS

var linglauAccordion = (function(){

	accordion = function(elementWrapper){

		var accordionArea = document.querySelectorAll(elementWrapper)[0],
		accordionContent = document.getElementsByClassName('accordionContent');

		accordionArea.addEventListener('click', function(event){
			if(event.target.className === "accordionHeader") {
				for(var i=0; i<accordionContent.length; i++){ //hide all content areas
					accordionContent[i].style.display='none';
					if (!event.target.parentNode.classList.contains('open')) {
						accordionContent[i].parentNode.classList.remove('open'); //remove all open class
					}
					if (!accordionContent[i].parentNode.classList.contains('closed')) {
						accordionContent[i].parentNode.className +=' closed'; //add all closed class
					}
				}
				var accordionClickedParent = event.target.parentNode;
				accordionClickedParent.classList.toggle('closed');
				accordionClickedParent.classList.toggle('open');
			}
		});
	},
	init = function(){
		accordion();
	};
	return {
		init: init
	};
}());


(function(){
	accordion('.accordionWrapper');
}());


