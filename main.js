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
  }
}
