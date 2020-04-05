for (var i = 0; i < 7; i++) {
  document.querySelectorAll("button")[i].addEventListener("click", function() {


    var sw = this.innerHTML;
    makesound(sw);
    ba(sw);
  });

}

  document.addEventListener("keydown", function(event) {
        makesound(event.key);
        ba(event.key);
});

for (var j = 0; j < 7; j++) {
  document.querySelectorAll("button")[j].addEventListener("touchstart", function() {


    var swt = this.innerHTML;
    makesound(swt);
    ba(swt);
  });

}




function makesound(key) {


  switch (key) {
    case 'w':
      var audio = new Audio("sounds/tom-1.mp3");
      audio.play();
      break;

    case 'a':
      var audio = new Audio("sounds/tom-2.mp3");
      audio.play();
      break;

    case 's':
      var audio = new Audio("sounds/tom-3.mp3");
      audio.play();
      break;

    case 'd':
      var audio = new Audio("sounds/tom-4.mp3");
      audio.play();
      break;

    case 'j':
      var audio = new Audio("sounds/snare.mp3");
      audio.play();
      break;

    case 'k':
      var audio = new Audio("sounds/crash.mp3");
      audio.play();
      break;

    case 'l':
      var audio = new Audio("sounds/kick-bass.mp3");
      audio.play();
      break;


    default:

  }


}

function ba(key) {

var b=  document.querySelector("."+key);
b.classList.add("pressed");
 setTimeout(function () {
  b.classList.remove("pressed");
}, 100);
 }
