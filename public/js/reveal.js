// Constructor
App.Reveal = function() {
  this.workEntries_ = $('.section--bigpicture');
  console.log(this.workEntries_);
  console.log('heyy');

  this.workEntries_.each(function(index, workElement) {
    console.log(index);
    var watcher = scrollMonitor.create(workElement, -400);

    watcher.enterViewport(function() {
      $(workElement).addClass('is-active');

      watcher.destroy();
    });
  });
};
