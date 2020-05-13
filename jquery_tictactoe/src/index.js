

const View = require('./ttt-view.js')// require appropriate file
const Game = require("../tictactoe_node_solution/game.js");// require appropriate file

  $(() => {
    $figure = $('.ttt');
    const game = new Game();
    const view = new View(game, $figure);
  });

