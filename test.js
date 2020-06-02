<html lang="en">
  <head>
    <style>
      h1{
        border:5px double black;
      }   
    </style>
    <meta charset="utf-8">
  </head>
  
  <body>
    <h1 >PLAY BATTLESHIP</h1>
    <script src="battleship.js"></script>
  </body>
</html>


var location1 = 3;
var location2 = 4;
var location3 = 5;
var guess;
var hits = 0;
var guesses = 0;
var isSunk = false;
var tocontinue= true;

while (isSunk == false && tocontinue==true) {
	guess = prompt("Ready, aim, fire! (enter a number from 0-6): OR Enter q to quit the game");
	if (guess < 0 || guess > 6) {
		alert("Please enter a valid cell number!");
	}
	else if(guess==""){
		alert("game over");
	}
	else if(guess=="q"){ 
		var quit=prompt(" are you sure you want to quit ?");
		if(quit=="yes"){
			tocontinue=false;
		}
	}
	else{
		guesses = guesses + 1;
		if (guess == location1 || guess == location2 || guess == location3) {
			alert("HIT!");
			hits = hits + 1;
			if (hits == 3) {
				isSunk = true;
				alert("You sank my battleship!");
			}
		} 
		else{
			alert("MISS");
		}
	}
}
if( tocontinue==true){
	var stats = "You took " + guesses + " guesses to sink the battleship, " +
	"which means your shooting accuracy was " + (3/guesses);
	alert(stats);
}
