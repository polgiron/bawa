// Constructor
App.Modal = function() {
  $('.contact-button').on('click', function(event) {
    event.preventDefault();
    $('.modal').addClass('is-open');
    $('body').addClass('modal-is-open');
  });

  $('.dialog__close, .modal:not(.dialog)').on('click', function(event) {
    $('.modal').removeClass('is-open');
    $('body').removeClass('modal-is-open');
  });
};
