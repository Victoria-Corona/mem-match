var gameCards = document.getElementById("gameCards");
var firstCardClicked;
var secondCardClicked;
var firstCardClasses;
var secondCardClasses;

gameCards.addEventListener("click", handleClick);


function handleClick(event) {
  if (event.target.className.indexOf("card-back") === -1) {
    return;
  }
  event.target.className += " hidden";

  if(!firstCardClicked){
    firstCardClicked = event.target;
    firstCardClasses = firstCardClicked.previousElementSibling.className;
    console.log("first card clicked", firstCardClasses);
  } else {
    secondCardClicked = event.target;
    secondCardClasses = secondCardClicked.previousElementSibling.className;
    console.log("second card clicked", secondCardClasses);
    gameCards.removeEventListener("click", handleClick);

    if(firstCardClasses === secondCardClasses){
      console.log("The images match");
      gameCards.addEventListener("click", handleClick);
      firstCardClicked = null;
      secondCardClicked = null;

    } else {
      console.log("The images do not match");
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
