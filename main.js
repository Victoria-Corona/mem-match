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
var resetGameButton = document.getElementById("reset-game");

var cards = [
  "css-logo",
  "docker-logo",
  "gitHub-logo",
  "html-logo",
  "js-logo",
  "mysql-logo",
  "node-logo",
  "php-logo",
  "react-logo",
  "css-logo",
  "docker-logo",
  "gitHub-logo",
  "html-logo",
  "js-logo",
  "mysql-logo",
  "node-logo",
  "php-logo",
  "react-logo"
];

gameCards.addEventListener("click", handleClick);
resetGameButton.addEventListener("click", resetGame);

createCards();

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
      displayStats();
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
        displayStats();
        gameCards.addEventListener("click", handleClick);
      }, 1000);
    }
  }
}

function displayStats(){
  gameRound.textContent = gamesPlayed;
  attemptsMade.textContent = attempts;
  playerAccuracy.textContent = calculateAccuracy(attempts, matches);
}

function calculateAccuracy(attempts, matches){
  if(!attempts){
    return "0%";
  }

  return (Math.trunc((matches/attempts) * 100)) + "%";
}

function resetGame(){
  attempts = 0;
  matches = 0;
  gamesPlayed++;
  displayStats();
  resetCards();
  modal.classList.add("hidden")
}

function resetCards(){
  var hiddenCards = document.querySelectorAll(".card-back");

  for (var count = 0; count < hiddenCards.length; count++){
    hiddenCards[count].classList.remove("hidden");
  }
}

function createCards(){
  for(var start = 0; start < cards.length; start++){
    var parentDiv = document.createElement("div");
    parentDiv.className = "col-2 card";

    var childFront = document.createElement("div");
    childFront.className = "card-front";

    var childBack = document.createElement("div");
    childBack.className = "card-back";

    parentDiv.appendChild(childFront);
    parentDiv.appendChild(childBack);
    gameCards.appendChild(parentDiv);
  }




}




//function needs to be called onload
//or not! I like my way better, it's more fun
//function needs to create a div element
//that element will be given a calssname of col-2 and card
//that div element is also a parent to two children
//two more divs will have to be made, both assigned either a
//card-front or card-back, but both appended to the parent
//function needs to create 18 of them


function shuffleCards(){

}
