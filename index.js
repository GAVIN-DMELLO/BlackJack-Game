let firstCard = 10;
let secondCard =4;

let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let message = "";
let card = 7;


let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");

function startGame(){
  renderGame();
}

function renderGame(){
  cardsEl.textContent = "Cards :" + firstCard +" " + secondCard;
  sumEl.textContent = "Sum :" + sum;
  console.log("the game is starting");
  if(sum <= 20){
    message = "Do you want to draw a new card? 🙂";
  }
  else if(sum === 21){
    message = "Wohoo! You've got Blackjack! 🥳"
    hasBlackJack = true;
  }
  else{
    message = "You're out of the game! 😭"
    isAlive = false;
  }

  messageEl.textContent = message;
  console.log(hasBlackJack);
  console.log(isAlive);
  console.log(message);

}


function newCard(){
  console.log("Drawing a new card from the deck");
  sum += card;
  renderGame();
}

 