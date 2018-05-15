var keystone = require('keystone');

exports = module.exports = function (req, res) {
  var view = new keystone.View(req, res);
  var locals = res.locals;

  locals.page = 'work';
  locals.title = 'BAWA Collective — Work';

  view.render('work');
};
