const HanoiGame = require('./game.js')
import HanoiView from "./hanoi-view.js";

$(() => {
  console.log("Working!");
  const rootEl = $('.hanoi');
  const game = new HanoiGame();
  new HanoiView(game, rootEl);
});
