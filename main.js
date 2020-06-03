var gameCards = document.getElementById("gameCards");
var modal = document.querySelector(".modal-overlay")
var firstCardClicked;
var secondCardClicked;
var firstCardClasses;
var secondCardClasses;
var maxMatches = 9;
var matches = 0;

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
        gameCards.addEventListener("click", handleClick);
      }, 2000);
    }
  }
}
