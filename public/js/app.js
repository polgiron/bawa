App.App = function() {
  try {
    new App.Header();
    new App.Work();
    new App.Project();
  } catch (e) {

  } finally {

  }
};

var app = new App.App();
