class View {
  constructor(game, $el) {
    this.game = game;
    this.$el = $el;
    this.setupBoard();
    this.bindEvents();
  }

  bindEvents() {
    $("li").on('click', e => {
      const $cell = $(e.currentTarget);
      this.makeMove($cell);
      // debugger
      if (this.game.winner()){
        // debugger
        alert(`Player ${this.game.winner()} Wins!!!`);
      }
    });
  }
  
  makeMove($square) {
    let mark = this.game.currentPlayer;
    let pos = $square.data("pos");
    if (this.game.board.isEmptyPos(pos)){
      this.game.playMove(pos);
      // debugger
      $square.text(mark);
      $square.toggleClass("unclicked clicked");
    } else {
      alert("Invalid move!");
    }
  }

  setupBoard() {
    this.$el.append("<ul>");
    const $ul = $("ul");
    for (let i = 0; i < 9; i++) {
      let $li = $("<li>");
      let row = Math.floor(i / 3);
      let col = i % 3;
      $li.data({ pos: [row, col] }); 
      $li.addClass("unclicked");
      $ul.append($li);
    };
  }
}

module.exports = View;
