App.App = function() {
  new App.Header();

  if ($('body').hasClass('work')) {
    new App.Work();
  }

  if ($('body').hasClass('project')) {
    new App.Project();
  }
};

var app = new App.App();
