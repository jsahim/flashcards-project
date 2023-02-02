const chai = require('chai');
const expect = chai.expect;
const data = require('../src/data');
const prototypeQuestions = data.prototypeData;

const Game = require('../src/Game');
// const Card = require('../src/Card');
// const Deck = require('../src/Deck');
// const Turn = require('../src/Turn');
// const Round = require('../src/Round');


describe('Game', function() {
  let game;

  beforeEach('game instance', () => {
    game = new Game()
  });

  it('should be a function', () => {
    expect(Game).to.be.a('function');
  });

  it('should be an instance of Game', () => {
    expect(game).to.be.an.instanceof(Game);
  }); 

  it('should be able to start the game', () => {
    game.start(prototypeQuestions)
    expect(game.currentRound).to.be.an('Object');
  });  

  it.skip('should be a able to count the number of cards in the deck', () => {
    const countStack = deck.countCards()

    expect(countStack).to.be.a('number');
    expect(countStack).to.equal(3);
  });  

});