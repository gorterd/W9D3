const HanoiGame = require('./game.js')

$(() => {
  console.log("Working!");
  const rootEl = $('.hanoi');
  const game = new HanoiGame();
  new HanoiView(game, rootEl);
});
