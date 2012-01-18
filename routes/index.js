
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
  // Set 1 year in milliseconds
  var one_year = 1000 * 60 * 60 * 24 * 365;

  var birthday = new Date();
  birthday.setFullYear(1985);
  birthday.setMonth(0);
  birthday.setDate(18);

  var today = new Date();

  // Calculate difference between today and my birthday, and convert to years
  var age = Math.floor((today.getTime() - birthday.getTime()) / (one_year));

  res.render('cv', {
    layout: false
    , age: age
    , title: 'CV - Cyril Gravelier'
  })
};

exports.qr = function(req, res) {
  res.redirect('/contact');
};