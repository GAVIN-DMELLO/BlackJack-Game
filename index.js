let firstCard = 10;
let secondCard =4;
let cards = [firstCard , secondCard]

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

  cardsEl.textContent = "Cards :" 


  for(let i=0 ; i<cards.length ; i++){
    cardsEl.textContent += cards[i] + " ";
  }

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
  cards.push(card);
  console.log(cards);
  renderGame();
}

 