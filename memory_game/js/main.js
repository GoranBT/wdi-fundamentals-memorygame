var cards = [
	{
		rank: "queen",
		suit: "hearts",
		cardImage: "images/queen-of-hearts.png"
	},
	{
		rank: "queen",
		suit: "diamonds",
		cardImage: "images/queen-of-diamonds.png"
	},
	{
		rank: "king",
		suit: "hearts",
		cardImage: "images/king-of-hearts.png"
	},
	{
		rank: "king",
		suit: "diamonds",
		cardImage: "images/king-of-diamonds.png"
	}
];
//empty array to hold the cards in play 
var cardsInPlay = [];
//score variable
var score = 0;
//Check if First card === Second card

var checkForMatch = function () {
	
	if (cardsInPlay[0] === cardsInPlay[1]) {
		
		alert("You Found a match!");
		score = score + 1;
		document.getElementById("score").textContent =  score;

		
	} else {
		alert("Sorry, try again");
	}
	
}

var flipCard = function () {
	//get data-id from the clicked card and store in CardId
	var cardId = this.getAttribute("data-id");
	//set the card image sorce attribute
	this.setAttribute('src', cards[cardId].cardImage);
	console.log("User flipped " + cards[cardId].rank);
	// push card --> cardsInPlay array
	cardsInPlay.push(cards[cardId].rank);
	
	//checking if there are two cards in the array (if 2 --> call checkForMatch)
	if (cardsInPlay.length === 2) {
		checkForMatch();
	}
	
	console.log(cards[cardId].cardImage);
	console.log(cards[cardId].suit);
}



var createBoard = function() {
 // create cards
	for (var i = 0; i < cards.length; i++) {
		// create img element and storing in var cardElement
		var cardElement = document.createElement("img");
		// set sorce attribute to the new img element
		cardElement.setAttribute("src", "images/back.png");
		// set data-id attribute using loop (i)
		cardElement.setAttribute("data-id", i);
		// add eventlistener to the element 
		//(when clicked to call flipCard function)
		cardElement.addEventListener("click", flipCard);
		document.getElementById("game-board").appendChild(cardElement);
	}
}

createBoard();


