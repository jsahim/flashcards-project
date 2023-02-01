const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round');

class Game {
  constructor(currentRound) {
    this.currentRound = currentRound
  }
  start(prototypeQuestions){
    const cardsArray = []
    prototypeQuestions.forEach(element => {
      cardsArray.push(new Card(element.id, element.question, element.answers, element.correctAnswer))
    })
    const newDeck = new Deck(cardsArray);
    const newRound = new Round(newDeck);
    printMessage(newDeck, newRound)
    printQuestion(newRound)
  }
  printMessage(deck, round) {
    console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }

  printQuestion(round) {
      util.main(round);
  }
}

module.exports = Game;