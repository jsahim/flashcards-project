const chai = require('chai');
const expect = chai.expect;

const Game = require('../src/Game');

describe.only('Game', function() {
  let game, questionData

  beforeEach('game instance', () => {
    game = new Game()

    questionData = [{
      "id": 1,
      "question": "What allows you to define a set of related information using key-value pairs?",
      "answers": ["object", "array", "function"],
      "correctAnswer": "object"
    }, {
      "id": 2,
      "question": "What is a comma-separated list of related values?",
      "answers": ["array", "object", "function"],
      "correctAnswer": "array"
    }, {
      "id": 3,
      "question": "What type of prototype method directly modifies the existing array?",
      "answers": ["mutator method", "accessor method", "iteration method"],
      "correctAnswer": "mutator method"
    }]

  });

  it('should be a function', () => {
    expect(Game).to.be.a('function');
  });

  it('should be an instance of Game', () => {
    expect(game).to.be.an.instanceof(Game);
  }); 

  it('should be a able to make flashcards with a set of questions', () => {
    game.start(questionData)

    expect(game.currentRound.deckStack.stack).to.be.an('Array');
    expect(game.currentRound.deckStack.stack[1].question).to.equal("What is a comma-separated list of related values?");
  });  

  it('should make those flashcards into a deck', () => {
    game.start(questionData)

    expect(game.currentRound.deckStack).to.be.an('Object');
    expect(game.currentRound.deckStack.stack.length).to.equal(3);
    expect(game.currentRound.deckStack.stack[2].correctAnswer).to.equal("mutator method");
  });  

  it('should be able to store all round information', () => {
    game.start(questionData)

    expect(game.currentRound).to.be.an('Object');
    expect(game.currentRound.incorrectGuesses).to.deep.equal([]);
    expect(game.currentRound.turns).to.equal(0);

    game.currentRound.takeTurn("cabbages")
    game.currentRound.takeTurn("array")

    expect(game.currentRound.incorrectGuesses).to.deep.equal([1]);
    expect(game.currentRound.turns).to.equal(2);
  });  

});