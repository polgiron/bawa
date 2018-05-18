var keystone = require('keystone');

exports = module.exports = function (req, res) {
  var view = new keystone.View(req, res);
  var locals = res.locals;

  locals.page = 'work';
  locals.title = 'BAWA Collective — Work';
  locals.heroBg = 'https://source.unsplash.com/collection/2113211/1200x800?sig=1';

  view.render('work');
};
