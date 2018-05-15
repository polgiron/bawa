// Constructor
App.Work = function() {
  this.workEntries_ = $('.section--bigpicture');

  this.workEntries_.each(function(index, workElement) {
    var watcher = scrollMonitor.create(workElement, -400);

    watcher.enterViewport(function() {
      $(workElement).addClass('is-active');

      watcher.destroy();
    });
  });
};
