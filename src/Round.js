const Turn = require('../src/Turn');

class Round {
  constructor(deckObj){
    this.deckStack = deckObj
    this.turns = 0
    this.currentCard
    this.userTurn
    this.incorrectGuesses = []
  }
  returnCurrentCard(){
    this.currentCard = this.deckStack.stack[this.turns]
    return this.currentCard
  }
  takeTurn(guess){
    this.returnCurrentCard()
    this.userTurn = new Turn(guess, this.currentCard);
    this.turns++ 
    if(!this.userTurn.evaluateGuess()){
      this.incorrectGuesses.push(this.currentCard.id)
    }
    return this.userTurn.giveFeedback()
  }
  calculatePercentCorrect(){
    return 100 - (this.incorrectGuesses.length * 3)
  }
  endRound(){
    return console.log(`** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`);
  }
}

module.exports = Round;