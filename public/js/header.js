// Constructor
App.Header = function() {
  // this.navEntry_ = $('.nav__entry');
  // this.index_ = 0;

  // this.navEntry_.hover(function() {
  //   this.index_ = $(this).index() + 1;
  //   $('.header__bg img').removeClass('is-active');
  //   $('.header__bg img').eq(this.index_).addClass('is-active');
  // }, function() {
  //   $('.header__bg img').removeClass('is-active');
  //   $('.header__bg img').eq(0).addClass('is-active');
  // });

  $('.header__bg img').load(function() {
    $(this).addClass('is-loaded');
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
