var gameCards = document.getElementById("gameCards");
var modal = document.querySelector(".modal-overlay")
var firstCardClicked;
var secondCardClicked;
var firstCardClasses;
var secondCardClasses;
var maxMatches = 9;
var matches = 0;
var attempts = 0;
var gamesPlayed = 0;
var gameRound = document.getElementById("game-round");
var attemptsMade = document.getElementById("attempts-made");
var playerAccuracy = document.getElementById("player-accuracy");

gameCards.addEventListener("click", handleClick);


function handleClick(event) {
  if (event.target.className.indexOf("card-back") === -1) {
    return;
  }
  event.target.className += " hidden";

  if(!firstCardClicked){
    firstCardClicked = event.target;
    firstCardClasses = firstCardClicked.previousElementSibling.className;
  } else {
    secondCardClicked = event.target;
    secondCardClasses = secondCardClicked.previousElementSibling.className;
    gameCards.removeEventListener("click", handleClick);

    if(firstCardClasses === secondCardClasses){
      gameCards.addEventListener("click", handleClick);
      firstCardClicked = null;
      secondCardClicked = null;

      matches++;
      attempts++;
      console.log(attempts)
      if(matches === maxMatches){
        console.log("You've won!");
        modal.classList.remove("hidden");
      }

    } else {
      setTimeout(function(){
        firstCardClicked.classList.remove("hidden");
        secondCardClicked.classList.remove("hidden");
        firstCardClicked = null;
        secondCardClicked = null;
        attempts++;
        console.log(attempts);
        gameCards.addEventListener("click", handleClick);
      }, 2000);
    }
  }
}

function displayStats(){
  gameRound.textContent = gamesPlayed;
  attemptsMade.textContent = attempts;
  playerAccuracy.textContent = matches/attempts;
}
