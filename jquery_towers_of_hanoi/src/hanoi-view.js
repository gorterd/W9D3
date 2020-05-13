export default class HanoiView {
  constructor(game, $el) {
    this.game = game;
    this.$el = $el;
    this.setupTowers();
  }

  setupTowers() {
    this.$el.append("<ul>", "<ul>", "<ul>");
    const $ul = $('ul'); 
    $ul.each( function() {
      // debugger
      $(this).append("<li>", "<li>", "<li>");
    });
  }

  render(){

  }
};

