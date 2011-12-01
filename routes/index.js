
/*
 * GET home page.
 */

exports.index = function(req, res) {
  res.render('index', {
    title: 'Cyril Gravelier'
  })
};

exports.contact = function(req, res) {
  res.render('contact', {
    title: 'Contact - Cyril Gravelier'
  })
};

exports.cv = function(req, res) {
  res.render('cv', {
    layout: false
    , title: 'CV - Cyril Gravelier'
  })
};

exports.qr = function(req, res) {
  res.redirect('/contact');
};