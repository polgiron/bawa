// Constructor
App.Reveal = function() {
  this.workEntries_ = $('.work__entry');

  this.workEntries_.each(function(index, el) {
    var watcher = scrollMonitor.create(el, -300);
    var imgRevArray = [];

    $(el).find('.entry__img').each(function(index, el) {
      var rev = new RevealFx(el, {
        revealSettings : {
          // bgcolor: '#e4e4e4',
          bgcolor: '#9b9b9b',
          direction: 'lr',
          delay: index * 200,
          onCover: function(contentEl, revealerEl) {
            contentEl.style.opacity = 1;
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
