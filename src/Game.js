const util = require('./util');
const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round');

class Game {
  constructor() {
    this.currentRound;
  }
  start(questions){
    const cardsArray = []
    questions.forEach(element => {
      cardsArray.push(new Card(element.id, element.question, element.answers, element.correctAnswer))
    })
    const newDeck = new Deck(cardsArray);
    this.currentRound = new Round(newDeck);
    this.printMessage(newDeck, this.currentRound)
    this.printQuestion(this.currentRound)
  }
  printMessage(deck) {
    console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }

  printQuestion(round) {
      util.main(round);
  }
}

module.exports = Game;