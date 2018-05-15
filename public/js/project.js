// Constructor
App.Project = function() {
  $('.gallery a').on('click', function(event) {
    event.preventDefault();
    BigPicture({
      el: event.target,
      gallery: '.gallery'
    });
  });
};
