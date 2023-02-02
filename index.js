const data = require('./src/data');
const prototypeQuestions = data.prototypeData;
const Game = require('./src/Game');

console.log('Your project is running...'); 

const game = new Game()
game.start(prototypeQuestions)