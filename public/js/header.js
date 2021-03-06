// Constructor
App.Header = function() {
  $('.header__bg img').load(function() {
    $(this).addClass('is-loaded');
  }).each(function() {
    if(this.complete) $(this).trigger('load');
  });

  $(window).on('scroll', function(event) {
    var scroll = $(document).scrollTop();
    var trans1 = scroll / 2;
    var trans2 = scroll / 3;
    var gray = scroll * 100 / 400;

    $('.header__bg img').css({
      'transform': 'translate3d(0, ' + trans1 + 'px, 0)',
      'filter': 'grayscale(' + gray + '%)'
    });

    $('.header__title').css('transform', 'translate3d(0, ' + trans2 + 'px, 0)');
  });
};
