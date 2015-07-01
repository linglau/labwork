var input = document.getElementById('inputValue'),
	answer = document.getElementById('answer'),
	submit = document.getElementById('submit');

var commas = (function(){
    var replaceCommas = function(amount){
		var amountArray = amount.split(',');
		var amountWithoutCommas='';
		for(var i=0;i<amountArray.length;i++){
			amountWithoutCommas+=amountArray[i];
	  	}
		return parseInt(amountWithoutCommas);
	},
	inputValue = function(){
		var amountToReplace = input.innerHTML,
		replace = replaceCommas(amountToReplace);

		answer.innerHTML = answer.innerHTML + replace;
	},
    init = function(){
        submit.addEventListener("click", inputValue);
    };
    return {
        init: init
    };

}());

(function() {
    commas.init();
})();