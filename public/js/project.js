// Constructor
App.Project = function() {
  console.log('project');
  $('.gallery a').on('click', function(event) {
    event.preventDefault();
    BigPicture({
      el: event.target,
      gallery: '.gallery'
    });
  });
};
