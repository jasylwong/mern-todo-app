const button = document.querySelector('#button')
const numberOfCardsDisplay = document.querySelector('#numberOfCardsDisplay')
let numberOfCards = 1;
const fewerCards = document.querySelector('#fewerCards')
const moreCards = document.querySelector('#moreCards')
const card1 = document.querySelector('#card1')

// const cards = ["AC", "2C", "3C", "4C", "5C", "6C", "7C", "8C", "9C", "10C", "JC", "QC", "KC",
//   "AD", "2D", "3D", "4D", "5D", "6D", "7D", "8D", "9D", "10D", "JD", "QD", "KD",
//   "AS", "2S", "3S", "4S", "5S", "6S", "7S", "8S", "9S", "10S", "JS", "QS", "KS",
//   "AH", "2H", "3H", "4H", "5H", "6H", "7H", "8H", "9H", "10H", "JH", "QH", "KH"]
const cards = ["AC", "2C", "3C", "4C", "5C", "6C", "7C", "8C", "9C", "10C", "JC", "QC", "KC",
  "AD", "2D", "3D", "4D", "5D", "6D", "7D", "8D", "9D", "10D", "JD", "QD", "KD",
  "AS", "2S", "3S", "4S", "5S", "6S", "7S", "8S", "9S", "10S", "JS", "QS", "KS",
  "AH", "2H", "3H", "4H", "5H", "6H", "7H", "8H", "9H", "10H", "JH", "QH", "KH"]
// const cards = ["AD", "AC", "2C", "3C", "4C", "5C", "6C", "7C", "8C", "9C", "10C", "JC", "QC", "KC"]

// const cards = ["AS"]

button.onclick = function() {
  const currentCard = cards[Math.floor(Math.random() * cards.length)]
  card1.src = `./cards/${currentCard}.png`
  card1.style = ""
  console.log('card')
}

moreCards.onclick = function () {
  numberOfCards++;
  numberOfCardsDisplay.innerHTML = numberOfCards;
}

fewerCards.onclick = function () {
  numberOfCards--;
  numberOfCardsDisplay.innerHTML = numberOfCards;
}
