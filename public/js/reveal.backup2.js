// Constructor
App.Reveal = function() {
  this.workEntries_ = $('.section--work');

  this.workEntries_.each(function(index, el) {
    var watcher = scrollMonitor.create(el, -400);
    var imgRevArray = [];

    $(el).find('.img__img').each(function(index, el) {
      var rev = new RevealFx(el, {
        revealSettings : {
          bgcolor: '#e4e4e4',
          // bgcolor: '#9b9b9b',
          direction: 'bt',
          delay: index * 200,
          speed: 300,
          onCover: function(contentEl, revealerEl) {
            contentEl.style.opacity = 1;
            $(contentEl).addClass('is-revealed');
          }
        }
      });

      imgRevArray.push(rev);
    });

    watcher.enterViewport(function() {
      imgRevArray.forEach(function(rev) {
        rev.reveal();
      });

      watcher.destroy();
    });
  });
};

// App.Reveal.prototype.init_ = function() {
  // this.addEventListenners_();
// };

// App.Reveal.prototype.addEventListenners_ = function() {
//
// };
