//Speed reader

//Began 25th Feb 2015
//Edited 1st July 2015

var submit = document.querySelector('#submit'),
  stop = document.querySelector('#stop'),
  input = document.querySelector('#inputValue'),
  divDisplay = document.getElementById('display'),
  str = divDisplay.innerHTML,
  timer,
  words = document.getElementById("words").innerHTML,
  arrayWords = [];

var speedreader = (function(){
  var iterateArrayWithDelay = function(arr, delay, fn) { 
    //Function to delay iterations in array
    window.clearTimeout(timer);
    var index = 0;
 
    function next() {
        // protect against empty array
        if (!arr.length) {
            return;
        }
        // see if we need to wrap the index
        if (index >= arr.length) {
            index = 0;
        }
        // call the callback
        if (fn(arr[index], arr, index) === false) {
            // stop iterating
            return;
        }
             
        ++index;
      
        // schedule next iteration
        timer = setTimeout(next, delay);
       
    }
    // start the iteration
    next();
  },
  swapWordFunction = function(item, array, i){
    //Swap words in the array
     str = divDisplay.innerHTML.replace(str, arrayWords[i]);
     divDisplay.innerHTML = str;   
  },
  inputSubmit = function(){
    //Checking input value
    if(input.value.length !== 0) {
      
      var valInput = input.value,
      wordsPerMinute = valInput,
      wordsPerSecond = wordsPerMinute/60,
      milliSecondsPerWord = (1/wordsPerSecond)*1000;
      //console.log("inputValue "+valInput);

      //How to get .text() in pure javascript.
      document.getElementById("words").innerHTML = words.replace(/<[^>]*>/g, "");

      //Splitting the words into an array
      arrayWords = words.split(' ');
    
      //console.log("milliseconds "+milliSecondsPerWord);
    
      iterateArrayWithDelay(arrayWords, milliSecondsPerWord, swapWordFunction);
      
    } else {
      console.log('empty input');
      //validation message
    }
  },
  init = function(){
    submit.addEventListener("click", inputSubmit);
    stop.addEventListener('click', function(){ 
      window.clearTimeout(timer);
      divDisplay.innerHTML = "";
    });
  };
  return {
      init: init
  };

}());

(function() {
    speedreader.init();
})();